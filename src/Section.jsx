import './Section.css'

export default function Section() {
    return (
        <div className='containerSection'>
            <div className='containerSection__Main'>
                <div className='containerSection__Main__Img'></div>
                <div className='containerSection__Main__Text'>
                    <p className='containerSection__Main__Text__Paragraph'>                                 “Criar soluções inovadoras para os problemas que surgem é o 
                    meu modo de contribuir para a indústria e 
                    a sociedade.”<br/><br/>- Eliel Souza
                    </p>
                </div>
                <div className='containerSection__Main__Button'>
                    <h5>Saiba Mais</h5>
                </div>
            </div>
        </div>
    )
}