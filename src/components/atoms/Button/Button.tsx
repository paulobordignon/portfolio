import { IButton } from "./types";

export function Button({ title, onClick, variant, ...props }: IButton) {
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}
      className={`
        py-2 px-4 text-base xs:py-3 font-medium xs:text-lg text-primaryText
        border-2 rounded-[10px] outline-none xs:w-auto w-full
        ${variant === "error" ? "border-error" : "border-primary"}
        ${
          variant === "error"
            ? "hover:text-errorHover"
            : "hover:text-primaryHover"
        }
        disabled:border-cardHover disabled:text-cardHover
      `}
    >
      {title}
    </button>
  );
}
