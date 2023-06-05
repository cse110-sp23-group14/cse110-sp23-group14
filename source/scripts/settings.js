import { Zodiac } from "./zodiac.js";

window.addEventListener('DOMContentLoaded', (event) => {
    // Call the functions to display the stored name and birthday
    displayStoredName();
    displayStoredBirthday();
    displayZodiac();

    const clearNameButton = document.getElementById('clear-name-button');
    clearNameButton.addEventListener('click', clearName);
    // not gonna use clear birthday
    // const clearBirthdayButton = document.getElementById('clear-birthday-button');
    // clearBirthdayButton.addEventListener('click', clearBirthday);

    const saveUserNameForm = document.getElementById('save-name-form');
    saveUserNameForm.addEventListener('submit', saveUserName);
    const saveBirthdayForm = document.getElementById('save-birthday-form');
    saveBirthdayForm.addEventListener('submit', saveBirthday);
})

/**
 * Displays the stored birthday information on the webpage.
 * @function
 * @returns {void}
 */
function displayStoredBirthday() {
    const birthdayInfoElement = document.getElementById('birthday-text');
    const storedBirthday = localStorage.getItem('birthday');

    if (storedBirthday) {
        birthdayInfoElement.innerHTML = `The birthday we have for you is <span class='highlight'>${storedBirthday}</span>.`;
    } else {
        birthdayInfoElement.innerHTML = "We don't have your <span class='highlight'>birth date</span> yet!";
    }
}


/**
 * Displays the stored name information on the webpage.
 * @function
 * @returns {void}
 */
function displayStoredName() {
    const nameInfoElement = document.getElementById('name-text');
    const storedName = localStorage.getItem('name');

    if (storedName) {
        nameInfoElement.innerHTML = `The name we have for you is ${storedName}.`;
    } else {
        nameInfoElement.innerHTML = "We don't have your <span class='highlight'>name</span> yet!";
    }
}

async function displayZodiac() {
    const zodiacInfoElement = document.getElementById('zodiac-text');
    const storedBirthday = localStorage.getItem('birthday');
    if (!storedBirthday) {
        zodiacInfoElement.innerHTML = "";
        return;
    }
    const zodiacSign = Zodiac.getZodiacSign(storedBirthday.split('.')[0], storedBirthday.split('.')[1], Zodiac.zodiacTable);
    console.log(zodiacSign);
    if (zodiacSign) {
        zodiacInfoElement.innerHTML = `Your sign is <span class='highlight'>${zodiacSign}</span>!`;
    }
}

/**
 * Saves the string entered by the user as their name into local storage.
 */
function saveUserName() {
    var userName = document.getElementById('name').value;
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

// not gonna use
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
 * Clears the stored name from local storage and refreshes the page.
 */
function clearName() {
    localStorage.removeItem('name');
    location.reload(); // Refresh the page
}

/**
 * Clears the stored birthday from local storage and refreshes the page.
 */
// function clearBirthday() {
//     localStorage.removeItem('birthday');
//     location.reload(); // Refresh the page
// }

function navigateToNewPage(){
    window.location.href = "feedback.html";
}

function nagigateToProfile(){
    window.location.href = "userprofile.html"
}