import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

function Layout({ children, currentPath, navigation, onNavigate }) {
  return (
    <>
      <Header currentPath={currentPath} navigation={navigation} onNavigate={onNavigate} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
