const fontSelector = document.getElementById('font-selector');

fontSelector.addEventListener('change', (event) => {
  const font = event.target.value;
  const fontLink = document.getElementById('font-link');
  fontLink.href = `https://fonts.googleapis.com/css2?family=${font}:wght@300;400;700&display=swap`;
  document.body.style.fontFamily = font.replace(/\+/g, ' ');
});
