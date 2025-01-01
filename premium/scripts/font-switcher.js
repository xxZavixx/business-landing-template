// Font Switching
const fontSelector = document.getElementById('font-switcher');

fontSelector.addEventListener('change', (event) => {
  const selectedFont = event.target.value;
  document.body.style.fontFamily = selectedFont;
});
