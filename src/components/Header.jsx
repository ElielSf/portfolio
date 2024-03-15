import { Link } from 'react-router-dom'
import '../css/Header.css'

export default function Header() {
    return (
        <div className='containerHeader'>
            <div className='containerHeader__Home'>
                <Link to='/'><button onClick='/' className='containerHeader__Home__buttonHome'>Início</button></Link>
            </div>
            <div className='containerHeader__Contacts'>
                <Link to='/contact'><button onClick='/contact' className='containerHeader__Contacts__buttonContacts'>Contato</button></Link>
            </div>
            <div className='containerHeader__About'>
                <Link to='/about'><button className='containerHeader__About__buttonAbout'>Sobre</button></Link>
            </div>
        </div>
    )
}