import React from 'react'

export const LoadImage = (props) => {
    const source_ = props.source;
    const alt_ = props.alt_;
    const style = props.style;

  return (
    <nav>
    <div style={{width: '100%', height: '100%'}}>
      <img style={style} src={source_} alt={alt_}/>
    </div>
    </nav>
  );
};
