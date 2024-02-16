import React from 'react';

import "./Scroll.css";

export const Scroll = ({ data }) => {
  // console.log(data);
  return (
    <div className="gallery">
      {data.map((item,idx)=>{
        return (
           <figure
           key = {idx}
           className = {`gallery_item gallery_item--${idx+1}`}
           >
          <img 
             src = {item.src}
             alt = {item.alt}
             className = "gallery_img"
          />
           </figure>
        );
        
      })}
      
      
    </div>
  );
};

