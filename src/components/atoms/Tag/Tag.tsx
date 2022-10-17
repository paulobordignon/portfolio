import { ITag } from "./types";

export function Tag({ text }: ITag) {
  return (
    <span className="text-base py-1 px-2 rounded-full text-primary">
      {text}
    </span>
  );
}
