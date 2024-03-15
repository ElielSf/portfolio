import '../css/Contact.css'
import Github from './Github.jsx'
import Email from './Email.jsx'
import Whatsapp from './Whatsapp.jsx'

export default function Contact() {
    return (
        <div className='contentContact'>
            <div className='contentContact__Title'>
                <h2>Pode me contatar pelo:</h2>
            </div>
            <div className='contentContact__Email'>
                <Email />
            </div>
            <div className='contentContact__Whatsapp'>
                <Whatsapp />
            </div>
            <div className='contentContact__Github'>
                <Github />
            </div>
        </div>
    )
}