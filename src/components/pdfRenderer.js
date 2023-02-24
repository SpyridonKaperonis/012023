import React from 'react'
import pdf_ from '../pdf/Spyridon_Kaperonis_Resume.pdf';


export const PdfRenderer = () => {

  return (
    <div style={styles.container}>
    <iframe style={styles.framei} title='SpyridonKaperonisResume' src={pdf_}></iframe>
    </div>
  )
}

const styles = {
    container: {
        marginTop: '20 px',
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        width: "100%",
        overflowX: 'hidden',
     
    },

    framei: {
        position: 'absolute',
        height: '100%',
        width: "94%",
        marginTop: '100 px',
        border: 'none',
        zoom: '100',
    }
}