import moment from "moment";
import ms from "ms";
import { BsDot as DotIcon } from "react-icons/bs";
import { HiOutlineMinusCircle as CircleMinus } from "react-icons/hi";
import { IoEllipsisHorizontalSharp as EllipsisIcon } from "react-icons/io5";
import { MdOutlineBookmarkAdd as BookmarkIcon } from "react-icons/md";
import { RxAvatar as AvatarIcon } from "react-icons/rx";
import { Link } from "react-router-dom";

import { Chip } from "../../../components/chip";
import { ArticleItemProps } from "../types/article.types";

export function ArticleItem(props: ArticleItemProps) {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex items-center justify-start">
        <Link
          to={`/author/${props.author.id}`}
          className="flex items-center justify-start"
        >
          <AvatarIcon size={"20px"} className="mr-2 text-black" />
          <label className="font-semibold">{props.author.fullName}</label>
        </Link>

        <DotIcon size={"5px"} className="mx-1" />

        <label className="text-[grey]">
          {moment(props.createdAt).format("MMMM d, YYYY")}
        </label>
      </div>

      <Link to={`/article/${props.slug}`}>
        <div className="flex justify-between items-start gap-4">
          <div className="w-2/3">
            <h4 className="text-lg font-bold">{props.title}</h4>
            <p>{props.content}</p>
          </div>

          <img src={props.cover} />
        </div>
      </Link>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Chip label="Golang" className="mr-2" />

          <label className="text-[grey]">
            {ms(props.readTime, { long: true })} read
          </label>
          <DotIcon size={"5px"} className="mx-1" />
          <label className="text-[grey]">Selected for you</label>
        </div>

        <div className="flex items-center gap-4">
          <button className="ghost icon px-0">
            <BookmarkIcon color="grey" size={"20px"} />
          </button>

          <button className="ghost icon px-0">
            <CircleMinus color="grey" size={"20px"} />
          </button>

          <button className="ghost icon px-0">
            <EllipsisIcon color="grey" size={"20px"} />
          </button>
        </div>
      </div>
    </article>
  );
}
