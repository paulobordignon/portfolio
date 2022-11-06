export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => any;
  variant?: "normal" | "error";
}
