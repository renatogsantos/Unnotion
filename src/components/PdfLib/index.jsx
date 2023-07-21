import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';

const PDFEditor = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfPage, setPdfPage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = async () => {
      const pdfBytes = new Uint8Array(fileReader.result);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      setPdfFile(pdfDoc);
      setPdfPage(pdfDoc.getPages()[0]);
    };

    fileReader.readAsArrayBuffer(file);
  };

  const addTextToPdf = async () => {
    const { x, y, size, color, text } = {
      x: 100,
      y: 100,
      size: 24,
      color: rgb(0, 0, 0),
      text: 'Hello from Next.js!',
    };

    if (!pdfPage) return;

    const helveticaFont = await pdfFile.embedFont('Helvetica');
    pdfPage.drawText(text, { x, y, size, color, font: helveticaFont });
    setPdfPage(pdfPage);
  };

  const savePdf = async () => {
    if (!pdfFile) return;

    const pdfBytes = await pdfFile.save();
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'edited-pdf.pdf';
    a.click();
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={addTextToPdf}>Add Text</button>
      <button onClick={savePdf}>Save PDF</button>
    </div>
  );
};

export default PDFEditor;
