import { forwardRef } from "react";
import { IInput } from "./types";

export const Input = forwardRef<HTMLInputElement, IInput>(function Input(
  { label, placeholder },
  ref
) {
  return (
    <div className="basis-full sm:basis-[calc(50%-1.25rem)] w-max" key={label}>
      <label className="block mb-2 text-primaryText">{label}</label>
      <input
        type="text"
        className="bg-cardHover text-primaryText rounded-[10px] block p-3 outline-none w-full"
        placeholder={placeholder}
        ref={ref}
        required
      />
    </div>
  );
});
