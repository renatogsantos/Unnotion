import React, { useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const canvasRefs = useRef([]);

  const handlePdfInputChange = (file) => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const pdfData = e.target.result;
        renderPdf(pdfData);
      };
      fileReader.readAsArrayBuffer(file);
    }
  };

  const renderPdf = (pdfData) => {
    const viewer = document.getElementById("pdfViewer");
    viewer.innerHTML = ""; // Clear previous content

    const loadingTask = pdfjs.getDocument({ data: pdfData });
    loadingTask.promise.then((pdf) => {
      for (let i = 1; i <= pdf.numPages; i++) {
        const canvas = document.createElement("canvas");
        canvas.style.marginBottom = "16px"; // Add some margin between pages
        viewer.appendChild(canvas);
        canvasRefs.current[i] = canvas;

        const page = pdf.getPage(i);
        page.then((page) => {
          const scale = 1.5;
          const viewport = page.getViewport({ scale });
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          const context = canvas.getContext("2d");
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          page.render(renderContext);
        });
      }
    });
  };

  return (
    <div>
      <FilePond
        allowFileTypeValidation
        acceptedFileTypes={["application/pdf"]}
        onupdatefiles={(fileItems) => {
          if (fileItems.length > 0) {
            const file = fileItems[0].file;
            handlePdfInputChange(file);
          }
        }}
      />
      <input
        type="file"
        name=""
        id=""
        onChange={(fileItems) => {
          if (fileItems.length > 0) {
            const file = fileItems[0].file;
            handlePdfInputChange(file);
          }
        }}
      />

      <div
        id="pdfViewer"
        style={{ display: "flex", flexDirection: "column" }}
      ></div>
    </div>
  );
};

export default PdfViewer;
