import { createContext, useCallback, useEffect, useState } from "react";
import { IAlertProvider, IAlertContext } from "./types";

export const AlertContext = createContext({
  error: null,
  addError: (title, text) => {},
  removeError: () => {},
});

export function AlertProvider({ children }: IAlertProvider) {
  const [error, setError] = useState(null);

  const removeError = () => setError(null);

  const addError = (title, text) => setError({ title, text });

  useEffect(() => {
    setTimeout(() => {
      removeError();
    }, 7000);
  }, [error]);

  const contextValue: IAlertContext = {
    error,
    addError: useCallback((title, text) => addError(title, text), []),
    removeError: useCallback(() => removeError(), []),
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
}
