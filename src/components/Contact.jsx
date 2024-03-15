import '../css/Contact.css'

export default function Contact() {

    const email = () => {
        window.location.href = "https://www.exemplo.com";
    }

    return (
        <div className='contentContact'>
            <div className='contentContact__Title'>
                <h2>Pode me contatar pelo:</h2>
            </div>
            <div className='contentContact__Email'>
            <button className='contentContact__Email_Link' onClick={email}><h2>EMAIL</h2>
                    <p>Elizyn</p></button>
            
                    
            </div>
            <div className='contentContact__Whatsapp'>
                b
            </div>
            <div className='contentContact__Github'>
                c
            </div>
        </div>
    )
}