import ResponsiveContainer from "./ResponsiveContainer";

export default function Navigation() {
  return (
    <div className="w-full bg-background/20 fixed top-0">
      <ResponsiveContainer>
        <div className="flex flex-row justify-between ">
          <div>blod [sic]</div>
          <nav className="flex flex-row gap-4">
            <a href="#wight">wight</a>
            <a href="#musicvideos">music videos</a>
            <a href="#discography">discography</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
