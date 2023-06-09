import {soulUrgeNumberData} from "../jsons/soulUrgeNumberDataJson.js";

window.addEventListener('DOMContentLoaded', (event)=> {
    const lifePathNumberLabel = document.getElementById("lifepath-number");

    const birthday = localStorage.getItem("birthdayYear");
    let lifePathNumber = -1;
    if (birthday) {
        lifePathNumber = calculateLifePathNumber(birthday);
        lifePathNumberLabel.innerHTML = `${lifePathNumber}`;
        lifePathNumberLabel.classList.add('highlight');
        lifePathNumberLabel.classList.remove('deemphasize');
        const lifePathTitle = document.getElementById('lifepath-title');
        const lifePathText = document.getElementById('lifepath-text');
        const lifePathButtons = document.querySelectorAll('.button-box a');
        const lifePathImage = document.getElementById('lifepath-image');
        lifePathImage.setAttribute('src', `assets/lifepath/${lifePathNumber}.jpg`);
        lifePathButtons[0].addEventListener('click', function() {
            lifePathTitle.innerHTML = `Personality`;
            lifePathText.innerHTML = soulUrgeNumberData[lifePathNumber]['personality'];
        });
        lifePathButtons[1].addEventListener('click', function() {
            lifePathTitle.innerHTML = `Characteristics`;
            lifePathText.innerHTML = soulUrgeNumberData[lifePathNumber]['characteristic'];
        });
        lifePathButtons[2].addEventListener('click', function() {
            lifePathTitle.innerHTML = `Career`;
            lifePathText.innerHTML = soulUrgeNumberData[lifePathNumber]['career'];
        });
        lifePathButtons[3].addEventListener('click', function() {
            lifePathTitle.innerHTML = `Love`;
            lifePathText.innerHTML = soulUrgeNumberData[lifePathNumber]['love'];
        });
    }
    else {
        const lifePathButtonBox = document.querySelector('.lifepath-content .button-box');
        lifePathButtonBox.style.display = 'none';
        lifePathNumberLabel.innerHTML = "Your lifepath has not been revealed yet. Please fill out your info!";
        lifePathNumberLabel.classList.add('deemphasize');
        lifePathNumberLabel.classList.remove('highlight');
    }
});
// popupId is personality, characteristic, career, love
// const personalityData = soulUrgeNumberData[lifePathNumber][popupId];

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