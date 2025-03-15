import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

function Header() {
  // change background header
  const [bgImage, setBgImage] = useState('/back_ground_header.jpg');

  const toggleBackground = () => {
    setBgImage(prev => prev === '/back_ground_header.jpg' 
      ? '/back_ground_header.webp' 
      : '/back_ground_header.jpg'
    );
  };

  return (
    <div className="relative z-10 bg-white shadow-sm">
      {}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {}
      <div className="p-2 flex justify-between items-center px-5 relative">
        {/* change background when click on logo */}
        <button onClick={toggleBackground}>
          <img src="/logo.svg" width="100" height="100" alt="Logo" />
        </button>
        <div>
          <Button>Sign In</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
