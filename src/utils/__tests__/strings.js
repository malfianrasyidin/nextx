import { getGenderName, formatCurrency } from '../strings';

test('Return correct currency format', () => {
  const value = formatCurrency(250_000_000);
  expect(value).toBe('250,000,000');
});

test('Return male for gender code m', () => {
  const value = getGenderName('m');
  expect(value).toBe('Male');
});

test('Return male for gender code f', () => {
  const value = getGenderName('f');
  expect(value).toBe('Female');
});
