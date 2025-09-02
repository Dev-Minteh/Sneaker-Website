import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useGlobalContext } from '../context/AppContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { state } = useGlobalContext();
  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);


  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-red-500">
         <Link to="/">
        Star Kicks
      </Link>
        </h1>
      <ul className="hidden md:flex text-lg font-medium gap-6 text-gray-600">
        <li className="hover:text-red-500 cursor-pointer">
          <Link  to="/">Home</Link>
        </li>
        <li className="hover:text-red-500 cursor-pointer">
          <Link to="/store">Store</Link>
        </li>
        <li className="hover:text-red-500 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        {/* Cart */}
        <div className="relative cursor-pointer">
          <Link to="/cart">
           <FaShoppingCart size={24} className="text-gray-600" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
          </Link>
        </div>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium text-gray-600 hover:text-red-500"
          >
            Home
          </Link>
          <Link
            to="/store"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium text-gray-600 hover:text-red-500"
          >
            Store
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium text-gray-600 hover:text-red-500"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
