export interface IAlertProvider {
  children: React.ReactNode;
}

export interface IAlertContext {
  error: any;
  addError: (title: String, text: String) => void;
  removeError: () => void;
}
