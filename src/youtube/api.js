// src/api.js
export async function fetchYouTubeVideo(category) {
    const apiKey = "AIzaSyBJLzEqjDKSMu0g7-yGeN6fTeTiAY6XE4o";
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12&q=${category}&key=${apiKey}`
    );
    

    console.log("Respuesta: ",response);
    
  
    if (!response.ok) {
      throw new Error('Error en el fetch, revisar clave API');
    }
  
    const data = await response.json();
    return data.items;
  }
  