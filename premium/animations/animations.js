// Add animations on scroll
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const handleScroll = () => {
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('fade-in'); // Default animation class
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger on page load
});
