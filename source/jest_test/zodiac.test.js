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


describe('compatible zodiac signs', () => {
    it('should return "OK" for Aries and Taurus', async () => {
        const compatibility = await Zodiac.getCompatibility('Aries', 'Taurus');
        expect(compatibility).toBe('OK');
    });

    it('should return "OK" for Taurus and Aries', async () => {
        const compatibility = await Zodiac.getCompatibility('Taurus', 'Aries');
        expect(compatibility).toBe('OK');
    });

    it('should return "POSITIVE" for Taurus and Virgo', async () => {
        const compatibility = await Zodiac.getCompatibility('Taurus', 'Virgo');
        expect(compatibility).toBe('POSITIVE');
        const compatibility1 = await Zodiac.getCompatibility('Virgo', 'Taurus');
        expect(compatibility1).toBe('POSITIVE');
    });

    it('should return "POSITIVE" for Pisces and Cancer', async () => {
        const compatibility = await Zodiac.getCompatibility('Pisces', 'Cancer');
        expect(compatibility).toBe('POSITIVE');
    });

    it('should return "NEGATIVE" for Taurus and Leo', async () => {
        const compatibility = await Zodiac.getCompatibility('Taurus', 'Leo');
        expect(compatibility).toBe('NEGATIVE');
    });

    it('should return "NEGATIVE" for Taurus and Gemini', async () => {
        const compatibility = await Zodiac.getCompatibility('Taurus', 'Gemini');
        expect(compatibility).toBe('NEGATIVE');
    });
});
