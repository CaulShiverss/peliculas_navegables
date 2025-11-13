import Nav from "./Nav";

function Header() {
  return (
    <header className="text-white p-4 shadow-lg primary-bg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cine</h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
