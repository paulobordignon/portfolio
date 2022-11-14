import { ISpinner } from "./types";

export function Spinner({ height }: ISpinner) {
  return (
    <div className={`${height} w-screen flex items-center justify-center`}>
      <div className="w-10 h-10 border-4 border-t-primaryHover border-primary border-double rounded-full animate-spin" />
    </div>
  );
}
