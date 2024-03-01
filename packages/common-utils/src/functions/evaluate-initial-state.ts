export const evaluateInitialState = (state: unknown) => (typeof state === 'function' ? state() : state);
