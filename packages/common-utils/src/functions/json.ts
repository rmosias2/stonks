/* eslint-disable @typescript-eslint/no-explicit-any */
export function macroCaseTransform(input: string) {
  return snakeToCamelTransform(input.toLowerCase());
}

export function snakeToCamelTransform(input: string) {
  if (!input) return input;

  return input[0] + input.slice(1).replace(/(_[a-z])/g, (group) => group.toUpperCase().replace('_', ''));
}

export function camelToSnakeTransform(input: string) {
  return input.replace(/([A-Z])/g, (group) => `_${group.toLowerCase()}`);
}

export function baseCaseTransform(json: any, transform: (input: string) => string): any {
  if (json === null || json === undefined) {
    return null;
  }

  if (Array.isArray(json)) {
    return json.map((item) => baseCaseTransform(item, transform));
  }

  if (typeof json === 'object') {
    return Object.keys(json).reduce((previousValue, currentValue) => {
      const key = transform(currentValue);
      const value = baseCaseTransform(json[currentValue], transform);
      (previousValue as any)[key] = value;
      return previousValue;
    }, {});
  }

  return json;
}

export function jsonToCamelCaseTransform(json: any): any {
  return baseCaseTransform(json, snakeToCamelTransform);
}

export function jsonToSnakeCaseTransform(json: any): any {
  return baseCaseTransform(json, camelToSnakeTransform);
}
