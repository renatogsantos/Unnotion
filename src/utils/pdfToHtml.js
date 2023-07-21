// utils/pdfToHtml.js
import pdfjsLib from 'pdfjs-dist';

async function convertPdfToHtml(pdfData) {
  const loadingTask = pdfjsLib.getDocument({ data: pdfData });
  const pdf = await loadingTask.promise;
  const totalPageNumber = pdf.numPages;

  let htmlContent = '';
  for (let pageNumber = 1; pageNumber <= totalPageNumber; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const canvas = document.createElement('canvas');
    const canvasContext = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderContext = {
      canvasContext,
      viewport,
    };
    const renderTask = page.render(renderContext);
    await renderTask.promise;
    htmlContent += `<div><img src="${canvas.toDataURL()}"></div>`;
  }

  return htmlContent;
}

export default convertPdfToHtml;
