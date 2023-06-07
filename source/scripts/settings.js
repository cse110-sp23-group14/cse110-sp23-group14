import { Horoscope } from "./horoscope.js";

window.addEventListener('DOMContentLoaded', (event) => {
    // Call the functions to display the stored name and birthday
    displayStoredData();
    setHoroscopeBackground();

    const saveUserNameForm = document.getElementById('save-name-form');
    saveUserNameForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page jump
        saveUserName();
        displayStoredData();
    });

    const saveBirthdayForm = document.getElementById('save-birthday-form');
    saveBirthdayForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page jump
        saveBirthday();
        displayStoredData();
        setHoroscopeBackground();
        const dailyTitle = document.getElementsByClassName("daily-title")[0];
        const dailyContent = document.getElementsByClassName("daily-content")[0];
        dailyTitle.innerHTML = Horoscope.getSign();
        dailyContent.innerHTML = Horoscope.generateHoroscope();
    });
    
    const clearUserInfoButton = document.querySelector('.clear-profile button');
    clearUserInfoButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent page jump
        clearUserInfo();
        displayStoredData();
    });
});

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
function setHoroscopeBackground() {
    let horoscopeContent = document.querySelector('.horoscope-content');
    console.log(horoscopeContent);
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
        horoscopeContent.style.backgroundImage = `url(${constellation[imageKey]})`
    }
    else {
        horoscopeContent.style.backgroundImage = `url(${defaultImage})`;
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
        let month = dateString.substring(5,7);
        let day = dateString.substring(8,10);
        console.log(`type of string:${typeof dateString}`);
        console.log(`month:${month}, day:${day}`);
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
 * Clear 'name' and 'birthday' in localStorage
 */
function clearUserInfo() {
    alert(`Your data was cleared! You can always re-input your data on the settings page. Have a nice day!`);
    localStorage.removeItem('name');
    localStorage.removeItem('birthday');
    location.reload(); // Refresh the page
}
