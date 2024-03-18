import '../css/Cards.css'
import { Link } from 'react-router-dom'

export default function Github() {
    return (
        <Link className='linkCards' to='https://github.com/ElielSf/portfolio'>
            <div className='cardGithub'>
                <h1 className='cardGithub__title'>GitHub</h1>
                <p className='cardGithub__text'>ElielSf<br/></p>
            </div>
        </Link>
    )
}