// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Form validation
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission for now

  const name = document.querySelector('input[placeholder="Name"]');
  const email = document.querySelector('input[placeholder="Email"]');
  const message = document.querySelector('textarea[placeholder="Message"]');

  if (!name.value || !email.value || !message.value) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  alert('Form submitted successfully!');
});