import Nav from "./Nav";

function Header() {
  return (
    <header className="text-white p-4 shadow-lg primary-bg">
      <section className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cine</h1>
        <Nav />
      </section>
    </header>
  );
}

export default Header;
