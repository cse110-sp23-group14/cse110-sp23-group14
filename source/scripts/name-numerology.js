const fs = require('fs');

// Function to calculate the Soul Urge Number
const calculateSoulUrgeNumber = function(name) {
  let soulUrgeNumber = 0;

  // Calculate the numeric value of each letter in the name
  for (let i = 0; i < name.length; i++) {
    const letter = name[i].toLowerCase();
    soulUrgeNumber += letter.charCodeAt(0) - 96; // Subtracting ASCII value of 'a' to get the numeric value
  }

  // Reduce the number to a single-digit or master number
  while (soulUrgeNumber > 9) {
    const digits = soulUrgeNumber.toString().split('');
    soulUrgeNumber = digits.reduce((sum, digit) => sum + parseInt(digit), 0);
  }

  return soulUrgeNumber;
};


// Soul Urge Number data
const soulUrgeNumberData = {
    "1": {
      "meaning": "Individuals with a Soul Urge Number 1 are driven, ambitious, and independent.",
      "description": "They have a strong desire for success and leadership roles."
    },
    "2": {
      "meaning": "People with a Soul Urge Number 2 value harmony, cooperation, and relationships.",
      "description": "They have a deep desire to create peace and balance in their surroundings."
    },
    "3": {
      "meaning": "Individuals with a Soul Urge Number 3 are creative, expressive, and sociable.",
      "description": "They have a strong desire for self-expression and enjoy using their creative talents."
    },
    "4": {
      "meaning": "People with a Soul Urge Number 4 are practical, reliable, and hardworking.",
      "description": "They have a strong desire for stability, order, and structure in their lives."
    },
    "5": {
      "meaning": "Individuals with a Soul Urge Number 5 are adventurous, freedom-loving, and adaptable.",
      "description": "They have a strong desire for freedom, variety, and experiences."
    },
    "6": {
      "meaning": "People with a Soul Urge Number 6 value harmony, family, and nurturing.",
      "description": "They have a deep desire to care for and support others."
    },
    "7": {
      "meaning": "Individuals with a Soul Urge Number 7 are introspective, analytical, and spiritual.",
      "description": "They have a strong desire for knowledge, wisdom, and inner growth."
    },
    "8": {
      "meaning": "People with a Soul Urge Number 8 are ambitious, success-oriented, and practical.",
      "description": "They have a strong desire for achievement, financial abundance, and material success."
    },
    "9": {
      "meaning": "Individuals with a Soul Urge Number 9 are compassionate, humanitarian, and idealistic.",
      "description": "They have a deep desire to make a positive impact on the world and help others."
    },
    "11": {
      "meaning": "People with a Soul Urge Number 11 possess a highly spiritual and intuitive nature.",
      "description": "They have a deep desire to inspire and uplift others through their unique insights and visionary thinking."
    },
    "22": {
      "meaning": "Individuals with a Soul Urge Number 22 are master builders and have the potential to manifest significant accomplishments in their lives.",
      "description": "They have a strong desire to create lasting impact and contribute to the betterment of society."
    }
  };


// Get the user's name from local storage or any other source
const userName = 'CHANGMING LIU'

// Calculate the Soul Urge Number for the user's name
const soulUrgeNumber = calculateSoulUrgeNumber(userName);

// Print out the Soul Urge Number and its information
console.log('Your Soul Urge Number is: ' + soulUrgeNumber);
console.log('Meaning: ' + soulUrgeNumberData[soulUrgeNumber].meaning);
console.log('Description: ' + soulUrgeNumberData[soulUrgeNumber].description);