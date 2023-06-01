const submit = document.querySelector("form");
const successMessage = document.getElementById('successMessage');

submit.addEventListener("submit", (event) => {
  event.preventDefault();
  const formdata = new FormData(submit);
  const obj = Object.fromEntries(formdata);
  const json = JSON.stringify(obj);

  // Retrieve existing feedback data from localStorage
  let existingData = localStorage.getItem('feedback');

  if (existingData) {
    // Check if the existing data is an array
    existingData = JSON.parse(existingData);
    if (!Array.isArray(existingData)) {
      existingData = [];
    }
  } else {
    // If no existing data, create an empty array
    existingData = [];
  }

  // Append the new feedback to the array
  existingData.push(obj);

  // Store the updated feedback array in localStorage
  localStorage.setItem('feedback', JSON.stringify(existingData));
  successMessage.style.display = 'block';
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 3000);
});