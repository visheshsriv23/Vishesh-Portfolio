import React from 'react'
import { useState } from 'react';
import WindowWrapper from "#hoc/WindowWrapper.jsx"
import WindowControls from "#components/WindowControls.jsx"
import { Download } from 'lucide-react'
import { pdfjs, Document, Page } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {

  	const [numPages, setNumPages] = useState(null);
	function onDocumentLoadSuccess({ numPages }) {
	    setNumPages(numPages);
	  }
	return (
    <>
      <div id="window-header" className="flex items-center justify-between p-3 bg-[#2c2c2e] border-b border-white/5">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a href="/files/resume.pdf" download className="cursor-pointer" title="Download Resume">
          <Download className="icon" />
        </a>
      </div>
      <div className="flex-1 overflow-auto p-6 flex justify-center items-start">
        <Document 
          file="/files/resume.pdf" 
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-row gap-6 justify-center items-start"
        >
          <div className="shadow-xl rounded-sm overflow-hidden bg-white shrink-0">
            <Page 
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              scale={0.75} // Scale down slightly so both pages fit without vertical clipping
            />
          </div>

          <div className="shadow-xl rounded-sm overflow-hidden bg-white shrink-0">
            <Page 
              pageNumber={2}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              scale={0.75}
            />
          </div>
        </Document>
      </div>
    </>
  );
}
const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow;