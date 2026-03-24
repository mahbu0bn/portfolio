import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";

const timelineLinks = [
  {period: "Selected Works", path: "/selected"},
  // {period: "Commissioned", path: "/commissioned"},
  // {period: "Favorites", path: "/favorites"},
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  if (isLandingPage) return null;

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed z-50 p-2 top-6 left-6 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="relative w-8 h-6">
          <motion.span
            className="absolute left-0 block w-8 h-0.5 bg-neutral-800"
            style={{top: "0%"}}
            animate={{
              rotate: isOpen ? 45 : 0,
              top: isOpen ? "50%" : "0%",
              translateY: isOpen ? "-50%" : "0",
            }}
          />
          <motion.span
            className="absolute left-0 top-1/2 -translate-y-1/2 block w-8 h-0.5 bg-neutral-800"
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
          />
          <motion.span
            className="absolute left-0 block w-8 h-0.5 bg-neutral-800"
            style={{bottom: "0%"}}
            animate={{
              rotate: isOpen ? -45 : 0,
              bottom: isOpen ? "50%" : "0%",
              translateY: isOpen ? "50%" : "0",
            }}
          />
        </div>
      </button>

      {/* Desktop Navbar */}
      <motion.nav
        className="fixed top-0 left-0 z-40 flex flex-col hidden w-64 h-screen p-12 border-r bg-white/95 backdrop-blur-md border-neutral-100 md:flex"
        initial={{x: -100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 300, damping: 30}}
      >
        <NavbarContent location={location} />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white backdrop-blur-lg md:hidden"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
          >
            <div className="flex flex-col h-full p-8 pt-28">
              <div className="flex flex-col space-y-8">
                <Link
                  to="/"
                  className="text-3xl font-light tracking-wide transition-colors text-neutral-900 hover:text-neutral-600"
                  onClick={() => setIsOpen(false)}
                >
                  Mahboube Art Studio
                </Link>

                <motion.div
                  className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-12"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 0.1}}
                >
                  Contemporary Calligraphy
                </motion.div>
              </div>

              <div className="flex flex-col mt-8 space-y-8">
                {timelineLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: index * 0.1 + 0.2}}
                  >
                    <Link
                      to={link.path}
                      className={`text-xl tracking-wide transition-colors ${
                        location.pathname === link.path
                          ? "text-neutral-900 font-normal"
                          : "text-neutral-500 hover:text-neutral-800"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.period}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/about"
                    className={`text-xl tracking-wide transition-colors ${
                      location.pathname === "/about"
                        ? "text-neutral-900 font-normal"
                        : "text-neutral-500 hover:text-neutral-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className={`text-xl tracking-wide transition-colors ${
                      location.pathname === "/contact"
                        ? "text-neutral-900 font-normal"
                        : "text-neutral-500 hover:text-neutral-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="flex pt-8 space-x-8 text-neutral-500">
                    <a
                      href="https://instagram.com/yeshaya_"
                      className="text-sm tracking-wide transition-colors hover:text-neutral-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/share/12C8wx5XrYM/?mibextid=wwXIfr"
                      className="text-sm tracking-wide transition-colors hover:text-neutral-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavbarContent: React.FC<{
  location: ReturnType<typeof useLocation>;
  onLinkClick?: () => void;
}> = ({location, onLinkClick}) => {
  return (
    <>
      <Link
        to="/"
        className="text-2xl font-light tracking-wide transition-colors text-neutral-900 hover:text-neutral-600"
        onClick={onLinkClick}
      >
        Mahboube Art Studio
      </Link>

      <motion.div
        className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-12 mt-2 font-sans"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2}}
      >
        Contemporary Calligraphy
      </motion.div>

      <div className="flex flex-col space-y-6 font-sans">
        {timelineLinks.map((link, index) => (
          <motion.div
            key={link.path}
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: index * 0.1 + 0.3}}
          >
            <Link
              to={link.path}
              className={`tracking-wide transition-colors ${
                location.pathname === link.path
                  ? "text-neutral-900 font-normal"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
              onClick={onLinkClick}
            >
              {link.period}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-auto"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.6}}
      >
        <div className="flex flex-col space-y-2 font-sans text-sm">
          <Link
            to="/about"
            className={`tracking-wide transition-colors ${
              location.pathname === "/about"
                ? "text-neutral-900 font-normal"
                : "text-neutral-500 hover:text-neutral-800"
            }`}
            onClick={onLinkClick}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`tracking-wide transition-colors ${
              location.pathname === "/contact"
                ? "text-neutral-900 font-normal"
                : "text-neutral-500 hover:text-neutral-800"
            }`}
            onClick={onLinkClick}
          >
            Contact
          </Link>
          {/* <div className="flex pt-6 space-x-6 text-neutral-500">
            <a
              href="https://instagram.com/yeshaya_"
              className="tracking-wide transition-colors hover:text-neutral-800"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/12C8wx5XrYM/?mibextid=wwXIfr"
              className="tracking-wide transition-colors hover:text-neutral-800"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
            >
              Facebook
            </a>
          </div> */}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
