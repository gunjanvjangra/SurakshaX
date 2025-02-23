import React, { useState } from "react";

const VideoCarousel = () => {
  const videos = [
    { url: "https://drive.google.com/file/d/1nIZ_79OeX0GhQxFctUmwLhEJFUZPqW6N/preview", title: "Video 1: Fore-Aft Carry" },
    { url: "https://drive.google.com/file/d/18F9Ztm6Dp5J3r2daGW4GkdaN0NbXYDi-/preview", title: "Video 2: Fireman's Carry" },
    { url: "https://drive.google.com/file/d/1OCEXYVxud6ORjgply3QT1dsBG_QUReh0/preview", title: "Video 3: Piggyback Rescue" },
    { url: "https://drive.google.com/file/d/175Vq4N8rN8T2Sf26KtvHFtlb72hVqc7F/preview", title: "Video 4: Four-Hand Seat Carry" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div 
      style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        gap: "20px", 
        
        flexDirection: "column",
        marginTop: "20px",
        marginBottom: "20px"
        // Adds space above the video
      }}
    >
      {/* Video Title */}
      <h3 style={{ color:"#052E16", fontWeight: "bold", fontSize: "30px", marginBottom: "10px" }}>{videos[currentIndex].title}</h3>

      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Previous Video Button with Text */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <button 
            onClick={prevVideo} 
            style={{ fontSize: "24px", border: "none", cursor: "pointer", background: "none", color:"#052E16" , marginRight:"20px" , fontWeight: "bold" }}>
            ❮
            </button>
          
        </div>

        {/* Video Frame */}
        <iframe 
          src={videos[currentIndex].url} 
          width="640" 
          height="360" 
          allow="autoplay"
          title={videos[currentIndex].title}
          style={{ borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }} // Adds rounded corners & shadow
        ></iframe>

        {/* Next Video Button with Text */}
        <div style={{ display: "flex", alignItems: "center", marginLeft:"20px" ,gap: "15px" }}>
       
          <button 
            onClick={nextVideo} 
            style={{ fontSize: "24px", border: "none", cursor: "pointer", background: "none", color:"#052E16" , fontWeight: "bold" }}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;