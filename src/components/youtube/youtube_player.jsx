// src/components/YouTubePlayer.jsx
import React, { useEffect, useRef } from 'react';

const YouTubePlayer = ({ videoId, onClose }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Verificar si la API de YouTube ya está cargada
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = loadPlayer;
      document.body.appendChild(tag);
    } else {
      loadPlayer();
    }

    // Cargar el reproductor
    function loadPlayer() {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoId,
        events: {
          onReady: (event) => event.target.playVideo(),
          onStateChange: handleStateChange,
        },
      });
    }

    // Manejar eventos del reproductor
    function handleStateChange(event) {
      const { data } = event;
      if (data === window.YT.PlayerState.ENDED) {
        onClose(); // Cerrar modal al finalizar video
      }
    }

    // Limpiar el reproductor al desmontar
    return () => {
      if (playerRef.current && playerRef.current.getIframe()) {
        playerRef.current.destroy();
        playerRef.current = null; // Asegura que no quede una referencia
      }
    };
  }, [videoId, onClose]);

  return <div id="youtube-player" style={{ width: '100%', height: '500px' }}></div>;
};

export default YouTubePlayer;
