import { useContext } from "react";
import { AlertContext } from "@src/providers";

export function useAlert() {
  const { alert, variant, addVariant, addAlert, removeAlert } =
    useContext(AlertContext);

  return { alert, variant, addVariant, addAlert, removeAlert };
}
