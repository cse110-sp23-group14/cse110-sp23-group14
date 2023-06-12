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
}