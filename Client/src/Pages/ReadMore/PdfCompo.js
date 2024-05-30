import React from "react";
import { Document, Page } from "react-pdf";

const PdfComp = ({ pdfUrl }) => {
  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadError={(error) => console.error("Error loading PDF:", error)}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfComp;
