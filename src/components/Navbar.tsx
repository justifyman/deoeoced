import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50 pl-10">
      <div className="max-w-6xl mx-0 px-5 sm:px-4 lg:px-7">
        <div className="flex justify-between items-center h-20">
          <div className="flex space-x-8">
            <a href="/" className="text-black hover:text-gray-600">
              SHOP
            </a>
            <a href="/philosophy" className="text-black hover:text-gray-600">
              OUR PHILOSOPHY
            </a>
            <a href="/faq" className="text-black hover:text-gray-600">
              FAQ
            </a>
            <a href="/learn" className="text-black hover:text-gray-600">
              LEARN
            </a>
          </div>

          <div className="flex-shrink-0 flex items-center">
            <img
              src="/Images/logo.png"
              alt="decoded.formula logo"
              className="h-8 w-auto mr-2"
            />
            <a
              href="/"
              className="text-xl font-light tracking-wider text-black pr-5"
            >
              decoded.formula
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="/account" className="text-black hover:text-gray-600">
              ACCOUNT
            </a>
            <a href="/cart" className="text-black hover:text-gray-600">
              BAG (0)
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
