import '../css/Cards.css'
import { Link } from 'react-router-dom'

export default function Whatsapp() {
    return (
        <Link className='linkCards' to='https://wa.me/55759330089537'>
            <div className='cardWhatsapp'>
                <h1 className='cardWhatsapp__title'>Whatsapp</h1>
                <p className='cardWhatsapp__text'>Eliel Souza<br/></p>
            </div>
        </Link>
    )
}