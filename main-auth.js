import { checkAuth, logout, getCurrentUser, setupAuthListener } from './auth.js';

async function updateAuthUI() {
  const session = await checkAuth();
  const authLink = document.getElementById('auth-link');

  if (session) {
    const user = await getCurrentUser();
    authLink.textContent = 'Logout';
    authLink.href = '#';
    authLink.addEventListener('click', async (e) => {
      e.preventDefault();
      await logout();
    });
  } else {
    authLink.textContent = 'SignUp';
    authLink.href = 'register.html';
  }
}

setupAuthListener((event, session) => {
  if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
    updateAuthUI();
  }
});

updateAuthUI();
