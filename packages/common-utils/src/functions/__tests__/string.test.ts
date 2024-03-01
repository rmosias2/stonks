import { cn, formatMoney, formatPhoneNumber, validateBrazilianPhoneNumber } from '../string';

describe('utils/strings', () => {
  it('cn function merges class names correctly', () => {
    const result1 = cn('class1', 'class2');
    assert.equal(result1, 'class1 class2');

    const result2 = cn('class1', { class2: true, class3: false });
    assert.equal(result2, 'class1 class2');

    const result3 = cn('class1', ['class2', 'class3']);
    assert.equal(result3, 'class1 class2 class3');
  });

  describe('formatMoney function', () => {
    it('should format money with default currency and decimal places', () => {
      const result = formatMoney(123456.789);
      expect(result).toContain('123.456,79');
    });

    it('should format money with specified currency and decimal places', () => {
      const result = formatMoney(987654.321, 'USD', 3);
      expect(result).toContain('987.654,321');
    });

    it('should handle string input and format it as money', () => {
      const result = formatMoney('12345.67');
      expect(result).toContain('12.345,67');
    });

    it('should handle null value and return an empty string', () => {
      const result = formatMoney(null);
      expect(result).toBe('');
    });

    it('should handle undefined value and return an empty string', () => {
      const result = formatMoney(undefined);
      expect(result).toBe('');
    });
  });

  describe('formatPhoneNumber', () => {
    it('should return "Invalid phone number" for empty input', () => {
      const formattedPhone = formatPhoneNumber('');
      expect(formattedPhone).toBe('Invalid phone number');
    });

    it('should return "Invalid phone number" for invalid input', () => {
      const invalidPhoneNumber = 'invalid';
      const formattedPhone = formatPhoneNumber(invalidPhoneNumber);
      expect(formattedPhone).toBe('Invalid phone number');
    });

    it('should use default country (BR) when not provided', () => {
      const phoneNumber = '1234567890';
      const formattedPhone = formatPhoneNumber(phoneNumber);
      expect(formattedPhone).toBe('+55 12 3456 7890');
    });
  });

  describe('validateBrazilianPhoneNumber', () => {
    it('should return true for a valid Brazilian mobile phone number', () => {
      const validPhoneNumber = '5516981093821';
      expect(validateBrazilianPhoneNumber(validPhoneNumber)).toBe(true);
    });

    it('should return false for an invalid country code', () => {
      const invalidCountryCode = '3316981093821';
      expect(validateBrazilianPhoneNumber(invalidCountryCode)).toBe(false);
    });

    it('should return true for a valid Brazilian tel phone number', () => {
      const invalidLengthPhoneNumber = '551639757707';
      expect(validateBrazilianPhoneNumber(invalidLengthPhoneNumber)).toBe(true);
    });

    it("should return 'false' as it does not have the correct length.", () => {
      const invalidPhoneNumber = '55169810938';
      expect(validateBrazilianPhoneNumber(invalidPhoneNumber)).toBe(false);
    });

    it("should return 'true' for a valid number using the country code +55.", () => {
      const validPhoneNumber = '+5516981093821';
      expect(validateBrazilianPhoneNumber(validPhoneNumber)).toBe(true);
    });
  });
});
