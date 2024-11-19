import './About.css';
import img1 from '../../images/banner.png';
import separador from '../../images/separador.png'
export default function About() {
    return(
        <>
            <div className="container-h1">
                <h1>Sobre nós</h1>
            </div>

            <div className='container-intro'>
                <img src={img1}></img>
                <div className='paragrafo'><p className='p-intro'>asdiuahsduihadsuhasduadhsausdhaydgasgdaugsdyagduygasudgausgduasgdagsdagsduygaiudguyasgduagsudasdgaysuyiasguyiadgiuaygsduiagysduiyagsiudauisydgiuaysgdiagsdiuagdsiuygduagisudygiadsgiauysdguaygsdiuaygsdiuyagsiuydgaiusdgiauysgdiausydgiadgiudaudsyagdiuyag</p>
                </div>
                
            </div>

            <div className='container-conteudo'>
                <p className='p-conteudo'>asdiuahsduihadsuhasduadhsausdhaydgasgdaugsdyagduygasudgausgduasgdagsdagsduygaiudguyasgduagsudasdgaysuyiasguyiadgiuaygsduiagysduiyagsiudauisydgiuaysgdiagsdiuagdsiuygduagisudygiadsgiauysdguaygsdiuaygsdiuyagsiuydgaiusdgiauysgdiausydgiadgiudaudsyagdiuyag</p>
            </div>

            <div className='container-separador'>
                <img src={separador}></img>
            </div>

        </>
    )
}