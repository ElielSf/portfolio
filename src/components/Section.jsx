import '../css/Section.css'
import Slideshow from './Slideshow.jsx'
import { Link } from 'react-router-dom'

export default function Section() {
    return (
        <div className='containerSection'>
            <div className='containerSection__Main'>
                <div className='containerSection__Main__Img'>
                    <Slideshow />
                </div>
                <div className='containerSection__Main__Text'>
                    <p className='containerSection__Main__Text__Paragraph'>“Criar soluções inovadoras para os problemas que surgem é o 
                    meu modo de contribuir para a indústria e 
                    a sociedade.”<br/><br/>- Eliel Souza
                    </p>
                </div>
                <div className='containerSection__Main__Button'>
                    <Link className='linkButton' to='/about'><button className='containerSection__Main__Button__Click'>Saiba Mais</button></Link>
                </div>
            </div>
        </div>
    )
}