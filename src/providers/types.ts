export interface IAlertProvider {
  children: React.ReactNode;
}

export interface IAlertContext {
  alert: string;
  variant: "Success" | "Alert" | "Error";
  addVariant: (variant) => void;
  addAlert: (title: String, text: String) => void;
  removeAlert: () => void;
}
