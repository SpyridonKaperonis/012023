/* eslint-disable jsx-a11y/anchor-is-valid */
import { getValue } from '@testing-library/user-event/dist/utils';
import React, {useState, useEffect} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'



import pdf_ from './pdf/claude.pdf'




export const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoomScale, setScale] = useState(2.6);
  const [pageInputValue, setpageInputValue] = useState();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function downloadPdf(url, filename){
    fetch(url, {method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer'})
    .then(res => res.blob())
    .then(res => {
      const element = document.createElement('a');
      element.setAttribute('download', filename);
      const href = URL.createObjectURL(res);
      element.href = href;
      element.setAttribute('target', '_blank');
      element.click();
      URL.revokeObjectURL(href);
    })
    
  }

  const MyPDF = () => {
  
    return(
      <>
      <Document  file={pdf_} onLoadSuccess={onDocumentLoadSuccess}>
        <Page scale={zoomScale} pageNumber={pageNumber} /> 
      </Document>
      </>
    )
  }

  return (
    <div style={styles.container}>
      <div style={styles.controlBar}>
        <div style={styles.subSections}>
          <a href={"javascript:void(0)"} 
            onClick={() => {setScale(zoomScale + 0.2)}} 
            style={styles.aRef}>+</a>
          <a href={"javascript:void(0)"} 
            onClick={() => {setScale(zoomScale - 0.2)}} 
            style={styles.aRef}>-</a>
        </div>
        <div style={styles.subSections}>
          <a href={"javascript:void(0)"}
            onClick={() => {
            if(pageNumber>1){
              setPageNumber(pageNumber -1)
            }
            
            }} style={styles.aRef}>Back</a>
          <p style={{
              fontSize: '2vh',
              marginRight: '2vh',
              marginLeft: '2vh',
              }}>
          {/* <input 
              style={styles.pageInput} 
              onChange={() => {setpageInputValue(pageInputValue)}}
              value={pageNumber}></input> */}
          {pageNumber} of {numPages}
        </p>
         <a href={"javascript:void(0)"} 
            onClick={() => {
              if(numPages>1){
                setPageNumber(pageNumber +1)}
              }} 
            style={styles.aRef}>Next</a>
        </div>
        <div style={styles.subSections}>
          <a href={"javascript:void(0)"} 
            onClick={() => {downloadPdf(pdf_, 'Spyridon_Kaperonis_Resume.pdf')}} style={styles.aRef}>Download</a>
        </div>
      </div>

      <div style={styles.pdfStyle}>
        <MyPDF/>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%', 
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alighItems: 'center',
  },

  controlBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    border: '0.2px solid black',
    padding: '0.2vh', 
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5'
  }, 
  subSections: {
    display: 'flex',
    flexDirection: 'row'
  },

  pageInput: {
    width: '4vh',
    fontSize: '2.5vh',
    marginLeft: '2vh',
    marginRight: '2vh',
    justifyContent: 'center',
  }, 

  aRef: {
    display: 'block',
    fontSize: '2.4vh',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '2vh',
    alighItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: 'white'
  },

  pdfStyle: {
    width: '100%', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alighItems: 'center',
    textAlign: 'center',
    // boxShadow: "1px 3px 1px #9E9E9E"
  },
  pdfStyle1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alighItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  }
}
