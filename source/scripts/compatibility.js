import {compatibilityData} from "../jsons/compatibilityDataJson.js";

/**
 * This function takes in two signs and find the compatibility description between those signs.
 * @param {string} sign1
 * @param {string} sign2
 * @returns {string|null} user's compatibility description, or null if not found.
 */
function findDescription(sign1, sign2) {
    for (const compatibility of compatibilityData.compatibility) {
        const pair = compatibility.pair;
        const description = compatibility.description;
        if (pair.some(([a, b]) => {
            return (a === sign1 && b === sign2) || (a === sign2 && b === sign1);
        })) {
            return description;
        }
    }
    return null;
}

// The displayed shapes in the header of the compatibility page.
const shapeLeft = document.querySelector('.shape-left');
const shapeRight = document.querySelector('.shape-right');

// Popup and close button
const checkCompatibilityButton = document.getElementById('check-compatibility-button');
const closeCompatibility = document.getElementById('close-compatibility-popup');

// Getting sign of each div within the compatibility menu
const capricornSign=document.getElementById('capricorn');
const cancerSign=document.getElementById('cancer');
const aquariusSign=document.getElementById('aquarius');
const geminiSign=document.getElementById('gemini');
const leoSign=document.getElementById('leo');
const libraSign=document.getElementById('libra');
const piscesSign=document.getElementById('pisces');
const sagittariusSign=document.getElementById('sagittarius');
const scorpioSign=document.getElementById('scorpio');
const taurusSign=document.getElementById('taurus');
const virgoSign=document.getElementById('virgo');
const ariesSign=document.getElementById('aries');

// Parallel arrays, matching sign with sign name
const signArray = [capricornSign, cancerSign, aquariusSign, geminiSign, leoSign, libraSign, piscesSign, sagittariusSign, scorpioSign, taurusSign, virgoSign, ariesSign];
const signNamesArray = ['capricorn', 'cancer', 'aquarius', 'gemini', 'leo', 'libra', 'pisces', 'sagittarius', 'scorpio', 'taurus', 'virgo', 'aries'];

// Counter for keeping track of when enough clicks occur to show pop up to enable button.
let clickCount = 0;

/**
 * Sets the properties of a shape element.
 *
 * @param {HTMLElement} shape - The shape element to set the properties for.
 * @param {string} image - The URL of the background image.
 * @param {string} signName - The sign name text.
 * @returns {void}
 */
function setShapeProperties(shape, image, signName) {
    shape.style.backgroundImage = `url(${image})`;
    shape.style.backgroundSize = 'cover';
    shape.querySelector('.sign-name').textContent = signName.charAt(0).toUpperCase() + signName.slice(1);
}

for (let i=0; i < signArray.length; i++) {
    signArray[i].addEventListener('click', function() {
        const image = `assets/zodiac_sign/${signNamesArray[i]}.png`;

        if(shapeLeft.querySelector('.sign-name').textContent=='' && shapeRight.querySelector('.sign-name').textContent==''){
            shapeLeft.style.backgroundImage = `url(${image})`;
            shapeLeft.style.backgroundSize ='cover';
            shapeLeft.querySelector('.sign-name').textContent = signNamesArray[i].charAt(0).toUpperCase() + signNamesArray[i].slice(1);
        } else {
            if (shapeLeft.querySelector('.sign-name').textContent == '') {
                setShapeProperties(shapeLeft, image, signNamesArray[i]);
            } else {
                setShapeProperties(shapeRight, image, signNamesArray[i]);
            }
        }
        if(clickCount<2){
            clickCount++;
        }
        
        checkCompatibility();
        handleClick();
    });
}

/**
 * This function checks the compatibility between the two Zodiac signs by calling on the findDescription
 * function and displays the description on the popup page.
 */
function checkCompatibility() {
    const leftBox = document.querySelector(".shape-left .sign-name").textContent.trim();
    const rightBox = document.querySelector(".shape-right .sign-name").textContent.trim();
    if (leftBox && rightBox) {
        // Both left and right boxes are filled
        // Assuming the signs are stored as lowercase strings
        const sign1 = leftBox;
        const sign2 = rightBox;
        const capitalizedSign1 = sign1.charAt(0).toUpperCase() + sign1.slice(1);
        const capitalizedSign2 = sign2.charAt(0).toUpperCase() + sign2.slice(1);
        const description = findDescription(capitalizedSign1, capitalizedSign2);
        // Assuming you want to display the description in the element with id "description"
        document.querySelector(".descript").textContent = description;
        checkCompatibilityButton.disabled=false;
        document.querySelector(".compatibility-pair").textContent = capitalizedSign1 + " + " + capitalizedSign2;
    }
}

/**
 * It is triggered when the checkCompatibilityButton is being clicked, it will alert that the button was clicked
 * The compatibility popup page will appear
 * @param {Event} event - "click"
 */
checkCompatibilityButton.addEventListener('click', () => {
    document.getElementById('compatibility-popup').classList.add('visible');
});

/**
 * It is triggered when the closeCompatibility is being clicked
 * The compatibility popup page will disappear
 * @param {Event} event - "click"
 */
closeCompatibility.addEventListener('click', function() {
    document.getElementById('compatibility-popup').classList.remove('visible');
});

/**
 * Handles the click event for a shape element.
 *
 * @param {HTMLElement} shape - The shape element that was clicked.
 * @returns {void}
 */
function handleShapeClick(shape) {
    clickCount--;
    shape.style.backgroundImage = ''; // Remove background image from the shape
    shape.querySelector('.sign-name').textContent = '';
    handleClick();
}
  
// Event listener for shapeLeft
shapeLeft.addEventListener('click', function() {
    handleShapeClick(shapeLeft);
});
  
// Event listener for shapeRight
shapeRight.addEventListener('click', function() {
    handleShapeClick(shapeRight);
});

/**
 * shows or hides the popup menu
 */
function handleClick() {
    if(clickCount === 2) {
        setTimeout(() => {
            // Show the pop-up
            // Hide the menu
            // chooseSignWindow.style.display='none';
            // Enable button
            checkCompatibilityButton.disabled = false;
        }, 300);
        
    } else {
        setTimeout(() => {
            //chooseSignWindow.style.display='block';
            checkCompatibilityButton.disabled = true;
        }, 300);
    }
}
