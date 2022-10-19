import "./Resume.scss";
import { Document, Page } from "react-pdf";
import React, { useState } from "react";

export default function ResumeSVG() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume">
      <div>
        <Document file="./David.Johnston.Jr.Software.Engineer.Resume.pdf">
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}
