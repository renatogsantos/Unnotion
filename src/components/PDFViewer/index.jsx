import React, { useEffect, useState } from 'react';
import pdfjs from 'pdfjs-dist/legacy/build/pdf';

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(0);
  const [pagesData, setPagesData] = useState([]);

  useEffect(() => {
    // URL do PDF a ser exibido (substitua pela sua URL)
    const pdfUrl = '/sample.pdf';

    // Configura o caminho para o worker explicitamente
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    // Inicializa o PDF.js
    const loadingTask = pdfjs.getDocument(pdfUrl);
    loadingTask.promise.then((pdfDoc) => {
      setNumPages(pdfDoc.numPages);

      // Extrai cada página como imagem
      const pagesPromises = Array.from({ length: pdfDoc.numPages }, (_, index) =>
        pdfDoc.getPage(index + 1).then((page) => {
          const scale = 1.5;
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport,
          };

          return page.render(renderContext).promise.then(() => canvas.toDataURL());
        })
      );

      Promise.all(pagesPromises).then((pagesData) => {
        setPagesData(pagesData);
      });
    });
  }, []);

  return (
    <div>
      <h1>Visualizador de PDF</h1>
      {pagesData.map((pageData, index) => (
        <div key={`page_${index + 1}`}>
          <img src={pageData} alt={`Página ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PDFViewer;
