// pages/pdf.js
import convertPdfToBase64 from '@/utils/convertPdfToBase64';
import convertPdfToHtml from '@/utils/pdfToHtml';
import React, { useEffect, useState } from 'react';

export default function PdfToHtml(){
  const [htmlContent, setHtmlContent] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    if (pdfFile) {
      const fetchPdf = async () => {
        try {
          const base64 = await convertPdfToBase64(pdfFile);
          const pdfBytes = base64ToArrayBuffer(base64);
          const html = await convertPdfToHtml(pdfBytes);
          setHtmlContent(html);
        } catch (error) {
          console.error('Erro ao converter o PDF em HTML:', error);
        }
      };

      fetchPdf();
    }
  }, [pdfFile]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
  };

  // Função para converter a string base64 em ArrayBuffer
  const base64ToArrayBuffer = (base64) => {
    const binaryString = window.atob(base64);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  };

  return (
    <div>
      <h1>Visualizador de PDF em HTML</h1>
      <input type="file" onChange={handleFileChange} />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};
