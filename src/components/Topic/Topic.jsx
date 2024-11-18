import './Topic.css'

export default function Topic({icon, titulo, texto}) {
    return(
        <>
        <div className="container-topic">
            <div className='topic-image'>
                <img src={icon}/>
            </div>
            <div className='topic-text'>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
        </>
    )
}