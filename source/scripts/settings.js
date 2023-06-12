import { Horoscope } from "./horoscope.js";
import { constellation } from "../jsons/constellationJson.js";
import { updateLifePathNumber } from "./birthday-numerology.js";

/**
 * Event listener function for the 'DOMContentLoaded' event.
 * @param {Event} event -The 'DOMContentLoaded' event object
 */
window.addEventListener('DOMContentLoaded', (event) => {
    displayStoredData();
    setHoroscope();

    const saveUserNameForm = document.getElementById('save-name-form');
    /**
     * Saves the username
     * @param {Event} event - 'submit'
     */
    saveUserNameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        saveUserName();
        displayStoredData();
        setHoroscope();
        updateLifePathNumber();
    });

    const saveBirthdayForm = document.getElementById('save-birthday-form');
    /**
    * Saves the birthday
    * @param {Event} event - 'submit'
    */
    saveBirthdayForm.addEventListener('submit', function(event){
        event.preventDefault(); // Prevent page jump
        saveBirthday();
        displayStoredData();
        setHoroscope();
        updateLifePathNumber();
        const horoscopeButton = document.getElementById('horoscope-button');
        const horoscopeDetect = document.getElementById('horoscope-detect');
        if (localStorage.getItem('birthdayYear')) {
            horoscopeButton.style.display = 'block';
            horoscopeDetect.style.display = 'none';
        }
    });
    
    const clearUserInfoButton = document.querySelector('.clear-profile button');
    /**
    * clears user information
    * @param {Event} event - 'click'
    */
    clearUserInfoButton.addEventListener('click', function(event){
        event.preventDefault();
        clearUserInfo();
        displayStoredData();
        setHoroscope();
        updateLifePathNumber();
        setHoroscope();
        const horoscopeButton = document.getElementById('horoscope-button');
        const horoscopeDetect = document.getElementById('horoscope-detect');
        if (!localStorage.getItem('birthdayYear')) {
            horoscopeButton.style.display = 'none';
            horoscopeDetect.style.display = 'block';
        }
    });
});

/**
 * Get user name and birthday from localStorage,
 * and display them in setting page
 */
function displayStoredData() {
    const displayElement = document.getElementById('profile-display');
    const storedBirthday = localStorage.getItem('birthdayYear');
    if (storedBirthday) {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            displayElement.innerHTML = `Welcome back <span class="highlight">${storedName}</span>! Your birthday on record is <span class="highlight">${storedBirthday}</span>`;
        } else {
            displayElement.innerHTML = `Welcome back! Your birthday on record is <span class="highlight">${storedBirthday}</span>`;
        }
    }else{
        displayElement.innerHTML = 'Hey new friend! We are excited to meet you.';
    }
}

/**
 * set daily report's popup card and background according to user's birthday
 */
function setHoroscope() {
    const horoscopeContent = document.querySelector('.horoscope-content');
    const zodiacSign = Horoscope.getSign();
    const defaultImage = 'assets/settings-background.jpeg';
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
}

/**
 * Saves the birthday entered by the user into local storage.
 */
function saveBirthday() {
    const birthdayInput = document.getElementById("birthday");
    if (birthdayInput.value.trim() === '') {
        alert('Please enter your birthday before submitting.');
        return;
    }
    // process date format
    // "2023-06-01" --> "2023.6.1"
    const dateArray = birthdayInput.value.split('-');
    // remove leading "0"
    for (let i=0; i<dateArray.length; i++) {
        dateArray[i] = parseInt(dateArray[i], 10).toString();
    }
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
    const birthday = month + '.' + day;
    const birthdayYear = year + '.' + birthday;
    localStorage.setItem("birthday", birthday);
    localStorage.setItem("birthdayYear",birthdayYear);
    setHoroscope();
    displayStoredData();
    updateLifePathNumber();
}

/**
 * Clear 'name' and 'birthday' items in localStorage
 */
function clearUserInfo() {
    const confirmed = window.confirm("Are you sure you want to clear your name and birthday?");
    if (confirmed) {
        localStorage.removeItem('name');
        localStorage.removeItem('birthday');
        localStorage.removeItem('birthdayYear');
        setHoroscope();
        displayStoredData();
        updateLifePathNumber();
    }
    displayStoredData();
}
