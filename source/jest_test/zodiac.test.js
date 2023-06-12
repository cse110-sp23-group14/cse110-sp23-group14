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
  
    it('should return the correct zodiac sign for a given month and day at the end range', async () => {
        const zodiacSign = await Zodiac.getZodiacSign(7, 25);
        expect(zodiacSign).toBe('Leo');
    });

    it('should return the correct zodiac sign for a given month and day at the end range', async () => {
        const zodiacSign = await Zodiac.getZodiacSign(11, 1);
        expect(zodiacSign).toBe('Scorpio');
    });

    it('should return the correct zodiac sign for a given month and day at the end range', async () => {
        const zodiacSign = await Zodiac.getZodiacSign(12, 4);
        expect(zodiacSign).toBe('Sagittarius');
    });

    it('should return the correct zodiac sign for a given month and day at the end range', async () => {
        const zodiacSign = await Zodiac.getZodiacSign(6, 1);
        expect(zodiacSign).toBe('Gemini');
    });
});
