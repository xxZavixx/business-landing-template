// Theme Switching
const themeSwitcher = document.getElementById('theme-switcher');
const themeLink = document.getElementById('theme-link');

themeSwitcher.addEventListener('change', (event) => {
  const selectedTheme = event.target.value;
  themeLink.setAttribute('href', selectedTheme);
});
