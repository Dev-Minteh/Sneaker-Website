// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router";
// export default function Navbar({ cartCount, onCartClick }) {
//   return (
//     <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
//       <h1 className="text-2xl font-bold text-red-500">Mollar Kicks</h1>
//       <ul className="flex text-xl font-medium gap-6 text-gray-600">
//         <li className="hover:text-red-500 cursor-pointer">
//         <Link to="/">
//             Home
//         </Link>
//         </li>
//         <li className="hover:text-red-500 cursor-pointer">
//         <Link to="/store">
//         Store
//         </Link>
//         </li>
//         <li className="hover:text-red-500 cursor-pointer">
//         <Link to="/about">
//             About
//         </Link>
//         </li>
//       </ul>
//       <div className="relative cursor-pointer" onClick={onCartClick}>
//         <FaShoppingCart size={24} className="text-gray-600"/>
//         {cartCount > 0 && (
//           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//             {cartCount}
//           </span>
//         )}
//       </div>
//     </nav>
//   );
// }


import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navbar({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-red-500">Mollar Kicks</h1>
      <ul className="hidden md:flex text-lg font-medium gap-6 text-gray-600">
        <li className="hover:text-red-500 cursor-pointer">
          <Link to="/">Home</Link>
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
        <div className="relative cursor-pointer" onClick={onCartClick}>
          <Link to="/cart">
           <FaShoppingCart size={24} className="text-gray-600" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
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
