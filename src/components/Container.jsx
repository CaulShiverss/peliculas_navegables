import { Outlet } from "react-router-dom";

function Container() {
  return (
    <main className="container mx-auto">
      <Outlet />
    </main>
  );
}

export default Container;
