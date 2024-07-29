import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import Destinations from '../components/Destinations';
import SearchTab from '../components/SearchTab';

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <Navbar setShowSearch={setShowSearch} />
      <HeroCarousel />
      <Destinations />
      <SearchTab showSearch={showSearch} setShowSearch={setShowSearch} />
    </div>
  );
};

export default Home;


