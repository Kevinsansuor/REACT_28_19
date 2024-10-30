// src/api.js
export async function fetchYouTubeVideos(category) {
    const apiKey = "AIzaSyBJLzEqjDKSMu0g7-yGeN6fTeTiAY6XE4o";
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&order=relevance&maxResults=2&q=${category}&key=${apiKey}`
    );
    

    console.log("Respuesta: ",response);
    
  
    if (!response.ok) {
      throw new Error('Failed to fetch YouTube videos');
    }
  
    const data = await response.json();
    return data.items;
  }
  