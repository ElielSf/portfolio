import '../css/Header.css'

export default function Header() {
    return (
        <div className='containerHeader'>
            <div className='containerHeader__Home'>
                <button className='containerHeader__Home__buttonHome'>Início</button>
            </div>
            <div className='containerHeader__Contacts'>
                <button className='containerHeader__Contacts__buttonContacts'>Contato</button>
            </div>
            <div className='containerHeader__About'>
                <button className='containerHeader__About__buttonAbout'>Sobre</button>
            </div>
        </div>
    )
}