import React from "react";
import Announcement from "../Announcement";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Index = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Announcement />
      {children}
      <Footer />
    </div>
  );
};

export default Index;
