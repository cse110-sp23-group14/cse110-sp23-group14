import { Zodiac } from "./zodiac.js";

window.addEventListener('DOMContentLoaded', (event) => {
    // Call the functions to display the stored name and birthday
    displayStoredData();

    // const birthdayMonth = document.getElementById('birthday-month');
    // birthdayMonth.addEventListener('input', updateBirthdayDays);

    // const clearNameButton = document.getElementById('clear-name-button');
    // clearNameButton.addEventListener('click', clearName);
    // not gonna use clear birthday
    // const clearBirthdayButton = document.getElementById('clear-birthday-button');
    // clearBirthdayButton.addEventListener('click', clearBirthday);

    const saveUserNameForm = document.getElementById('save-name-form');
    saveUserNameForm.addEventListener('submit', saveUserName);
    const saveBirthdayForm = document.getElementById('save-birthday-form');
    saveBirthdayForm.addEventListener('submit', saveBirthday);
    const clearUserInfoButton = document.querySelector('.clear-profile button');
    clearUserInfoButton.addEventListener('click', clearUserInfo);
});

function displayStoredData() {
    const displayElement = document.getElementById('profile-display');
    const storedBirthday = localStorage.getItem('birthday');
    if (storedBirthday) {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            displayElement.innerHTML = `Welcome back ${storedName}! Your birthday on record is ${storedBirthday}`;
        } else {
            displayElement.innerHTML = `Welcome back! Your birthday on record is ${storedBirthday}`;
        }
    }
}

/**
 * Update number of days when different months are input
 */
// function updateBirthdayDays() {
//     var monthSelect = document.getElementById('birthday-month');
//     var daySelect = document.getElementById('birthday-day');
//     var selectedMonth = parseInt(monthSelect.value);
//     var daysInMonth = new Date(2023, selectedMonth, 0).getDate(); // Get the number of days in the selected month
//     daySelect.innerHTML = ''; // Clear previous options
//     for (var i = 1; i <= daysInMonth; i++) {
//         var option = document.createElement('option');
//         option.value = i;
//         option.text = i;
//         daySelect.appendChild(option);
//     }
// }

/**
 * Saves the string entered by the user as their name into local storage.
 */
function saveUserName() {
    const userName = document.getElementById('name').value;
    console.log(userName);
    localStorage.setItem('name', userName);
}

/**
 * Saves the birthday entered by the user into local storage.
 */
function saveBirthday() {
    const birthdayInput = document.getElementById("birthday");
    // anonymous function that 
    // change date format to what we use
    // e.g. birthdayInput: "2023-06-02" -> birthday: "6.2"
    const birthday = ((dateString) => {
      const date = new Date(dateString);
      const month = (date.getMonth() + 1).toString();
      const day = date.getDate().toString();
      if (month.startsWith("0")) {
        month = month.substring(1);
      }
      if (day.startsWith("0")) {
        day = day.substring(1);
      }
      return month + "." + day;
    })(birthdayInput.value);
    // Store the formatted birthday in localStorage
    localStorage.setItem("birthday", birthday);
    // Display a success message
    alert("Birthday saved successfully!");
  }

/**
 * Clears the stored name from local storage and refreshes the page.
 */
function clearName() {
    localStorage.removeItem('name');
    location.reload(); // Refresh the page
}

/**
 * Clears the stored birthday from local storage and refreshes the page.
 */
function clearBirthday() {
    localStorage.removeItem('birthday');
    location.reload(); // Refresh the page
}

function clearUserInfo() {
    alert(`This will delete your name and birthday,are you sure you want to do this?`);
    clearName();
    clearBirthday();
}
