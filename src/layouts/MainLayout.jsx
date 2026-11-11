import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => (
  <>
    <header className="border-b border-slate-200 bg-white">
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default MainLayout;
