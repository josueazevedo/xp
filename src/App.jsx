import "./App.css";
import { NavBar } from "./components/NavBar";
import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
}

export default App;
