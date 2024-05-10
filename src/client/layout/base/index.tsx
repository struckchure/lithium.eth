import { ReactNode } from "react";
import { FiEdit as EditIcon } from "react-icons/fi";
import { IoIosNotificationsOutline as NotificationIcon } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Logo } from "../../components/logo";
import { AvatarButton } from "./avatar.button";
import { SearchForm } from "./search.form";

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout(props: BaseLayoutProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <main>
      <nav>
        <div className="flex items-center justify-center">
          <Link to="/">
            <Logo />
          </Link>

          <div className="w-full h-[50px] flex items-center justify-between px-4">
            <SearchForm />
          </div>
        </div>

        <div className="flex items-center justify-end gap-1">
          <button
            className={`ghost icon icon-with-text ${pathname === "/new" && "bg-[rgba(0,0,0,0.15)]"}`}
            onClick={() => navigate("/new")}
          >
            <EditIcon color="black" />
            <span className="text-black font-extralight">Write</span>
          </button>

          <button
            className={`ghost icon ${pathname === "/notifications" && "bg-[rgba(0,0,0,0.15)]"}`}
            onClick={() => navigate("/notifications")}
          >
            <NotificationIcon color="black" size={"20px"} />
          </button>

          <AvatarButton />
        </div>
      </nav>

      {props.children}
    </main>
  );
}
