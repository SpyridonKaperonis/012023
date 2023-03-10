/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { PdfRenderer } from '../components/pdfRenderer';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
// import { getValue } from '@testing-library/user-event/dist/utils';





export const Resume = () => {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // // const [zoomScale, setScale] = useState(2.3);
  // // const [pageInputValue, setpageInputValue] = useState();
  // // const [plusButton, setPlusButton] = useState(false);
  // // const [minusButton, setMinutButton] = useState(false);
  // const [nextButton, setNextButton] = useState(false);
  // const [backButton, setBackButton] = useState(false);
  // // const [downloadButton, setDownloadButton] = useState(false);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  // function nextPage(){
  //   if(numPages>1){
  //     setPageNumber(pageNumber +1)
  //   }
  //   setNextButton(!nextButton)
  //   setTimeout(() => {
  //     setNextButton(false)
  //     }, 400)
  // }

  // function previousPage(){
  //   if(numPages>1){
  //     setBackButton(!backButton)
  //   }
  //   setBackButton(!backButton)
  //   setTimeout(() => {
  //     setBackButton(false)
  //   }, 400)
  // }

  // function downloadPdf(url, filename){
  //   fetch(url, {method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer'})
  //   .then(res => res.blob())
  //   .then(res => {
  //     const element = document.createElement('a');
  //     element.setAttribute('download', filename);
  //     const href = URL.createObjectURL(res);
  //     element.href = href;
  //     element.setAttribute('target', '_blank');
  //     element.click();
  //     URL.revokeObjectURL(href);
  //   })
    
  // }
  const RenderResume = () => {

    return (

        <a style={styles.resumeA} href={'/resume/SpyridonKaperonis'} target="_self" rel='noreferrer' >RESUME</a>        


    )
  }

  // const ViewerPDF = () => {

  //   const [page, setPage] = useState(1);
  //   const canvasRef = useRef(null);

  //   const { pdfDocument, pdfPage } = usePdf({
  //     file: './pdf/Spyridon_Kaperonis_Resume_Simple.pdf',
  //     page,
  //     canvasRef
  //   });
  

  //   return (
  
  //       <div>
  //         {!pdfDocument && <span>Loading...</span>}
  //         <canvas ref={canvasRef} />
          
  //       </div>
  //     );
  //   }

  // const MyPDF = () => {
  
  //   return(
  //     <>
  //     <Document 
  //       file={pdf_}
  //       renderMode={"canvas"}
  //       externalLinkRel={"_self"}
  //       options={{ workerSrc: "/pdf.worker.js" }} 
  //       onLoadSuccess={onDocumentLoadSuccess}
  //       onItemClick={({ dest, pageIndex, pageNumber }) => alert('Clicked an item from page ' + pageNumber + '!')}
  //       >
  //       <Page
       
  //         scale={zoomScale} 
  //         pageNumber={pageNumber}
  //         devicePixelRatio={1}
  //         renderTextLayer={false}
  //         /> 
  //     </Document>
  //     </>
  //   )
  // }

  return (
    <div style={styles.container}>
     {/* <RenderResume/> */}
     <PdfRenderer/>
    </div>
    // <div style={styles.container}>
    //   <div style={styles.controlBar}>
    //     <div style={styles.subSections}>
    //       <div  
    //         onClick={() => {

    //           if (zoomScale + 0.2 > 2.5){
    //             console.log('ZoomScale exceeds 2.5')
    //           }
    //           else{
    //             setScale(zoomScale + 0.2)
    //           }
              
    //           setPlusButton(!plusButton)
    //           setTimeout(() => {
    //             setPlusButton(false)
    //           }, 400)}} 
    //         style={{...styles.aRef, backgroundColor: plusButton ? '#ffbd03' : 'white'}}>+</div>


    //       <div
    //         onClick={() => {
    //           setScale(zoomScale - 0.2)
    //           setMinutButton(!minusButton)
    //           setTimeout(() => {
    //             setMinutButton(false)
    //           }, 400)}} 
    //         style={{...styles.aRef, backgroundColor: minusButton ? '#ffbd03' : 'white', marginLeft: '0.6vh'}}>-</div>
        
    //     </div>

    //     <div style={styles.subSections}>
    //       {/* <div 
    //         onClick={() => {
    //           previousPage()
            
    //         }} style={{...styles.aRef, backgroundColor: backButton ? '#ffbd03' : 'white'}}>{'<'}</div>
    //       <p style={{
    //           fontSize: '2vh',
    //           marginRight: '2vh',
    //           marginLeft: '2vh',
    //           }}>

    //       {pageNumber} of {numPages}
    //     </p>

    //      <div
    //         onClick={() => {
    //           nextPage()
    //           }
            
    //         } 
    //         style={{...styles.aRef, backgroundColor: nextButton ? '#ffbd03' : 'white'}}>{'>'}</div> */}
    //     </div>
    //     <div style={styles.subSections}>
    //       <a href={pdf_}>Click me</a>
    //       <a href={"javascript:void(0)"} 
    //         onClick={() => {
    //           setDownloadButton(!downloadButton);
    //           setTimeout(() => {
    //             setDownloadButton(false);
    //           }, 900)
    //           downloadPdf(pdf_, 'Spyridon_Kaperonis_Resume.pdf')
              
    //           }} style={{...styles.aRef, backgroundColor: downloadButton ? '#ffbd03' : 'white'}}>Download</a>
    //     </div>
    //   </div>

    //   <div style={styles.pdfStyle}>
    //     {/* <ViewerPDF/> */}
    //     <MyPDF />
    //     <p>
    //       Page {pageNumber} of {numPages}
    //     </p>
    //   </div>
    // </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alighItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    height: '100%',
   
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alighItems: 'center',
  },

  // resumeA: {
  //   alignSelf:'center',
  //   textDecoration: 'none',
  //   fontWeight: 'bold',
  //   fontSize: '2.5vh',
  //   padding: '10vh',
  //   backgroundColor: '#52AB98',
  //   cursor: 'pointer',
  //   color: 'black',
  // },

  // controlBar: {
  //   display: 'flex',
  //   flexDirection: 'row',

  //   width: '80vw',
  //   height: '6vh',
  //   border: '0.2px solid black',
  //   padding: '0.2vh', 
  //   justifyContent: 'space-between',
  //   backgroundColor: '#f5f5f5'
  // }, 
  // subSections: {
  //   display: 'flex',
  //   flexDirection: 'row'
  // },

  // pageInput: {
  //   width: '4vh',
  //   fontSize: '2.5vh',
  //   marginLeft: '2vh',
  //   marginRight: '2vh',
  //   justifyContent: 'center',
  // }, 

  // aRef: {
  //   display: 'block',
  //   fontSize: '2.4vh',
  //   fontWeight: 'bold',
  //   textDecoration: 'none',
  //   padding: '2vh',
  //   alighItems: 'center',
  //   justifyContent: 'center',
  //   color: 'black',
  //   backgroundColor: 'white',
  //   cursor: 'pointer',
  // },

  // pdfStyle: {
  //   width: '100%', 
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alighItems: 'center',
  //   textAlign: 'center',
  //   // boxShadow: "1px 3px 1px #9E9E9E"
  // },
  // pdfStyle1: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alighItems: 'center',
  //   textAlign: 'center',
  //   alignSelf: 'center',
  // }, 
  // pdfStyleNew:{
  //   background: 'linear-gradient(75deg, #3B43F2, #3B8CF2)', 
  //   webkitBackgroundClip: 'text',
  // },

  
}


export default React.memo(Resume.MyPDF)