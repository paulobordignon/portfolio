import { IButton } from "./types";

export function Button({ title }: IButton) {
  return (
    <button
      type="button"
      className={`
        py-2 px-4 text-base xs:py-3 font-poppins font-medium xs:text-lg text-primaryText 
        border-primary border-2 rounded-[10px] outline-none 
        hover:text-hover
      `}
    >
      {title}
    </button>
  );
}
