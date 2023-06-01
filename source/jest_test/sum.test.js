import {sum} from '../scripts/sum.js';

test('add two positive numbers', () => {
    expect(sum(2,3)).toBe(5)
})