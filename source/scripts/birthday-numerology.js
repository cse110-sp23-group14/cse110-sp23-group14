import {soulUrgeNumberData} from "../jsons/soulUrgeNumberDataJson.js";

// window.addEventListener('DOMContentLoaded', (event)=> {});

function showNewPage() {
    const birthday = localStorage.getItem("birthdayYear");
    let text1 = "Your Life Path Number is:";
    let text2 = "";
    const lifePathNumber=calculateLifePathNumber(birthday);
    if (!birthday) {
        text1 = "We do not have your birthday.";
    } else {
        // Calculate the life path number based on the birthday
        // Replace this logic with your actual calculation
        text2 = lifePathNumber;
    }
    document.getElementById("main-content").innerHTML = `
        <div>
            <p class="title">"Life Path Number"</p>
            <p class="text1">${text1}</p>
            <p class="text2">${text2}</p>
        </div>
        <div>
            <button onclick="showPopup('personality', ${lifePathNumber})">Personality</button>
            <button onclick="showPopup('characteristic',${lifePathNumber})">Characteristic</button>
            <button onclick="showPopup('career',${lifePathNumber})">Career</button>
            <button onclick="showPopup('love',${lifePathNumber})">Love</button>
        </div>
    `;

    setTimeout(function() {
        const text2Element = document.getElementsByClassName("text2")[0];
        text2Element.style.transition = "opacity 1s ease";
        text2Element.style.opacity = "1";
    }, 3000); // Delay in milliseconds (3000ms = 3 seconds)
}

function hidePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

function showPopup(popupId, lifePathNumber) {
    const popup = document.getElementById(popupId);
    const personalityData = soulUrgeNumberData[lifePathNumber][popupId];

    // Update the popup content with the personality information\
    popup.innerHTML = `
        <span class="popup-close" onclick="hidePopup('${popupId}')">&times;</span>
        <img class="image" src="assets/lifepath/${lifePathNumber}.jpg" alt="horoscope sign">
        <br>
        <br>
        <h3 >${popupId}</h3>
        <br>
        <p>${personalityData}</p>
    `;

    // Display the popup
    popup.style.display = "block";
}


function calculateLifePathNumber(birthDate) {
    console.log(birthDate);
    // Split the birth date into an array
    const dateArray = birthDate.split('.');

    // Extract year, month, and day from the array
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
    console.log(dateArray);
    // Reduce each part to a single digit or a master number
    const reducedYear = reduceNumber(year);
    const reducedMonth = reduceNumber(month);
    const reducedDay = reduceNumber(day);
    

    // Calculate the sum of year, month, and day
    let sum = reducedYear + reducedMonth + reducedDay;

    // Reduce the sum to a single digit or a master number
    sum = reduceNumber(sum);

    // Return the calculated Life Path number
    return sum;
}

function reduceNumber(number) {
    let result = parseInt(number, 10);
    while (result > 9) {
        const digits = Array.from(result.toString(), Number);
        result = digits.reduce((acc, curr) => {
            return acc + curr;
        }, 0);
    }

    return result;
}


// Soul Urge Number data
