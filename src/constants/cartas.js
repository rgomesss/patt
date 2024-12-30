const imagens = [
  "patricia01.jpg",
  "patricia02.png",
  "patricia03.png",
  "patricia13.png",
  "patricia05.jpg",
  "patricia06.jpg",
];

const cartasUnicas = imagens.map((imagem, idDoPar) => ({ imagem, idDoPar }));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
  (props, id) => ({ ...props, id })
);
