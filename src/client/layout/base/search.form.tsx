import { IoSearch as SearchIcon } from "react-icons/io5";

export function SearchForm() {
  return (
    <form>
      <div className="flex items-center justify-start rounded-full w-[200px] bg-[rgba(0,0,0,0.15)] overflow-clip px-2">
        <SearchIcon color="gray" size={"15px"} />

        <input type="text" placeholder="Search" className="pl-2" />
      </div>
    </form>
  );
}
