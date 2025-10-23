import Navbar from "./components/layouts/Navbar";

export default function AppLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      {/* Main content goes here */}
    </div>
  );
}
