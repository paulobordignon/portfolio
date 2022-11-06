import { IInput } from "./types";

export function Input({ label, placeholder }: IInput) {
  return (
    <>
      <label className="block mb-2 text-primaryText">{label}</label>
      <input
        type="text"
        className="bg-cardHover text-primaryText rounded-[10px] block p-3 outline-none w-full"
        placeholder={placeholder}
        required
      />
    </>
  );
}
