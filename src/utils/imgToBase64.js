export function fileToBase64(img) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result;
      resolve(base64String);
    };

    reader.onerror = () => {
      reject(new Error('Erro ao ler o arquivo.'));
    };

    reader.readAsDataURL(img);
  });
}
