import './App.css';
import Header from './Header.jsx'
import Section from './Section.jsx'

export default function App() {
  return (
    <div className='container'>
      <header className='header'>
        <Header />
      </header>
      <section className='section'>
        <Section />
      </section>
    </div>
  )
}
