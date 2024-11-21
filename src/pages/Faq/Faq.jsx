import React, { useState } from "react";
import './Faq.css';
import arrowDown from "../../images/arrow-down.png";

export default function FAQ() {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleAnswer = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    const questions = [
        { question: "O que é a Green Pulse?", answer: "A Green Pulse é uma empresa inovadora que desenvolve pisos sustentáveis que geram energia a partir da pressão aplicada sobre eles, além de trazer uma base de dados da movimentação do ambiente . Nosso objetivo é transformar o movimento humano em uma fonte de energia limpa, contribuindo para um futuro mais sustentável." },
        { question: "Como funcionam as plataformas?", answer: "Os pisos da Green Pulse funcionam com base na tecnologia de captação de energia cinética, que transforma a força gerada por movimentos, como passos, em energia elétrica. " },
        { question: "Quanto de energia geram a cada passo?", answer: "Torno de 7w a cada passo dado." },
        { question: "Quais são os impactos ambientais dos materiais usados no piso?", answer: "A Green Pulse utiliza materiais ecológicos e de baixo impacto ambiental para a fabricação dos pisos. Nosso compromisso é criar produtos sustentáveis que não só geram energia limpa, mas também têm um processo de produção consciente e responsável." },
        { question: "Quanto tempo duram os pisos Green Pulse", answer: "Os pisos são projetados para durar muitos anos, com materiais duráveis e resistentes. A vida útil pode variar de acordo com o ambiente de instalação e o nível de manutenção, mas geralmente a durabilidade é superior a 10 anos, mesmo em áreas de tráfego intenso." },
        { question: "Onde posso instalar os pisos Green Pulse?", answer: "Os pisos Green Pulse podem ser instalados em uma variedade de ambientes, incluindo áreas públicas de alto tráfego, academias, terminais de transporte e estádios." },
        { question: 'Como funciona a gestão de energia do produto?', answer: "Por meio de uma tecnologia que é capaz de detectar para onde as pessoas estão se movendo através da pressão de seus passos, nosso piso automatiza a quantidade de energia sendo enviada a cada setor de acordo com a densidade do tráfego se dirigindo àquele local para que a energia gerada seja utilizada da fora mais efetiva possível." },
    ];

    return (
        <div className="container" style={{ marginBottom: 110, marginTop: 80}}>
            {questions.map((item, index) => (
                <div 
                    key={index} 
                    className={`questions ${visibleIndex === index ? "expanded" : ""}`} 
                    onClick={() => toggleAnswer(index)}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{item.question}</span>
                        <img 
                            src={arrowDown}
                            alt="arrow-icon" 
                            className={`arrow-icon ${visibleIndex === index ? "open" : ""}`} 
                        />
                    </div>
                    <div className="answer">
                        {visibleIndex === index && item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
}
