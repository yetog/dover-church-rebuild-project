import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import churchLogo from '@/assets/logo/church-logo.png';

type NavChild = { label: string; href: string };
type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: NavChild[] };

const navItems: NavItem[] = [
  {
    label: 'Who We Are',
    children: [
      { label: 'Church for the People', href: '/about' },
      { label: 'United Church of Christ', href: '/ucc' },
      { label: 'Pastor, Staff and Lay Leaders', href: '/staff' },
      { label: 'Partners in Mission', href: '/partners' },
    ],
  },
  { label: 'Videos of Service', href: '/sermons' },
  { label: 'Daily Scripture, Meditation & Prayer', href: '/meditation' },
  { label: "Happening at People's", href: '/happening' },
  {
    label: "People's Community Center",
    children: [
      { label: 'Center for Children and Youth', href: '/community/children-youth' },
      { label: 'Center for Neighbors in Need', href: '/community/neighbors' },
      { label: 'Center for Community Health', href: '/community/health' },
    ],
  },
  { label: 'Helping Others & Getting Help', href: '/helping-others' },
  { label: 'Current Issues of our Newsletter', href: '/newsletter' },
  { label: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileDropdown = (label: string) => {
    setMobileExpanded(prev => (prev === label ? null : label));
  };

  return (
    <nav className="bg-church-800 sticky top-0 z-50 shadow-md">
      <div className="w-full container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={churchLogo} alt="People's Church of Dover" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map(item => (
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 px-3 py-2 text-white/80 hover:text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors">
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-lg rounded-md py-1 hidden group-hover:block border-t-2 border-cta z-50">
                    {item.children.map(child => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-church-800 hover:bg-church-50 hover:text-church-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href!}
                  className="px-3 py-2 text-white/80 hover:text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('lg:hidden border-t border-white/10', mobileOpen ? 'block' : 'hidden')}>
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navItems.map(item => (
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => toggleMobileDropdown(item.label)}
                  className="w-full flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-base font-medium"
                >
                  {item.label}
                  <ChevronDown className={cn('h-4 w-4 transition-transform', mobileExpanded === item.label ? 'rotate-180' : '')} />
                </button>
                <div className={cn('pl-4 space-y-1 mt-1', mobileExpanded === item.label ? 'block' : 'hidden')}>
                  {item.children.map(child => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md text-sm"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href!}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-base font-medium"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
