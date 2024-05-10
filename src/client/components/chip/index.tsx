import { ChipProps } from "./chip.types";

export function Chip(props: ChipProps) {
  return (
    <label
      className={`rounded-full bg-slate-300 hover:bg-slate-400 hover:text-slate-800 text-black py-2 px-4 cursor-pointer ${props.className}`}
    >
      {props.label}
    </label>
  );
}
