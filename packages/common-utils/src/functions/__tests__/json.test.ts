/* eslint-disable camelcase */
import {
  baseCaseTransform,
  camelToSnakeTransform,
  jsonToCamelCaseTransform,
  jsonToSnakeCaseTransform,
  macroCaseTransform,
  snakeToCamelTransform,
} from '../json'; // Replace with the correct file path

// Test cases for the functions
describe('macroCaseTransform', () => {
  test('transforms snake_case to camelCase', () => {
    expect(macroCaseTransform('snake_case')).toBe('snakeCase');
  });

  test('handles empty input', () => {
    expect(macroCaseTransform('')).toBe('');
  });
});

describe('snakeToCamelTransform', () => {
  test('transforms snake_case to camelCase', () => {
    expect(snakeToCamelTransform('snake_case')).toBe('snakeCase');
  });

  test('handles empty input', () => {
    expect(snakeToCamelTransform('')).toBe('');
  });
});

describe('camelToSnakeTransform', () => {
  test('transforms camelCase to snake_case', () => {
    expect(camelToSnakeTransform('camelCase')).toBe('camel_case');
  });

  test('handles empty input', () => {
    expect(camelToSnakeTransform('')).toBe('');
  });
});

describe('baseCaseTransform', () => {
  test('transforms keys in an object using the provided transform function', () => {
    const input = { key_one: 'valueOne', key_two: 'valueTwo' };
    const transformed = baseCaseTransform(input, snakeToCamelTransform);
    expect(transformed).toEqual({ keyOne: 'valueOne', keyTwo: 'valueTwo' });
  });

  test('handles null input', () => {
    expect(baseCaseTransform(null, snakeToCamelTransform)).toBeNull();
  });

  test('transforms keys in an array of objects using the provided transform function', () => {
    const input = [{ key_one: 'valueOne' }, { key_two: 'valueTwo' }];
    const transformed = baseCaseTransform(input, snakeToCamelTransform);
    expect(transformed).toEqual([{ keyOne: 'valueOne' }, { keyTwo: 'valueTwo' }]);
  });
});

describe('jsonToCamelCaseTransform', () => {
  test('transforms keys in a JSON object to camelCase', () => {
    const input = { key_one: 'valueOne', key_two: 'valueTwo' };
    const transformed = jsonToCamelCaseTransform(input);
    expect(transformed).toEqual({ keyOne: 'valueOne', keyTwo: 'valueTwo' });
  });
});

describe('jsonToSnakeCaseTransform', () => {
  test('transforms keys in a JSON object to snake_case', () => {
    const input = { keyOne: 'valueOne', keyTwo: 'valueTwo' };
    const transformed = jsonToSnakeCaseTransform(input);
    expect(transformed).toEqual({ key_one: 'valueOne', key_two: 'valueTwo' });
  });
});
