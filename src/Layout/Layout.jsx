import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="w-3/4 tertiary-bg rounded-lg">{children}</div>
    </div>
  );
};

export default Layout;
