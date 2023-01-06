import React from 'react'

export const ParagraphAbout = (props) => {
    const text = props.text;
  return (
    <>
        <p style={styles.text}>{text}</p>
    </>
  )
}


const styles = {
    text:{
        fontSize: '3vh',
        textIndent: '1vh',
    }
};