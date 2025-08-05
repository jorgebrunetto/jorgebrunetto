"use client";

/* eslint-disable import/no-default-export */
import { useEffect, useState } from "react";

export type TLocalStorageState<T> = [
  T | undefined,
  (value?: T) => void,
  {
    isLocalStorageReady: boolean;
  },
];

interface IOptions<T> {
  /** The fallback value when `key` does not exists in localstorage */
  defaultValue?: T;
  /**
   * Callback to transform the "just parsed" stored value.
   * Usefull when you need to transform the stored value into a class.
   *
   * Won't be called if stored value is empty or `key` does not exists
   *
   * @param parsedRawValue - The just parsed value from localstorage
   */
  initializer?: (parsedRawValue: any) => T;
}

/**
 * Manages a value in localstorage with state Reactivity (`React.useState()`)
 *
 * @param key - The key to get/store the value in localstorage
 * @param defaultValue - The fallback value when `key` does not exists in localstorage
 * @returns
 * - The value
 * - `undefined` if given key does not exists, or when client is not available yet.
 */
function useLocalStorageState<T>(
  key: string,
  options?: IOptions<T>,
): TLocalStorageState<T> {
  const [value, setStateValue] = useState<T>();
  const [isClientReady, setIsClientReady] = useState(false);

  /** updates state value and localstorage value */
  function setValue(newValue?: T) {
    if (!isClientReady) throw new Error("Client is not ready yet.");
    if (newValue === undefined) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(newValue));
    setStateValue(newValue);
  }

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      let parsedValue;

      try {
        parsedValue = JSON.parse(storedValue);
      } catch (error) {
        parsedValue = storedValue;
      }
      if (parsedValue && options?.initializer)
        parsedValue = options.initializer(parsedValue);

      setStateValue(parsedValue);
    } else {
      setStateValue(options?.defaultValue);
    }

    setIsClientReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [value, setValue, { isLocalStorageReady: isClientReady }];
}

export default useLocalStorageState;
