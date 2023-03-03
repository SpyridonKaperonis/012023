import React from 'react'

export const LoadProfileImage = (props) => {
    const alt_ = props.alt_;
    const img_style = props.style;
   

  return (
 
    <div style={{alignItems: 'center'}}>
      <img src={require('../images/skimage.jpg')} style={img_style} alt={alt_} />
    </div>
    
  );
};
