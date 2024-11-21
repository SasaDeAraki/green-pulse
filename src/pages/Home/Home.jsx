import React, { useState } from 'react';
import Topic from '../../components/Topic/Topic';
import bannerImg from '../../images/banner.png';
import './Home.css';
import separador from '../../images/separador.png';
import send from '../../images/send.png';
import 'material-icons/iconfont/material-icons.css';
import separador2 from '../../images/separador2.png';
import rArrow from '../../images/arrow-right.png';
import lArrow from '../../images/arrow-left.png';
import samuel from '../../images/samuel.png';
import larissa from '../../images/larissa.png';
import otavio from '../../images/otavio.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
    const [curretIndex, setCurrentIndex] = useState(0);

    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState({ show: false, message: '', type: '' });

    function isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSendEmail = () => {
        if (isEmailValid(email)) {
            setAlert({ show: true, message: 'Email cadastrado com sucesso! Logo um membro da nossa equipe de suporte o contatará.', type: 'success' });
        } else {
            setAlert({ show: true, message: 'Email inválido. Por favor, tente novamente.', type: 'danger' });
        }

        // Ocultar alerta após 5 segundos
        setTimeout(() => {
            setAlert({ show: false, message: '', type: '' });
        }, 5000);
    };

    const cards = [
        {
            imagem: samuel,
            cor: '#C8DAB5',
            nome: 'Samuel Batista Viana',
            texto: 'RM556566',
        },
        {
            imagem: larissa,
            cor: '#C8DAB5',
            nome: 'Larissa Queiroz Mattos Bosso',
            texto: 'RM556599',
        },
        {
            imagem: otavio,
            cor: '#C8DAB5',
            nome: 'Otávio Augusto Cimino Sampietro Uzal',
            texto: 'RM555007',
        },
    ];

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
    };

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
    };

    const { imagem, cor, nome, texto } = cards[curretIndex];

    return (
        <>
            {alert.show && (
                <div className={`alert alert-${alert.type} fixed-top text-center`} role="alert">
                    {alert.message}
                </div>
            )}

            <div
                className="banner-green"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '450px',
                    width: '100%',
                }}
            >
                <h2>Green Pulse</h2>
                <p>Caminhando rumo a um futuro mais verde</p>
            </div>
            <div className="container-pitch-vd">
                <div className="pitch-vd">
                    <iframe
                        width="700"
                        height="394"
                        src={
                            'https://www.youtube.com/embed/jce1DuNU9tI?si=ZfDuYv3PmQb0ecaU'
                        }
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={'Pitch Green Pulse'}
                    />
                </div>
                <div className="pitch-vd-texto">
                    <p>
                        Imagine um mundo onde cada passo que você dá contribui para um futuro mais
                        sustentável. No Green Pulse, tornamos isso possível com nossos pisos
                        geradores de energia inovadores. Integrando tecnologia de ponta e design
                        ecológico, nossos pisos capturam a energia cinética do movimento diário,
                        transformando-a em eletricidade limpa e renovável.
                    </p>
                    <button><a href='https://www.youtube.com/watch?v=jce1DuNU9tI'><div className='botao-pressao'><span>C</span><span>o</span><span>n</span><span>f</span><span>i</span><span>r</span><span>a</span></div></a></button>
                </div>
            </div>
            <div className="container-topics">
                <Topic
                    icon="check_circle"
                    titulo="Praticidade"
                    texto="Basta instalar o piso e conectar ao restante do sistema, todo o gerenciamento de energia será realizado pelo próprio dispositivo, que também possibilta alterações manuais."
                />
                <Topic
                    icon="battery_charging_full"
                    titulo="Desempenho"
                    texto="Capaz de gerar torno de 7w por cada passo, os nossos pisos são uma ferramenta eficiente na geração de energia verde."
                />
                <Topic
                    icon="description"
                    titulo="Geração de dados"
                    texto="Além da geração de energia, sensores internos do piso são capazes de detectar para onde o fluxo de pessoas está direcionado, e fazer o gerenciamento da energia de forma eficiente e automática."
                />
            </div>
            <div className="container-separador">
                <img src={separador} alt="Separador" />
            </div>
            <div className="container-contato">
                <div className="contato-titulo">
                    <h2>Ajude a fazer a diferença de forma sustentável</h2>
                </div>
                <p>Fale conosco</p>
                <div className="contato-input">
                    <input
                        placeholder="Insira seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <img src={send} alt="Enviar" onClick={handleSendEmail} />
                </div>
            </div>
            <div className="i-card">
                <div className="i-card-container" style={{ backgroundColor: cor }}>
                    <img
                        src={lArrow}
                        id="previous-button"
                        onClick={prevCard}
                        className="i-card-button"
                        alt="Anterior"
                    />
                    <div className="i-card-picture">
                        <img alt="Foto" src={imagem} />
                    </div>
                    <div className="i-card-content">
                        <h1>{nome}</h1>
                        <div className="i-card-titulo">
                            <img src={separador2} alt="Separador" className='separador' />
                            <h3>1º ano de engenharia de software</h3>
                        </div>
                        <div className="container-textocard">
                            <p className="textocard">{texto}</p>
                        </div>
                    </div>
                    <img
                        src={rArrow}
                        id="next-button"
                        onClick={nextCard}
                        className="i-card-button"
                        alt="Próximo"
                    />
                </div>
            </div>
        </>
    );
}
