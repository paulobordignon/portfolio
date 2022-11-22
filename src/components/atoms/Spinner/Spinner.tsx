import { ISpinner } from "./types";

export function Spinner({ height, width }: ISpinner) {
  return (
    <div
      className={`${height} ${width} w-screen flex items-center justify-center`}
    >
      <div className="w-10 h-10 border-4 border-t-primaryHover border-primary border-double rounded-full animate-spin" />
    </div>
  );
}
