import { ReactNode } from "react";

export default function ResponsiveContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full py-4 px-6">
      <div className="mx-auto max-w-6xl">{children}</div>
    </div>
  );
}
