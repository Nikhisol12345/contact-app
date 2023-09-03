import React from 'react';
import { Link } from 'react-router-dom';
import contactIcon from '../utils/contact-book.png';
import chartIcon from '../utils/bar-chart.png';

const Sidebar = () => {
  const navItems = [
    { to: '/', icon: contactIcon, label: 'Contacts' },
    { to: '/dashboard', icon: chartIcon, label: 'Charts And Maps' },
  ];

  return (
    <div className="bg-gray-900 text-white w-60 h-screen p-3  pt-20 shadow-md">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <nav className="space-y-4">
        {navItems.map((item, index) => (
          <NavItem key={index} to={item.to} icon={item.icon} label={item.label} />
        ))}
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => (
  <Link to={to} className="flex items-center p-3 rounded-md hover:bg-gray-800">
    <img src={icon} alt={label}  className="w-5 h-5 mr-2 bg-white" />
    <span>{label}</span>
  </Link>
);

export default Sidebar;
