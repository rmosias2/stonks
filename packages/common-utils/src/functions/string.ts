import { ClassValue, clsx } from 'clsx';
import parsePhoneNumber, { CountryCode } from 'libphonenumber-js';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatMoney = (value?: number | string | null, currency = 'BRL', numDecimalPlaces = 2) => {
  if (value === null || value === undefined) return '';
  return new Intl.NumberFormat('pt-BR', {
    currency,
    maximumFractionDigits: numDecimalPlaces,
    minimumFractionDigits: numDecimalPlaces,
    style: 'currency',
  }).format(Number(value));
};

export const formatPhoneNumber = (input?: string, defaultCountry: CountryCode = 'BR') => {
  try {
    if (!input) {
      throw new Error('Invalid phone number');
    }

    const phoneNumberObj = parsePhoneNumber(input, defaultCountry);

    if (!phoneNumberObj) {
      throw new Error('Invalid phone number');
    }

    return phoneNumberObj.formatInternational();
  } catch (error) {
    return 'Invalid phone number';
  }
};

export const validateBrazilianPhoneNumber = (phoneNumber: string): boolean => {
  phoneNumber = phoneNumber.replace('+', '');
  if (phoneNumber.length !== 12 && phoneNumber.length !== 13) {
    return false;
  }

  const countryCode = phoneNumber.slice(0, 2);

  if (countryCode !== '55') {
    return false;
  }

  return true;
};
