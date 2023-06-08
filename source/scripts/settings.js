import { Horoscope } from "./horoscope.js";

window.addEventListener('DOMContentLoaded', (event) => {
    // Call the functions to display the stored name and birthday
    displayStoredData();
    setHoroscope();

    const saveUserNameForm = document.getElementById('save-name-form');
    saveUserNameForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page jump
        saveUserName();
        displayStoredData();
        setHoroscope();
    });

    const saveBirthdayForm = document.getElementById('save-birthday-form');
    saveBirthdayForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page jump
        saveBirthday();
        displayStoredData();
        setHoroscope();
    });
    
    const clearUserInfoButton = document.querySelector('.clear-profile button');
    clearUserInfoButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent page jump
        clearUserInfo();
        displayStoredData();
        setHoroscope();
    });
});

/**
 * get user name and birthday from localStorage,
 * and display them in setting page
 */
function displayStoredData() {
    const displayElement = document.getElementById('profile-display');
    const storedBirthday = localStorage.getItem('birthday');
    if (storedBirthday) {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            displayElement.innerHTML = `Welcome back <span class="highlight">${storedName}</span>! Your birthday on record is <span class="highlight">${storedBirthday}</span>`;
        } else {
            displayElement.innerHTML = `Welcome back! Your birthday on record is <span class="highlight">${storedBirthday}</span>`;
        }
    }
}

/**
 * set daily report's popup card and background according to user's birthday
 */
function setHoroscope() {
    const horoscopeContent = document.querySelector('.horoscope-content');
    const zodiacSign = Horoscope.getSign();
    const defaultImage = 'assets/settings-background.jpeg';
    const constellation = {
        'Aries': 'assets/constellation/aries.jpeg',
        'Aquarius': 'assets/constellation/aquarius.jpeg',
        'Cancer' :'assets/constellation/cancer.jpeg',
        'Capricorn': 'assets/constellation/capricorn.jpeg',
        'Gemini' : 'assets/constellation/gemini.jpeg',
        'Leo' : 'assets/constellation/leo.jpeg',
        'Libra': 'assets/constellation/libra.jpeg',
        'Pisces': 'assets/constellation/pisces.jpeg',
        'Sagittarius': 'assets/constellation/sagittarius.jpeg',
        'Scorpio': 'assets/constellation/scorpio.jpeg',
        'Taurus': 'assets/constellation/taurus.jpeg',
        'Virgo': 'assets/constellation/virgo.jpeg',
    };
    if (zodiacSign) {
        const imageKey = zodiacSign.charAt(0).toUpperCase() + zodiacSign.slice(1);
        horoscopeContent.style.backgroundImage = `url(${constellation[imageKey]})`;
    } else {
        horoscopeContent.style.backgroundImage = `url(${defaultImage})`;
    }
    const dailyTitle = document.getElementsByClassName("daily-title")[0];
    const dailyContent = document.getElementsByClassName("daily-content")[0];
    dailyTitle.innerHTML = Horoscope.getSign();
    dailyContent.innerHTML = Horoscope.generateHoroscope();
}

/**
 * Saves the string entered by the user as their name into local storage.
 */
function saveUserName() {
    const userName = document.getElementById('name').value;
    localStorage.setItem('name', userName);
    alert("Name saved successfully!");
}

/**
 * Saves the birthday entered by the user into local storage.
 */
function saveBirthday() {
    const birthdayInput = document.getElementById("birthday");
    // check if the input is empty
    if (birthdayInput.value.trim() === '') {
        // Display an error message or take any other appropriate action
        alert('Please enter your birthday before submitting.');
        return;
    }
    // anonymous function that process date format
    // e.g. birthdayInput: "2023-06-02" -> birthday: "6.2"
    const birthday = ((dateString) => {
        let month = dateString.substring(5,7);
        let day = dateString.substring(8,10);
        if (month.startsWith("0")) {
            month = month.substring(1);
        }
        if (day.startsWith("0")) {
            day = day.substring(1);
        }
        return month + "." + day;
    })(birthdayInput.value);

    let birthdayYear = birthdayInput.value.substring(0,4) + '.' + birthday;
    localStorage.setItem("birthday", birthday);
    localStorage.setItem("birthdayYear",birthdayYear);
    location.reload(); // Refresh the page
    // Display a success message
    alert("Birthday saved successfully!");
}

/**
 * Clear 'name' and 'birthday' in localStorage
 */
function clearUserInfo() {
    const confirmed = window.confirm("Are you sure you want to clear your name and birthday?");
    if (confirmed) {
        localStorage.removeItem('name');
        localStorage.removeItem('birthday');
        localStorage.removeItem('birthdayYear');
        location.reload(); // Refresh the page
    }
}
