import './css/App.css';
import Header from './components/Header.jsx'
import Section from './components/Section.jsx'

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
