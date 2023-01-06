import React, {useState} from 'react'
import { Document, Page } from 'react-pdf'

import pdf from '../pdf/ClaudeShannonInformationTheoryPaper.pdf'

export const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
    setPageNumber(1);
  }

 

  return (
    <div>
      <Document 
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page number {1}
      </p>
    </div>
  );
}
