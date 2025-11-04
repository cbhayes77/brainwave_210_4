import { Outlet } from "react-router-dom";
import Navbar from "./components/layouts/Navbar.jsx";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      {/* Main content goes here */}
      <main id="main-content" className="flex-1">
       <Outlet />
      </main>
      {/* Footer goes below */}
    </div>
  );
}
