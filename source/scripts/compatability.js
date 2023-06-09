import {compatibilityData} from "../jsons/compatibilityDataJson.js";

  
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
  

const sign1 = "aries";
const sign2 = "leo";
const description = findDescription(sign1, sign2);

/************************************ */



// get the shape element
// naming for this isn't consistent, is this still working?
const shapeLeft=document.querySelector('.shape-left');
// naming for this isn't consistent, is this still working?
const shapeRight=document.querySelector('.shape-right');
const loveContent=document.getElementById('description');
const chooseSignWindow=document.getElementById('choose-sign');

//const result_window=document.getElementById('result');

const capricornSign=document.getElementById('Capricorn');
const cancerSign=document.getElementById('Cancer');
const aquariusSign=document.getElementById('Aquarius');
const geminiSign=document.getElementById('Gemini');
const leoSign=document.getElementById('Leo');
const libraSign=document.getElementById('Libra');
const piscesSign=document.getElementById('Pisces');
const sagittariusSign=document.getElementById('Sagittarius');
const scorpioSign=document.getElementById('Scorpio');
const taurusSign=document.getElementById('Taurus');
const virgoSign=document.getElementById('Virgo');
const ariesSign=document.getElementById('Aries');
const signArray = [capricornSign, cancerSign, aquariusSign, geminiSign, leoSign, libraSign, piscesSign, sagittariusSign, scorpioSign, taurusSign, virgoSign, ariesSign];
const signNamesArray = ['capricorn', 'cancer', 'aquarius', 'gemini', 'leo', 'libra', 'pisces', 'sagittarius', 'scorpio', 'taurus', 'virgo', 'aries'];

let clickCount=0;

for (let i=0; i < signArray.length; i++) {
    signArray[i].addEventListener('click', function(){
        const image = `assets/zodiac_sign/${signNamesArray[i]}.png`;

        if(shapeLeft.querySelector('.sign-name').textContent=='' && shapeRight.querySelector('.sign-name').textContent==''){
            shapeLeft.style.backgroundImage = `url(${image})`;
            shapeLeft.style.backgroundSize ='cover';
            shapeLeft.querySelector('.sign-name').textContent = signNamesArray[i];
        }else{
            if(shapeLeft.querySelector('.sign-name').textContent=='')
            {
                shapeLeft.style.backgroundImage = `url(${image})`;
                shapeLeft.style.backgroundSize ='cover';
                shapeLeft.querySelector('.sign-name').textContent = signNamesArray[i];
    
            }
            else{
                shapeRight.style.backgroundImage=`url(${image})`;
                shapeRight.style.backgroundSize='cover';
                shapeRight.querySelector('.sign-name').textContent= signNamesArray[i];
            }
        }
        clickCount++;
        checkCompatibility();
        handleClick();
    });
}

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
        document.getElementById("popup-description").textContent = description;
    }
}

// add click eventlistener to each sign
// capricorn
// capricornSign.addEventListener('click',function(){
//     const image ='assets/zodiac_sign/capricorn.png';
//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;
//     }
//     checkCompatibility();
  
//     clickCount++;
//     handleClick();
// });
// //cancer
// cancerSign.addEventListener('click',function(){
//     checkCompatibility();
//     const image = 'assets/zodiac_sign/cancer.png';

//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;

//     }
//     checkCompatibility();
//     clickCount++;
//     handleClick();
// });
// //aquarius
// aquariusSign.addEventListener('click',function(){
    
//     const image = 'assets/zodiac_sign/aquarius.png';

//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;

//     }
//     checkCompatibility();
//     clickCount++;
//     handleClick();
// });

// //gemini
// geminiSign.addEventListener('click',function(){
//     const image = 'assets/zodiac_sign/gemini.png';

//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;

//     }
//     checkCompatibility();
//     clickCount++;
//     handleClick();
// });

// //leo
// leoSign.addEventListener('click',function(){
    
//     const image = 'assets/zodiac_sign/leo.png';

//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;

//     }
//     checkCompatibility();
//     clickCount++;
//     handleClick();
// });

// //libra
// libraSign.addEventListener('click',function(){
    
//     const image = 'assets/zodiac_sign/libra.png';

//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;

//     }
//     checkCompatibility();
//     clickCount++;
//     handleClick();
// });
// //pisces
// piscesSign.addEventListener('click',function(){
    
//     const image = 'assets/zodiac_sign/pisces.png';

//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;

//     }
//     checkCompatibility();
//     clickCount++;
//     handleClick();
// });

// //sagittarius
// sagittariusSign.addEventListener('click',function(){

//     const image = 'assets/zodiac_sign/sagittarius.png';

//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;

//     }
//     checkCompatibility();
//     clickCount++;
//     handleClick();
// });

// //scorpio
// scorpioSign.addEventListener('click',function(){
    
//     const image = 'assets/zodiac_sign/scorpio.png';

//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;
//     }
//     checkCompatibility();
//     clickCount++;
//     handleClick();
// });
// //taurus
// taurusSign.addEventListener('click',function(){
    
//     const image = 'assets/zodiac_sign/taurus.png';

//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;
//     }
//     checkCompatibility();
//     clickCount++;
//     handleClick();
// });

// //virgo
// virgoSign.addEventListener('click',function(){
    
//     const image = 'assets/zodiac_sign/virgo.png';

//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;
//     }
//     checkCompatibility();
//     clickCount++;
//     handleClick();
// });

// //aries
// ariesSign.addEventListener('click',function(){
    
//     const image = 'assets/zodiac_sign/aries.png';

//     const shapePos = clickCount === 0 ? 'left' : 'right';

//     if(shapePos === 'left'){
//         shapeLeft.style.backgroundImage = `url(${image})`;
//         shapeLeft.style.backgroundSize ='cover';
//         shapeLeft.querySelector('.sign-name').textContent=this.id;
//     }else{
//         shapeRight.style.backgroundImage=`url(${image})`;
//         shapeRight.style.backgroundSize='cover';
//         shapeRight.querySelector('.sign-name').textContent=this.id;

//     }
//     checkCompatibility();
//     clickCount++;
//     handleClick();


// });



// shapeLeft.addEventListener('click', function() {
//    clickCount--;
//     shapeLeft.style.backgroundImage = ''; // Remove background image from shapeLeft
//     shapeLeft.querySelector('.sign-name').textContent='';

//     handleClick();
// });

// Event listener for shapeRight
shapeRight.addEventListener('click', function() {
    clickCount--;
    shapeRight.style.backgroundImage = ''; // Remove background image from shapeRight
   
    shapeRight.querySelector('.sign-name').textContent='';

    handleClick();
});

function handleClick(){
    if(clickCount === 2){
        setTimeout(() => {
        // Show the pop-up
            showPopup();
            chooseSignWindow.style.display='none';
            
        }, 300);
        
    } else{
        setTimeout(() => {
            hidePopup();
            chooseSignWindow.style.display='block';
        }, 300);
      
    }
}
  

// Function to show the pop-up with description
function showPopup() {
    document.getElementById("compatibility-popup").style.display = "block";
}

// Function to hide the pop-up and reset the page
function hidePopup() {
    document.getElementById("compatibility-popup").style.display = "none";
}

// Attach event listener to the close button
document.querySelector(".compatibility-popup-close").addEventListener("click", () => {
    hidePopup();
    clickCount=0;
    shapeLeft.style.backgroundImage='';
    shapeRight.style.backgroundImage='';
    shapeLeft.querySelector('.sign-name').textContent='';
    shapeRight.querySelector('.sign-name').textContent='';
    chooseSignWindow.style.display='block';
});