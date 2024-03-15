import './css/App.css';
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className='container'>
      <header className='header'>
        <Header />
      </header>
      <section className='section'>
        <Outlet />
      </section>
    </div>
  )
}
