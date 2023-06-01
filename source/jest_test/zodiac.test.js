import { readJsonData, getZodiacSign, getCompatibility } from '../scripts/zodiac.js';

//console.log(getZodiacSign);

// Mock the fs.readFileSync function
// jest.mock('fs');
// fs.readFileSync.mockReturnValue('{"ZodiacSigns": [], "Compatibility": {}}');
describe('getZodiacSign', () => {
    it('should return the correct zodiac sign for a given month and day within the range', async () => {
      const zodiacSign = await getZodiacSign(4, 3);
      expect(zodiacSign).toBe('Aries');
    });
  
    it('should return the correct zodiac sign for a given month and day at the start range', async () => {
      const zodiacSign = await getZodiacSign(4, 19);
      expect(zodiacSign).toBe('Aries');
    });
  
    it('should return the correct zodiac sign for a given month and day at the end range', async () => {
      const zodiacSign = await getZodiacSign(5, 20);
      expect(zodiacSign).toBe('Taurus');
    });
  
    it('should return null if no zodiac sign is found for the given month and day', async () => {
      const zodiacSign = await getZodiacSign(2, 15);
      expect(zodiacSign).toBe('Aquarius');
    });
});


describe('compatible zodiac signs', () => {
  it('should return "OK" for Aries and Taurus', async () => {
    const compatibility = await getCompatibility('Aries', 'Taurus');
    expect(compatibility).toBe('OK');
  });

  it('should return "OK" for Taurus and Aries', async () => {
    const compatibility = await getCompatibility('Taurus', 'Aries');
    expect(compatibility).toBe('OK');
  });

  it('should return "POSITIVE" for Taurus and Virgo', async () => {
    const compatibility = await getCompatibility('Taurus', 'Virgo');
    expect(compatibility).toBe('POSITIVE');
    const compatibility1 = await getCompatibility('Virgo', 'Taurus');
    expect(compatibility1).toBe('POSITIVE');
  });

  it('should return "POSITIVE" for Pisces and Cancer', async () => {
    const compatibility = await getCompatibility('Pisces', 'Cancer');
    expect(compatibility).toBe('POSITIVE');
  });

  it('should return "NEGATIVE" for Taurus and Leo', async () => {
    const compatibility = await getCompatibility('Taurus', 'Leo');
    expect(compatibility).toBe('NEGATIVE');
  });

  it('should return "NEGATIVE" for Taurus and Gemini', async () => {
    const compatibility = await getCompatibility('Taurus', 'Gemini');
    expect(compatibility).toBe('NEGATIVE');
  });
});
