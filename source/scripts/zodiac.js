export { Zodiac };
import { zodiacJSON } from "../jsons/zodiacJson.js";

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
            if ((month == sign.startMonth && day >= sign.startDay) || (month == sign.endMonth && day <= sign.endDay)) {
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
        if ( zodiacSign1 in compatibilityData && zodiacSign2 in compatibilityData[zodiacSign1]) {
            return compatibilityData[zodiacSign1][zodiacSign2];
        }
        return "UNKNOWN";
    }
}

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
    } catch (error) {
        console.error(error);
    }
}