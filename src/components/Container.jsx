import { Outlet } from "react-router-dom";

function Container() {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="container mx-auto min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >
      <Outlet />
    </main>
  );
}

export default Container;
