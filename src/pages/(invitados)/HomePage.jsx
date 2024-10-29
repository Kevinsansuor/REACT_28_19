import React from 'react';
import Header from '../../components/headers/navigation';
import Container from '@mui/material/Container';
import CategoryHeader from '../../components/category_header/category_header';

const HomePage = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div>
      <Container disableGutters={true} maxWidth="xl" sx={{ backgroundColor: '#f2f4f3', padding: '0', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        <CategoryHeader selectedCategory={selectedCategory} />
      </Container>
    </div>
  );
};

export default HomePage;
