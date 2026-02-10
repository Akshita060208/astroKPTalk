const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const name = formData.get('name');
  const problem = formData.get('problem');

  formMessage.textContent = `Thank you, ${name}. Your ${problem} appointment request has been received. Our team will call you soon.`;
  bookingForm.reset();
});
