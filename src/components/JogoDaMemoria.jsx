import { useEffect, useState } from "react";
import { LogicaJogoDaMemoriaProvider } from "../contexts/LogicaJogoDaMemoria";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";
import { Carta } from "./Carta";
import { Placar } from "./Placar";
import { Resultado } from "./Resultado";

export const JogoDaMemoria = () => {
  return (
    <LogicaJogoDaMemoriaProvider>
      <JogoDaMemoriaConteudo />
    </LogicaJogoDaMemoriaProvider>
  );
};

const JogoDaMemoriaConteudo = () => {
  const { cartas, iniciarJogo } = useJogoDaMemoria();
  const [showCelebration, setShowCelebration] = useState(true);

  useEffect(() => {
    iniciarJogo();

    // Oculta a celebração após 3 segundos
    const timeout = setTimeout(() => {
      setShowCelebration(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return showCelebration ? (
    <Celebration />
  ) : (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria__conteudo">
        <h1>Jogo da Memória</h1>
        <h5>Desenvolvido por Rafael Gomes</h5>
        <Placar />
        {cartas?.length === 0 ? (
          <p>Carregando cartas...</p>
        ) : (
          <div className="cartas">
            {cartas.map((props) => (
              <Carta key={props.id} {...props} />
            ))}
          </div>
        )}
      </div>
      <Resultado />
    </div>
  );
};

const Celebration = () => {
  return (
    <div className="celebration">
      <h1>🎉 Parabéns, Patricia! 🎈</h1>
      <div className="fireworks"></div>
      <div className="balloons"></div>
    </div>
  );
};
