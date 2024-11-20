import './ProductCard.css'
import separador2 from '../../images/separador2.png'

export default function ProductCard({img, titulo, texto, icon}) {
    return(
        <>
            <div className='container-card'>
                <div className='card-img'>
                    <img className='card-banner' src={img}/>
                </div>
                <div className='card-content'>
                    <div className='card-title'>
                        <h3>{titulo}</h3>
                        <img className='card-separador2' src={separador2}/>
                        <i className='material-icons md-24'>{icon}</i>
                    </div>
                    <p>{texto}</p>
                </div>
            </div>
        </>
    )
}