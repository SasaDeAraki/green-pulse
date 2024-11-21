import './About.css';
import sobre1 from '../../images/sobre1.jpg';
import sobre2 from '../../images/sobre2.jpg';
import sobre3 from '../../images/sobre3.jpg';

export default function About() {
    return (
        <>
            <div className="container-h1">
                <h1>Sobre nós</h1>
                <div className='h1-hr'>
                    <hr />
                </div>
            </div>

            <div className='container-conteudo'>
                <div className='container-intro'>
                    <img src={sobre1}></img>
                    <img src={sobre2}></img>
                    <img src={sobre3}></img>
                </div>
                <p className='p-conteudo'>Na Green Pulse, acreditamos que o futuro sustentável começa com pequenas inovações que transformam o cotidiano. Somos uma equipe de desenvolvedores apaixonados, movidos pelo desejo de tornar a energia verde uma realidade acessível e prática para todos.
                Nosso compromisso é criar soluções tecnológicas que integrem sustentabilidade e funcionalidade, ajudando a construir um mundo onde cada gesto, por menor que seja, contribua para um amanhã mais limpo e consciente.
                Com um olhar voltado para o impacto positivo e uma vontade incansável de inovar, trabalhamos para trazer a energia renovável ao alcance de todos, unindo ciência, tecnologia e propósito. Venha conosco nessa jornada pela transformação verde!</p>
            </div>
        </>
    )
}