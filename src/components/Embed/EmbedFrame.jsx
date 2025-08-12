import React from "react";


export const EmbedFrame = () => {
  

  const src1 =  "http://localhost:3002/game/miliardar";
  const src2 =  "http://localhost:3002/game/sluchatka";
  const src3 =  "http://localhost:3002/game/co-hodi-vic";
  const src4 =  "http://localhost:3002/game/znate-se";
  

  return (
    <>
    <div style={{ width: "100%", height: "80vh", display: "flex", justifyContent: "center" }}>
      <iframe
        title="Milionář"
        src={src1}
        width="100%"
        height="100%"
        style={{ border: "2px solid #ccc", borderRadius: 8 }}
        frameBorder="0"
        allow="fullscreen; clipboard-read; clipboard-write"
      />
    </div>
     <div style={{ width: "100%", height: "80vh", display: "flex", justifyContent: "center" }}>
     <iframe
       title="Milionář"
       src={src2}
       width="100%"
       height="100%"
       style={{ border: "2px solid #ccc", borderRadius: 8 }}
       frameBorder="0"
       allow="fullscreen; clipboard-read; clipboard-write"
     />
   </div> <div style={{ width: "100%", height: "80vh", display: "flex", justifyContent: "center" }}>
      <iframe
        title="Milionář"
        src={src3}
        width="100%"
        height="100%"
        style={{ border: "2px solid #ccc", borderRadius: 8 }}
        frameBorder="0"
        allow="fullscreen; clipboard-read; clipboard-write"
      />
    </div>
    <div style={{ width: "100%", height: "80vh", display: "flex", justifyContent: "center" }}>
      <iframe
        title="Milionář"
        src={src4}
        width="100%"
        height="100%"
        style={{ border: "2px solid #ccc", borderRadius: 8 }}
        frameBorder="0"
        allow="fullscreen; clipboard-read; clipboard-write"
      />
    </div>
    </>
  );
}; 