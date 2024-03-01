import { camelToSnakeTransform } from './json';

export function formDataToSnakeCaseTransform(formData: FormData): FormData {
  const newFormData = new FormData();

  for (const [key, value] of formData.entries()) {
    newFormData.append(camelToSnakeTransform(key), value);
  }

  return newFormData;
}
