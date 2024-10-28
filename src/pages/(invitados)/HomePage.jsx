import React from 'react'
import Header from '../../components/headers/header';
import Container from '@mui/material/Container'

const HomePage = () => {
    return ( 
        <div>
            <Container disableGutters={true} maxWidth="xl" sx={{ backgroundColor: '#f2f4f3', padding: '0', minHeight: '100vh', width: '100%'}}>
                <Header>
                    titulo= 'Yutu App'
                </Header>
            </Container>
        </div>
     );
}
 
export default HomePage;