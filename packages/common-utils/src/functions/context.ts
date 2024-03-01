import { Context, createContext, useContext } from 'react';

export const createSafeContext = <T>(name: string) => {
  const context: Context<T | null> = createContext<T | null>(null);

  const useHook = () => {
    const contextValue = useContext(context);

    if (contextValue === null) {
      throw new Error(`${name}Context is not available. Check if the wrapper is rendered correctly!`);
    }

    return contextValue as T;
  };

  return [useHook, context] as const;
};
