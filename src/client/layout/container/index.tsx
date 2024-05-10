import { ReactNode } from "react";

export interface ContainerLayoutProps {
  children: ReactNode;
}

export function ContainerLayout(props: ContainerLayoutProps) {
  return (
    <section className="mx-auto w-[60%] h-full px-2 py-10">
      {props.children}
    </section>
  );
}
