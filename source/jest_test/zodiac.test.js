import { Zodiac } from '../scripts/zodiac.js';

describe('getZodiacSign', () => {
    it('should return the correct zodiac sign for a given month and day within the range', async () => {
        const zodiacSign = await Zodiac.getZodiacSign(4, 3);
        expect(zodiacSign).toBe('Aries');
    });
  
    it('should return the correct zodiac sign for a given month and day at the start range', async () => {
        const zodiacSign = await Zodiac.getZodiacSign(4, 19);
        expect(zodiacSign).toBe('Aries');
    });
  
    it('should return the correct zodiac sign for a given month and day at the end range', async () => {
        const zodiacSign = await Zodiac.getZodiacSign(5, 20);
        expect(zodiacSign).toBe('Taurus');
    });
  
    it('should return null if no zodiac sign is found for the given month and day', async () => {
        const zodiacSign = await Zodiac.getZodiacSign(2, 15);
        expect(zodiacSign).toBe('Aquarius');
    });
});
