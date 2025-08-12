import React from "react";


export const EmbedFrame = () => {
  

  const src =  "http://localhost:3002/game/znate-se";

  console.log(src)

  return (
    <div style={{ width: "100%", height: "80vh", display: "flex", justifyContent: "center" }}>
      <iframe
        title="Milionář"
        src={src}
        width="100%"
        height="100%"
        style={{ border: "2px solid #ccc", borderRadius: 8 }}
        frameBorder="0"
        allow="fullscreen; clipboard-read; clipboard-write"
      />
    </div>
  );
}; 