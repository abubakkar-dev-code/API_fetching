import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { title: "Home", path: "/home" },
    { title: "Products", path: "/products" },
    { title: "Contact", path: "/contact" },
  ]
  return (
    <nav
      aria-label="Main navigation"
      className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
    >
      <span className="text-lg font-bold text-slate-900">Task Hub</span>
      <div className="flex items-center gap-6">
        {links.map((item, index) => (
          <>
            <NavLink
              key={index}
              to={item.path}
              end
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${isActive
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
                }`
              }
            >
              {item.title}
            </NavLink>

          </>
        ))}
      </div>
    </nav >
  )
};

export default Navbar;
