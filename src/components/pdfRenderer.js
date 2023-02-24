import React from 'react'
import pdf_ from '../pdf/Spyridon_Kaperonis_Resume.pdf';


export const PdfRenderer = () => {

  return (

    <iframe style={styles.framei} title='SpyridonKaperonisResume' src={pdf_}></iframe>
    
  )
}

const styles = {
    framei: {
        
      height: '100%',
      width: 'auto',
      marginTop: '100 px',
      border: 'none',
      zoom: '100',
    }
}