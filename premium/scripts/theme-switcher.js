const themeSelector = document.getElementById('theme-selector');

themeSelector.addEventListener('change', (event) => {
  const theme = event.target.value;
  const themeStylesheet = document.getElementById('theme-stylesheet');
  themeStylesheet.href = `styles/theme-${theme}.css`;
});
