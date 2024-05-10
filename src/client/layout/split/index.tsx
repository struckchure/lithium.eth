import { ReactNode } from "react";

interface SplitLayoutProps {
  children: ReactNode;
}

export function SplitLayout(props: SplitLayoutProps) {
  return (
    <section className="mx-auto w-[60%] h-full px-2">
      <div className="w-full flex items-start justify-between gap-4">
        <section className="px-20 py-10 w-2/3 flex flex-col gap-10">
          {props.children}
        </section>

        <section className="px-6 py-10 w-1/3 h-screen border-l-[1px] border-gray-200 sticky top-0">
          <p>Welcome!</p>
        </section>
      </div>
    </section>
  );
}
