export { Zodiac }

const zodiacJSON = {
  "Compatibility": {
      "Aries": {
          "Leo": "OK",
          "Taurus": "OK",
          "Gemini": "OK",
          "Cancer": "OK",
          "Virgo": "OK",
          "Capricorn": "OK",
          "Aquarius": "OK",
          "Pisces": "OK",
          "Libra": "POSITIVE",
          "Sagittarius": "POSITIVE",
          "Scorpio": "NEGATIVE"
        },
        "Taurus": {
          "Aries": "OK",
          "Cancer": "OK",
          "Libra": "OK",
          "Scorpio": "OK",
          "Capricorn": "OK",
          "Pisces": "OK",
          "Virgo": "POSITIVE",
          "Gemini": "NEGATIVE",
          "Leo": "NEGATIVE",
          "Sagittarius": "NEGATIVE",
          "Aquarius": "NEGATIVE"
        },
        "Gemini": {
          "Libra": "OK",
          "Scorpio": "OK",
          "Taurus": "OK",
          "Aries": "POSITIVE",
          "Leo": "POSITIVE",
          "Sagittarius": "POSITIVE",
          "Aquarius": "POSITIVE",
          "Pisces": "NEGATIVE",
          "Capricorn": "NEGATIVE",
          "Cancer": "NEGATIVE",
          "Virgo": "NEGATIVE"
        },
        "Cancer": {
          "Gemini": "OK",
          "Leo": "OK",
          "Virgo": "OK",
          "Libra": "OK",
          "Sagittarius": "OK",
          "Capricorn": "OK",
          "Taurus": "POSITIVE",
          "Scorpio": "POSITIVE",
          "Pisces": "POSITIVE",
          "Aquarius": "NEGATIVE",
          "Aries": "NEGATIVE"
        },
        "Leo": {
          "Gemini": "OK",
          "Virgo": "OK",
          "Libra": "OK",
          "Sagittarius": "OK",
          "Aquarius": "OK",
          "Aries": "POSITIVE",
          "Cancer": "NEGATIVE",
          "Scorpio": "NEGATIVE",
          "Capricorn": "NEGATIVE",
          "Pisces": "NEGATIVE",
          "Taurus": "NEGATIVE"
        },
        "Virgo": {
          "Aquarius": "OK",
          "Pisces": "OK",
          "Sagittarius": "OK",
          "Gemini": "OK",
          "Cancer": "POSITIVE",
          "Taurus": "POSITIVE",
          "Scorpio": "POSITIVE",
          "Capricorn": "POSITIVE",
          "Aries": "NEGATIVE",
          "Leo": "NEGATIVE",
          "Libra": "NEGATIVE"
        },
        "Libra": {
          "Aries": "OK",
          "Taurus": "OK",
          "Cancer": "OK",
          "Leo": "OK",
          "Virgo": "OK",
          "Scorpio": "OK",
          "Sagittarius": "OK",
          "Capricorn": "OK",
          "Pisces": "OK",
          "Gemini": "POSITIVE",
          "Aquarius": "POSITIVE"
        },
        "Scorpio": {
          "Taurus": "OK",
          "Leo": "OK",
          "Libra": "OK",
          "Sagittarius": "OK",
          "Capricorn": "OK",
          "Cancer": "POSITIVE",
          "Virgo": "POSITIVE",
          "Pisces": "POSITIVE",
          "Aquarius": "NEGATIVE",
          "Aries": "NEGATIVE",
          "Gemini": "NEGATIVE"
        },
        "Sagittarius": {
          "Libra": "OK",
          "Scorpio": "OK",
          "Aquarius": "OK",
          "Aries": "POSITIVE",
          "Gemini": "POSITIVE",
          "Leo": "POSITIVE",
          "Taurus": "NEGATIVE",
          "Cancer": "NEGATIVE",
          "Virgo": "NEGATIVE",
          "Capricorn": "NEGATIVE",
          "Pisces": "NEGATIVE"
        },
        "Capricorn": {
          "Aries": "OK",
          "Cancer": "OK",
          "Scorpio": "OK",
          "Aquarius": "OK",
          "Pisces": "OK",
          "Virgo": "POSITIVE",
          "Taurus": "POSITIVE",
          "Gemini": "NEGATIVE",
          "Leo": "NEGATIVE",
          "Libra": "NEGATIVE",
          "Sagittarius": "NEGATIVE"
        },
        "Aquarius": {
          "Gemini": "OK",
          "Cancer": "OK",
          "Sagittarius": "OK",
          "Capricorn": "OK",
          "Pisces": "OK",
          "Libra": "POSITIVE",
          "Leo": "POSITIVE",
          "Aries": "NEGATIVE",
          "Virgo": "NEGATIVE",
          "Scorpio": "NEGATIVE",
          "Taurus": "NEGATIVE"
        },
        "Pisces": {
          "Capricorn": "OK",
          "Virgo": "OK",
          "Leo": "OK",
          "Aquarius": "OK",
          "Taurus": "OK",
          "Gemini": "OK",
          "Cancer": "POSITIVE",
          "Scorpio": "POSITIVE",
          "Aries": "NEGATIVE",
          "Libra": "NEGATIVE",
          "Sagittarius": "NEGATIVE"
        }
  },
  "ZodiacSigns": [
    {
        "name": "Aquarius",
        "startMonth": 1,
        "startDay": 20,
        "endMonth": 2,
        "endDay": 18
      },
      {
        "name": "Pisces",
        "startMonth": 2,
        "startDay": 19,
        "endMonth": 3,
        "endDay": 20
      },
      {
        "name": "Aries",
        "startMonth": 3,
        "startDay": 21,
        "endMonth": 4,
        "endDay": 19
      },
      {
        "name": "Taurus",
        "startMonth": 4,
        "startDay": 20,
        "endMonth": 5,
        "endDay": 20
      },
      {
        "name": "Gemini",
        "startMonth": 5,
        "startDay": 21,
        "endMonth": 6,
        "endDay": 20
      },
      {
        "name": "Cancer",
        "startMonth": 6,
        "startDay": 21,
        "endMonth": 7,
        "endDay": 22
      },
      {
        "name": "Leo",
        "startMonth": 7,
        "startDay": 23,
        "endMonth": 8,
        "endDay": 22
      },
      {
        "name": "Virgo",
        "startMonth": 8,
        "startDay": 23,
        "endMonth": 9,
        "endDay": 22
      },
      {
        "name": "Libra",
        "startMonth": 9,
        "startDay": 23,
        "endMonth": 10,
        "endDay": 22
      },
      {
        "name": "Scorpio",
        "startMonth": 10,
        "startDay": 23,
        "endMonth": 11,
        "endDay": 21
      },
      {
        "name": "Sagittarius",
        "startMonth": 11,
        "startDay": 22,
        "endMonth": 12,
        "endDay": 21
      },
      {
        "name": "Capricorn",
        "startMonth": 12,
        "startDay": 22,
        "endMonth": 1,
        "endDay": 19
      }
  ]
}

class Zodiac {

  static zodiacTable;

  static {
    this.zodiacTable = JSON.parse(JSON.stringify(zodiacJSON));
  }

  /**
   * Get the zodiac sign based on the given month and day.
   * @param {number} month - Month (1-12).
   * @param {number} day - Day (1-31).
   * @returns {string|null} - Zodiac sign name or null if not found.
   */
  static getZodiacSign(month, day) {
    for (const sign of this.zodiacTable.ZodiacSigns) {
      if (
        (month == sign.startMonth && day >= sign.startDay) ||
        (month == sign.endMonth && day <= sign.endDay)
      ) {
        return sign.name;
      }
    }
  }

  /**
   * Get the compatibility between two zodiac signs.
   * @param {string} zodiacSign1 - First zodiac sign.
   * @param {string} zodiacSign2 - Second zodiac sign.
   * @param {object} compatibilityData - Object representing zodiac sign compatibility.
   * @returns {string} - Compatibility status ("OK" or "UNKNOWN").
   */
  static getCompatibility(zodiacSign1, zodiacSign2) {
    const compatibilityData = this.zodiacTable.Compatibility;
    if (
      zodiacSign1 in compatibilityData &&
      zodiacSign2 in compatibilityData[zodiacSign1]
    ) {
      return compatibilityData[zodiacSign1][zodiacSign2];
    }
    return "UNKNOWN";
  }
}

//module.exports = { readJsonData, getZodiacSign, getCompatibility };
/**
 * Read the JSON data from the given file path.
 * @param {string} filePath - Path to the JSON file.
 * @returns {object} - Parsed JSON data.
 */
async function readJsonData(filePath) {
  try {
    const file = await fetch(filePath);
    const jsonData = await file.json();
    return jsonData;
  }
  catch (error) {
    console.error(error);
  }
}