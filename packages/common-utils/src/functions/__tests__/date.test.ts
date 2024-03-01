import { createDateObject } from '../date';

describe('createDateObject', () => {
  it('creates a Date object with the correct time', () => {
    const dateString = '2024-01-15';
    const result = createDateObject(dateString);
    const expectedDate = new Date(`${dateString} 00:00`);
    expect(result).toEqual(expectedDate);
  });
});
