import '../css/About.css'
import Accordions from './Accordions.jsx'

export default function About() {
    return (
        <div className='contentAbout'>
            <div className='contentAbout__imageDiv'>
                <img className='contentAbout__imageDiv__image'  src="imagem-minha.jpeg" alt="imagem-do-criador-do-site" />
            </div>
            <div className='contentAbout_accordions'>
                <Accordions />
            </div>
        </div>
    )
}