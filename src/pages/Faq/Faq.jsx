import React, { useState } from "react";
import './Faq.css';
import arrowDown from "../../images/arrow-down.png";

export default function FAQ() {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleAnswer = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    const questions = [
        { question: "O que é a Green Pulse?", answer: "É uma empresa" },
        { question: "Como funcionam as plataformas?", answer: "Funcionando" },
        { question: "Quanto de energia geram a cada passo?", answer: "muita" },
        { question: "Quais são os impactos ambientais dos materiais usados no piso?", answer: "varios" },
        { question: "Quanto tempo duram os pisos Green Pulse", answer: "pouco tempo" },
        { question: "Onde posso instalar os pissos Green Pulse?", answer: "menos na calçada" },
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
