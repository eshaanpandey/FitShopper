import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const cartCount = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-extrabold tracking-tight">
            Fit<span className="text-yellow-300">Shopper</span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg transition duration-200 "hover:text-yellow-300 ${
                isActive ? "border-b-2 " : "hover:text-yellow-300"
              }`
            }
          >
            Home
          </NavLink>

          <Link to="/cart" className="relative flex items-center group">
            <FaShoppingCart size={24} className="group-hover:text-yellow-300 transition duration-200" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
