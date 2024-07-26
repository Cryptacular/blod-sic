import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "light" | "dark";
};

type Props =
  | (AnchorHTMLAttributes<HTMLAnchorElement> & BaseProps)
  | (ButtonHTMLAttributes<HTMLButtonElement> & BaseProps);

export default function Button({ children, variant, type, ...props }: Props) {
  const basicClasses: HTMLAnchorElement["className"] =
    "text-xl text-center px-6 py-4 font-bold";
  const variantClasses =
    variant === "dark"
      ? "text-foreground bg-background"
      : "text-background bg-foreground";

  const className = [basicClasses, variantClasses, props.className || ""]
    .join(" ")
    .trim();

  if ("href" in props) {
    return (
      <a {...props} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button {...(props as any)} className={className}>
      {children}
    </button>
  );
}
