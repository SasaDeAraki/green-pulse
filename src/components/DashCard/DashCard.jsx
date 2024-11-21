import './DashCard.css'

export default function DashCard() {
    return(
        <>  
            <div className='dashcard'>
                <div className='texto'>
                    <h3>Título</h3>
                    <p>sub-título</p>
                </div>
                <div className='valor'>
                    <h1>300K</h1>
                </div>
            </div>
        </>
    );
}