export interface IButton {
  title: string;
  onClick?: () => any;
  type?: "normal" | "error";
}
