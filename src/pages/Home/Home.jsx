import Topic from '../../components/Topic/Topic';
import bannerImg from '../../images/banner.png'
import holder from '../../images/holder.png'
import './Home.css'
import separador from '../../images/separador.png'
import send from '../../images/send.png'

export default function Home() {
    return (
        <>
            <div className="banner-green" style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '450px',
                width: '100%'
                }}>
                <h2>Green Pulse</h2>
                <p>Caminhando rumo a um futuro mais verde</p>
            </div>
            <div className='container-topics'>
                <Topic icon={holder} titulo='Teste' texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus dolores exercitationem quas molestias adipisci.'/>
                <Topic icon={holder} titulo='Teste2' texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus dolores exercitationem quas molestias adipisci.'/>
                <Topic icon={holder} titulo='Teste3' texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus dolores exercitationem quas molestias adipisci.'/>
            </div>
            <div className='container-pitch-vd'>
                <div className='pitch-vd'>
                    <iframe
                        width='700'
                        height='394'
                        src={'https://www.youtube.com/embed/itohMQ48bMk?si=vb3jQxkhTNkVA7dZ'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={'Pitch Green Pulse'}
                    />
                </div>
                <div className='pitch-vd-texto'>
                    <h3>Vídeo Pitch</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit vero cum perferendis nam. At perferendis ducimus sed? Impedit accusamus eligendi harum natus nostrum nesciunt ex. Magni sunt aut illum?</p>
                    <button><a href='https://www.youtube.com/watch?v=itohMQ48bMk'><div className='botao-pressao'><span>C</span><span>o</span><span>n</span><span>f</span><span>i</span><span>r</span><span>a</span></div></a></button>
                </div>
            </div>
            <div className='container-separador'>
                <img src={separador}></img>
            </div>
            <div className='container-contato'>
                <div className='contato-titulo'>
                    <h2>Ajude a fazer a diferença de forma sustentável</h2>
                </div>
                <p>Fale conosco</p>
                <div className='contato-input'>
                    <input placeholder='insira seu email'></input><img src={send}></img>    
                </div>
            </div>
        </>
    );
}
