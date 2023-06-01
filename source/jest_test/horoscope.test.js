const t = require('../horoscope')  //reqeust the function we are going to test from our javascript file

user=1;
test('properly adds two numbers', ()=>{
  expect(generateHoroscope(user)).toBe("I love astrology!")
})


test('find correct Aries horoscope', () => {
  expect(t.generateHoroscope.toBe("A stroke of misfortune may cast a shadow over your day, Aries. Unexpected setbacks and challenges might dampen your spirits. Stay resilient, draw on your inner strength, and focus on self-care to navigate through this temporary phase."))
})