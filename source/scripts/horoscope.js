export { getSign, generateHoroscope };
import { getZodiacSign, readJsonData } from "./zodiac.js";

/*
 *Read the JSON data from the given file path.
 *@param {string} filePath - Path to the JSON file.
 *@returns {object} - Parsed JSON data.
*/ 
function readHoroscopeData(filePath) {
  const fs = require('fs');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

/**
 * Finds user's sign from birthday stored in local storage
 * @returns {string|null} user's zodiac sign, or null if sign is not found
 */
async function getSign() {
  // Getting Birthday Data
  const birthday = localStorage.getItem('birthday');
  if (!birthday) {
    return null;
  }
  const birthdaySplit = birthday.split(".");

  // Getting Zodiac sign data
  let sign = getZodiacSign(birthdaySplit[0], birthdaySplit[1]);
  return sign;
}

/**
 * Finds user's sign and current date and returns an appropriate horoscope.
 * @returns {string} A horoscope in string form.
 */
async function generateHoroscope() {
  // Getting Zodiac sign data
  let sign = await getSign();
  if (!sign) 
  {
    return "No horoscope found.";
  }
  
  // Getting Date for hashing function
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  let stringInputToHash = "" + day + month;
  let inputToHash = Number(stringInputToHash);
  const hashValue = inputToHash % 13;

  // Read horoscopes.json and get today's horoscope
  const horoscopes = await readJsonData("./assets/generated-text/horoscopes.json");
  let todayHoroscope = horoscopes[sign][hashValue];
  return todayHoroscope;
}

/**
 * Retrieves information about the daily conditions and returns them as an object.
 * @returns {object} The daily conditions as an object.
 */
function getDailyConditions() {
  // Implementation goes here
}

// module.exports = {
//   generateHoroscope,
//   getDailyConditions,
//   getSign
// };