import { formDataToSnakeCaseTransform } from '../form-data';

describe('form-data', () => {
  describe('formDataToSnakeCaseTransform', () => {
    it('should convert camelCase to snake_case', () => {
      // Arrange
      const formData = new FormData();
      formData.append('testKey', 'testValue');
      formData.append('anotherTestKey', 'testValue2');
      // Act
      const result = formDataToSnakeCaseTransform(formData);
      // Assert
      expect(result.get('test_key')).toBe('testValue');
      expect(result.get('another_test_key')).toBe('testValue2');
    });
  });
});
