"use client";
import React from "react";
import jsPDF from "jspdf";

export default function PDFGenerator() {
  const doc = new jsPDF();

  const generatePDF = () => {
    doc.text("Hello, this is a sample PDF generated using jsPDF!", 10, 10);
    doc.save("sample.pdf");
  };
  
  const insertText = (text) => {
    let texto = `${text}`;
    doc.text(texto, 10, 20);
  };

  return (
    <div>
      <h1>PDF</h1>

      <button type="button" onClick={insertText("teste de inserir texto")}>
        inserir
      </button>
      <button type="button" onClick={generatePDF}>
        Salvar PDF
      </button>
    </div>
  );
}
