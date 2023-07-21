// Função para aplicar estilo negrito ao texto selecionado
export function toggleBold() {
  document.execCommand('bold', false, null);
}

// Função para aplicar estilo itálico ao texto selecionado
export function toggleItalic() {
  document.execCommand('italic', false, null);
}

// Função para aplicar estilo sublinhado ao texto selecionado
export function toggleUnderline() {
  document.execCommand('underline', false, null);
}

// Função para aplicar estilo sobrescrito ao texto selecionado
export function toggleSuperscript() {
  document.execCommand('superscript', false, null);
}

// Função para aplicar estilo subscrito ao texto selecionado
export function toggleSubscript() {
  document.execCommand('subscript', false, null);
}

// Função para aplicar fonte monoespaçada ao texto selecionado
export function toggleMonospace() {
  document.execCommand('styleWithCSS', false, true);
  document.execCommand('fontName', false, 'Courier New');
}

// Função para alterar o tipo de bloco do texto selecionado (h1, h2, h3, h4, h5, h6, p)
export function changeBlockType(blockType) {
  document.execCommand('formatBlock', false, blockType);
}

// Função para alterar o tamanho da fonte do texto selecionado
export function changeFontSize(size) {
  document.execCommand('fontSize', false, size);
}

// Função para alterar a família de fonte do texto selecionado
export function changeFontFamily(fontFamily) {
  document.execCommand('fontName', false, fontFamily);
}
