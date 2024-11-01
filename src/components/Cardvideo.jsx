import { React} from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Dialog, IconButton } from '@mui/material';

const video = ({ video, handleOpenVideo }) => {
    return (
        <Card key={video.id.videoId} onClick={() => handleOpenVideo(video.id.videoId)} sx={{ cursor: 'pointer', display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, alignItems: 'start', width: '100%', height: '100%' }}>
            <CardMedia component="img" image={video.snippet.thumbnails.medium.url} alt={video.snippet.title} sx={{ height: "350px", width: '100%', backgroundColor: 'black' }} />
            <CardContent sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, padding: 2, flexGrow: 1, width: '100%', gap: 2 }}>
                <Typography variant="subtitle1">{video.snippet.title}</Typography>

                <Typography variant="body2" color="textSecondary">
                    {video.snippet.description}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                    {video.snippet.channelTitle}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default video;