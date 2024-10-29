import React from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';

const Header = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <PrimarySearchAppBar
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
};

export default Header;
