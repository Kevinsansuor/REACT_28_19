import React, { useEffect, useState } from 'react';
import Header from '../../components/headers/navigation';
import Container from '@mui/material/Container';
import CategoryHeader from '../../components/category_header/category_header';
import { fetchYouTubeVideo } from '../../youtube/api';
import { Box, Typography, Card, CardContent, CardMedia, Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Cardvideo from '../../components/Cardvideo'
import Ejemplo from '../../components/ejemplo';

const HomePage = ({ selectedCategory, setSelectedCategory }) => {
  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    console.log('useEffect triggered with selectedCategory:', selectedCategory);
    if (selectedCategory) {
      fetchYouTubeVideo(selectedCategory)
        .then((videoResults) => {
          console.log('Video results fetched:', videoResults);
          setVideos(videoResults);
        })
        .catch((error) => console.error('Error con la API de YouTube:', error));
    }
  }, [selectedCategory]);

  const handleOpenVideo = (videoId) => {
    console.log('Opening video with ID:', videoId);
    setSelectedVideo(videoId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log('Closing video dialog');
    setSelectedVideo(null);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    console.log('Transition component rendered');
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div>
      {/* Main content */}
      <Container disableGutters={true} maxWidth="xl" sx={{ backgroundColor: '#f2f4f3', padding: '0', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <CategoryHeader selectedCategory={selectedCategory} />

        {/* Video List */}
        {selectedCategory && (
          <Box minHeight={"100vh"} sx={{ padding: 2}}>
            <Typography variant="h2" sx={{ padding: "2, 0, 2, 0" , color: 'black'}}>
              {selectedCategory}
            </Typography>
            <Container maxWidth="md" disableGutters={true}>
              <Box sx={{ display: { xs: 'flex', sm: 'flex' }, gap: 2, flexDirection: 'column' } }>
                {videos.map((video) => (
                  <Ejemplo componente = {Cardvideo} video = {video} key={video.id.videoId} handleOpenVideo={handleOpenVideo}>

                  </Ejemplo>
                  // <Cardvideo video = {video} key={video.id.videoId} handleOpenVideo={handleOpenVideo}>

                  // </Cardvideo>

                ))}
              </Box>
            </Container>

            {/* Video Player Dialog */}
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              keepMounted={false}
              onExited={() => {
                console.log('Dialog exited');
                setSelectedVideo(null);
              }}
            >
              <Slide direction="down" in={open} unmountOnExit>
                <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8, backgroundColor: 'black', color: 'white' }}>
                  <CloseIcon />
                </IconButton>
              </Slide>
              {selectedVideo && (
                <Container
                  disableGutters={true}
                  maxWidth="xl"
                  sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    backgroundColor: 'black',
                  }}
                >
                  <iframe
                    frameBorder="0"
                    loading="lazy"
                    title={selectedVideo}
                    width="90%"
                    height="90%"
                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope"
                    allowFullScreen
                  />
                </Container>
              )}
            </Dialog>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default HomePage;

