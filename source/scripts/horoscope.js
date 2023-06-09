export { Horoscope };
import { Zodiac } from "./zodiac.js";
import { horoscopeJSON } from "../jsons/horoscopeJson.js";


const NUM_HOROSCOPES = 13;
class Horoscope {

    static horoscopeTable;

    static {
        this.horoscopeTable = JSON.parse(JSON.stringify(horoscopeJSON));
    }

    /**
     * Finds user's sign from birthday stored in local storage
     * @returns {string|null} user's zodiac sign, or null if sign is not found
     */
    static getSign() {
        // Getting Birthday Data
        const birthday = localStorage.getItem('birthday');
        if (!birthday) {
            return null;
        }
        const birthdaySplit = birthday.split(".");

        // Getting Zodiac sign data
        const sign = Zodiac.getZodiacSign(birthdaySplit[0], birthdaySplit[1]);
        return sign;
    }

    /**
     * Finds user's sign and current date and returns an appropriate horoscope.
     * @returns {string} A horoscope in string form.
     */
    static generateHoroscope() {
        // Getting Zodiac sign data
        const sign = this.getSign();
        if (!sign) {
            return "No horoscope found.";
        }
    
        // Getting Date for hashing function
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const stringInputToHash = "" + day + month;
        const inputToHash = Number(stringInputToHash);
        const hashValue = inputToHash % NUM_HOROSCOPES;

        // Read horoscopes.json and get today's horoscope
        const todayHoroscope = this.horoscopeTable[sign][hashValue];
        return todayHoroscope;
    }
}