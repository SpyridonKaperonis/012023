import React, {useState, useEffect} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { ResumeControlBarButton } from '../components/resumeControlBarButton';

import pdf_ from './pdf/ClaudeShannonInformationTheoryPaper.pdf'

export const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={styles.container}>
      <div style={styles.controlBar}>
        <div style={styles.subSections}>
          <ResumeControlBarButton name='+' />
          <ResumeControlBarButton addStyle={{marginLeft: '1vh'}} name='-' />
        </div>
        <div style={styles.subSections}>
          <ResumeControlBarButton name='Back' />
        <p style={{
            fontSize: '2vh',
            marginRight: '2vh',
            }}>
          <input style={styles.pageInput}></input>
          of {numPages}
        </p>
         <ResumeControlBarButton name='Next' />
        </div>
        <div style={styles.subSections}>
          <ResumeControlBarButton name='Download' />
        </div>
      </div>
      <div>
      <Document file={pdf_} onLoadSuccess={onDocumentLoadSuccess}>
        <Page scale={2.7} pageNumber={pageNumber} />
      </Document>
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
    height: '100%'
  },

  controlBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    border: '0.2px solid black',
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
  }
}
