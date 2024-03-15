import '../css/Cards.css'
import { Link } from 'react-router-dom'

export default function Email() {
    return (
        <Link className='linkCards' to='mailto:elielsf13@gmail.com?'>
            <div className='cardEmail'>
                <h1 className='cardEmail__title'>Email</h1>
                <p className='cardEmail__text'>elielsf13@gmail.com<br/></p>
            </div>
        </Link>
    )
}