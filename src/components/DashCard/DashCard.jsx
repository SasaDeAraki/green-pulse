import './DashCard.css'

export default function DashCard({titulo, sub, content}) {
    return(
        <>  
            <div className='dashcard'>
                <div className='texto'>
                    <h3>{titulo}</h3>
                    <p>{sub}</p>
                </div>
                <div className='valor'>
                    <h1>{content}</h1>
                </div>
            </div>
        </>
    );
}