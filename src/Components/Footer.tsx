import React from 'react';

const Footer : React.FC = () => {
  let date = new Date();
  return (
    <>
      <div className="md:px-10 px-3 mt-15 p-5">
        <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
          <p>@ Copyright {date.getFullYear()} | Aky Wanjala</p>
          <p className="hidden sm:block text-blue-500">Fullstack Developer</p>
          <p className="hidden sm:block text-orange-400">2D Animator</p>
          <p className="hidden sm:block"> Graphic Designer</p>
          <p className="hidden sm:block">Designed by <a className="text-primary" href="https://www.linkedin.com/in/denis-wachira/" target="_blank" rel="noreferrer">
            @wakynjala
          </a></p>
        </div>

      </div>
      
    </>
  );
};

export default Footer;