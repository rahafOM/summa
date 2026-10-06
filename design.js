const themeButton = document.getElementById('themeToggle');
try { document.body.classList.toggle('dark', localStorage.getItem('summa-theme') === 'dark'); } catch (_) {}
function updateThemeButton() {
  const dark = document.body.classList.contains('dark');
  const ar = document.documentElement.lang === 'ar';
  themeButton.textContent = dark ? '☀️' : '🌙';
  themeButton.setAttribute('aria-label', ar ? (dark ? 'الوضع الفاتح' : 'الوضع الداكن') : (dark ? 'Light mode' : 'Dark mode'));
  themeButton.setAttribute('aria-pressed', String(dark));
}
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  try { localStorage.setItem('summa-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); } catch (_) {}
  updateThemeButton();
});
document.getElementById('langToggle').addEventListener('click', updateThemeButton);
updateThemeButton();