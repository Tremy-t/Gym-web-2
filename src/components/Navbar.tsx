import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'About', path: '#about' },
    { 
      name: 'Classes', 
      path: '#classes',
      submenu: [
        { name: 'Group Fitness', path: '#group-fitness' },
        { name: 'Personal Training', path: '#personal-training' },
        { name: 'Specialized Programs', path: '#specialized-programs' }
      ]
    },
    { name: 'Pricing', path: '#pricing' },
    { name: 'Trainers', path: '#trainers' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => 
              link.submenu ? (
                <div key={index} className="relative group">
                  <button className="flex items-center text-white hover:text-emerald-400 font-medium transition-colors">
                    {link.name}
                    <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-sm rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                    {link.submenu.map((subitem, idx) => (
                      <a 
                        key={idx} 
                        href={subitem.path} 
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-emerald-400"
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a 
                  key={index} 
                  href={link.path} 
                  className="text-white hover:text-emerald-400 font-medium transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          <div className="hidden md:flex">
            <a 
              href="#join" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-x-0 top-[60px] bg-gray-900/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link, index) => 
              link.submenu ? (
                <div key={index} className="flex flex-col">
                  <button 
                    className="flex items-center justify-between text-white font-medium mb-2"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = e.currentTarget.nextElementSibling;
                      if (target) {
                        target.classList.toggle('hidden');
                      }
                    }}
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                  <div className="hidden pl-4 flex flex-col space-y-2">
                    {link.submenu.map((subitem, idx) => (
                      <a 
                        key={idx} 
                        href={subitem.path} 
                        className="text-gray-300 hover:text-emerald-400 text-sm py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a 
                  key={index} 
                  href={link.path} 
                  className="text-white hover:text-emerald-400 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
            <div className="pt-2">
              <a 
                href="#join" 
                className="block bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full font-semibold text-center transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;