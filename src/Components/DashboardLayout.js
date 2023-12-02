import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Navigation bar, logo, and any other top-level items */}
        Hello World!
      </header>
      <main>{children}</main>
      <footer>
        {/* Footer information */}
      </footer>
    </div>
  );
};

export default DashboardLayout;
