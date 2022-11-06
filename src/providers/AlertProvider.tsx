import { createContext, useCallback, useEffect, useState } from "react";
import { IAlertProvider, IAlertContext } from "./types";

export const AlertContext = createContext({
  alert: null,
  variant: "Alert",
  addVariant: (variant) => {},
  addAlert: (title, text) => {},
  removeAlert: () => {},
});

export function AlertProvider({ children }: IAlertProvider) {
  const [alert, setAlert] = useState(null);
  const [variant, setVariant] = useState<"Success" | "Alert" | "Error">(
    "Alert"
  );

  const removeAlert = () => {
    setAlert(null);
    setVariant("Alert");
  };

  const addAlert = (title, text) => setAlert({ title, text });
  const addVariant = (variant) => setVariant(variant);

  useEffect(() => {
    setTimeout(() => {
      removeAlert();
    }, 7000);
  }, [alert]);

  const contextValue: IAlertContext = {
    alert,
    variant,
    addVariant: useCallback((variant) => addVariant(variant), []),
    addAlert: useCallback((title, text) => addAlert(title, text), []),
    removeAlert: useCallback(() => removeAlert(), []),
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
}
