const imagens = [
  "patricia01jpg",
  "patricia02.png",
  "patricia03.png",
  "patricia04.jpg",
  "patricia05.jpg",
  "patricia06.jpg",
];

const cartasUnicas = imagens.map((imagem, idDoPar) => ({ imagem, idDoPar }));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
  (props, id) => ({ ...props, id })
);
