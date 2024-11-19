import './About.css';
import holder from '../../images/holder.png';
import separador from '../../images/separador.png'
import separador2 from '../../images/separador2.png'
import { useState } from 'react';
import rArrow from '../../images/arrow-right.png'
import lArrow from '../../images/arrow-left.png'


export default function About() {
    const [curretIndex, setCurrentIndex] = useState(0)

    const cards = [
        {
            imagem: holder,
            cor: '#C8DAB5',
            nome: 'Samuel Batista Viana',
            texto: 'MACONHA PLAYS'
        },
        {
            imagem: holder,
            cor: '#C8DAB5',
            nome: 'BOLO',
            texto: 'Toa gap'
        }
    ]

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
    }

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
    }

    const {imagem, cor, nome, texto} = cards[curretIndex];

    return(
        <> 
            <div className="container-h1">
                <h1>Sobre nós</h1>
                <div className='h1-hr'>
                    <hr/>
                </div>
            </div>

            <div className='container-conteudo'>
                <div className='container-intro'>
                    <img src={holder}></img>
                    <p className='p-intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid hic possimus repellendus maiores, inventore distinctio a asperiores. Perferendis sint sunt architecto delectus error inventore quae culpa, facere eum! Quisquam, reiciendis maxime. Ducimus maxime eius dolor earum nesciunt id velit dolore laborum iste facere, necessitatibus aut neque voluptas dignissimos placeat officiis ad ullam nostrum. Sunt, sapiente. Dolores suscipit ullam ipsam saepe dicta ab expedita sapiente, veniam voluptatibus tempore et nam explicabo magnam nostrum consequuntur tempora esse libero dolorem, excepturi illo dignissimos veritatis eos voluptas. Nam, ex. Cum tempore eligendi ipsam magnam aperiam dolores, expedita ea ad, fuga odit voluptatem omnis obcaecati nobis aspernatur optio odio eius? Asperiores facilis expedita ipsa! A voluptatibus odio, exercitationem error nihil quod magni deserunt culpa eaque ipsa iusto! Ad vitae impedit exercitationem? Tempora magni provident corrupti aut, id animi nemo ad magnam aliquid, consequatur sit? Maiores nulla quaerat soluta quisquam corrupti ut amet ipsam eius quidem quod rem, perferendis, nisi nostrum eveniet architecto accusantium pariatur libero dolorum error modi cupiditate atque ad. Dolor totam cumque neque beatae alias fugit natus ipsum iste eligendi. Sequi deserunt atque perferendis vel culpa doloremque ad assumenda? Deleniti autem recusandae qui quod veritatis, neque, laboriosam doloremque ullam blanditiis consequuntur optio aperiam.</p>
                </div>
                <p className='p-conteudo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid hic possimus repellendus maiores, inventore distinctio a asperiores. Perferendis sint sunt architecto delectus error inventore quae culpa, facere eum! Quisquam, reiciendis maxime. Ducimus maxime eius dolor earum nesciunt id velit dolore laborum iste facere, necessitatibus aut neque voluptas dignissimos placeat officiis ad ullam nostrum. Sunt, sapiente. Dolores suscipit ullam ipsam saepe dicta ab expedita sapiente, veniam voluptatibus tempore et nam explicabo magnam nostrum consequuntur tempora esse libero dolorem, excepturi illo dignissimos veritatis eos voluptas. Nam, ex. Cum tempore eligendi ipsam magnam aperiam dolores, expedita ea ad, fuga odit voluptatem omnis obcaecati nobis aspernatur optio odio eius? Asperiores facilis expedita ipsa! A voluptatibus odio, exercitationem error nihil quod magni deserunt culpa eaque ipsa iusto! Ad vitae impedit exercitationem? Tempora magni provident corrupti aut, id animi nemo ad magnam aliquid, consequatur sit? Maiores nulla quaerat soluta quisquam corrupti ut amet ipsam eius quidem quod rem, perferendis, nisi nostrum eveniet architecto accusantium pariatur libero dolorum error modi cupiditate atque ad. Dolor totam cumque neque beatae alias fugit natus ipsum iste eligendi. Sequi deserunt atque perferendis vel culpa doloremque ad assumenda? Deleniti autem recusandae qui quod veritatis, neque, laboriosam doloremque ullam blanditiis consequuntur optio aperiam.</p>
            </div>
            <div className='container-separador'>
                <img src={separador}></img>
            </div>
            <div className="i-card">
                <div className="i-card-container" style={{backgroundColor: cor}}>
                    <img src={lArrow} id="previous-button" onClick={prevCard} className="i-card-button"></img>
                    <div className="i-card-picture">
                        <img alt="Foto" src={imagem}></img>
                    </div>
                    <div className="i-card-content">
                        <h1>{nome}</h1>
                        <div className='i-card-title'>
                            <div>
                                <img src={separador2}></img>
                            </div>
                            <h3>1º ano de engenharia de software</h3>
                        </div>
                        <p>{texto}</p>
                    </div>
                    <img src={rArrow} id="next-button" onClick={nextCard} className="i-card-button"></img>
                </div>
            </div>

        </>
    )
}