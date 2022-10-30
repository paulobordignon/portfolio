import { IButton } from "./types";

export function Button({ title, onClick, type }: IButton) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        py-2 px-4 text-base xs:py-3 font-medium xs:text-lg text-primaryText
        border-2 rounded-[10px] outline-none xs:w-auto w-full
        ${type === "error" ? "border-error" : "border-primary"}
        ${
          type === "error" ? "hover:text-errorHover" : "hover:text-primaryHover"
        }
      `}
    >
      {title}
    </button>
  );
}
