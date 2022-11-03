import { useContext } from "react";
import { AlertContext } from "@src/providers";

export function useAlert() {
  const { error, addError, removeError } = useContext(AlertContext);
  return { error, addError, removeError };
}
