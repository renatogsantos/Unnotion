import html2pdf from "html2pdf.js";

export const convertToPdf = async (divId, fileName) => {
  const element = document.getElementById(divId);
  if (!element) {
    console.error(`Elemento com o ID "${divId}" não encontrado.`);
    return null;
  }

  const opt = {
    filename:     fileName,
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  try {
    const pdf = await html2pdf().set(opt).from(element).save();
    return pdf;
  } catch (error) {
    console.error('Erro ao converter para PDF:', error);
    return null;
  }
};