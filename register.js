import { supabase } from './supabase-client.js';

const form = document.getElementById('register-form');
const msg = document.getElementById('register-msg');

document.querySelectorAll('.pw-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.parentElement.querySelector('input');
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
  });
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  msg.textContent = '';
  msg.style.color = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (!name || !email || !password) {
    msg.textContent = 'Please fill required fields.';
    return;
  }

  if (password.length < 6) {
    msg.textContent = 'Password must be at least 6 characters.';
    return;
  }

  if (password !== confirmPassword) {
    msg.textContent = 'Passwords do not match.';
    return;
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: name
        }
      }
    });

    if (error) {
      msg.textContent = error.message;
      return;
    }

    msg.style.color = '#2a8f3a';
    msg.textContent = 'Account created successfully! Redirecting to login...';
    setTimeout(() => location.href = 'login.html', 1500);
  } catch (err) {
    msg.textContent = 'Network error. Please try again.';
  }
});
