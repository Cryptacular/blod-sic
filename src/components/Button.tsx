import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "light" | "dark";
  href?: string;
  onClick?: () => void | Promise<void>;
}

export default function Button({ children, variant, href, onClick }: Props) {
  const basicClasses: HTMLAnchorElement["className"] =
    "text-xl text-center px-6 py-4 font-bold";
  const variantClasses =
    variant === "dark"
      ? "text-foreground bg-background"
      : "text-background bg-foreground";

  return (
    <a
      className={[basicClasses, variantClasses].join(" ").trim()}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
