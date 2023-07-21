import React, { useRef, useEffect, useState } from 'react';

const TextEditor = () => {
  const canvasRef = useRef(null);
  const [boldSelected, setBoldSelected] = useState(false);
  const [editingText, setEditingText] = useState(false);
  const [text, setText] = useState('Texto de exemplo');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Definindo o tamanho do canvas para A4 (210 x 297 mm)
    canvas.width = 595; // 210 mm convertido para pixels a 96 dpi
    canvas.height = 842; // 297 mm convertido para pixels a 96 dpi

    // Função para desenhar o texto no canvas
    const drawText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '18px Arial';
      ctx.fillStyle = 'black';

      // Exemplo: texto na posição (50, 50)
      ctx.fillText(text, 10, 20);
    };

    drawText();
  }, [boldSelected, text]);

  const handleBoldClick = () => {
    setBoldSelected(!boldSelected);
  };

  const handleCanvasClick = () => {
    setEditingText(true);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <canvas ref={canvasRef} style={{ border: '1px solid #ccc',padding: "24px" }} onClick={handleCanvasClick}/>
      <button onClick={handleBoldClick}>B</button>
      {editingText && (
        <textarea
          value={text}
          onChange={handleTextChange}
          onBlur={() => setEditingText(false)}
          style={{
            opacity: ".5",
            position: 'absolute',
            top: '40px', // Ajuste a posição conforme necessário
            left: '40px', // Ajuste a posição conforme necessário
            fontSize: '18px',
            fontFamily: 'Arial',
            fontWeight: boldSelected ? 'bold' : 'normal',
            border: 'none',
            resize: 'none',
            overflow: 'hidden',
            outline: 'none',
            background: 'transparent',
          }}
        />
      )}
    </div>
  );
};

export default TextEditor;
