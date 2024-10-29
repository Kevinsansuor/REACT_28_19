import React, { useEffect, useState } from 'react';
import Header from '../../components/headers/navigation';
import Container from '@mui/material/Container';
import CategoryHeader from '../../components/category_header/category_header';
import { fetchYouTubeVideos } from '../../../../api/youtube/api';
import { Box, Grid2, Typography, Card, CardContent, CardMedia } from '@mui/material';

const HomePage = ({ selectedCategory, setSelectedCategory }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('[HomePage] useEffect: selectedCategory:', selectedCategory);
    if (selectedCategory) {
      fetchYouTubeVideos(selectedCategory)
        .then((videoResults) => {
          console.log('[HomePage] useEffect: videoResults:', videoResults);
          setVideos(videoResults);
        })
        .catch((error) => console.error('[HomePage] useEffect: error fetching videos:', error));
    }
  }, [selectedCategory]);

  console.log('[HomePage] render: videos:', videos);

  return (
    <div>
      <Container disableGutters={true} maxWidth="xl" sx={{ backgroundColor: '#f2f4f3', padding: '0', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        <CategoryHeader selectedCategory={selectedCategory} />
        {selectedCategory && (
          <Box backgroundColor="#f2f4f3" sx={{ padding: 2 }}>
            <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {videos.map((video) => (
                <Grid2 item key={video.id.videoId} xs={12} sm={6} md={4} lg={3} xl={2}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                    />
                    <CardContent>
                      <Typography variant="subtitle1">{video.snippet.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {video.snippet.channelTitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default HomePage;

