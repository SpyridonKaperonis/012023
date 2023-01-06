import React from 'react'

export const LoadImage = (props) => {
    const source = props.source;
    const alt_ = props.alt_;
    const style = props.style;

  return (
    <>
        <img style={style} src={source} alt={alt_}/>
    </>
  )
}
