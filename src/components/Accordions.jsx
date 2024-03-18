import '../css/Accordions.css'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion'

export default function Accordions() {
    return (
        <Accordion className='accordionContent'>
            <AccordionItem className='accordionContent__item'>
                <AccordionHeader>
                    <h1>Quem sou eu?</h1>
                </AccordionHeader>
                <AccordionBody>
                    <p>Eu me chamo Eliel Souza Ferreira e sou um estudante do curso desenvolvimento de sistemas no SENAI. Atualmente estou cursando o terceiro semestre a noite. Moro em Alagoinhas, Bahia.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader>
                    <h2>Tecnologias que eu uso</h2>
                </AccordionHeader>
                <AccordionBody>
                    <AccordionItem>
                        <AccordionHeader>
                            <h3>Linguagens de programação</h3>
                        </AccordionHeader>
                        <AccordionBody>
                            <p>C - Intermediário</p>
                            <p>Python - Básico</p>
                            <p>Javascript - Básico</p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader>
                            <h3>Frameworks</h3>
                        </AccordionHeader>
                        <AccordionBody>
                            <p>Node.js: Framework para criar o backend das aplicações.</p>
                            <p>React.js: Framework para cria o frontend SPA das aplicações.</p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader>
                            <h3>Banco de dados</h3>
                        </AccordionHeader>
                        <AccordionBody>
                            <p>MySQL: Banco de dados relacional.</p>
                        </AccordionBody>
                    </AccordionItem>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader>
                    <h1>Sobre este site</h1>
                </AccordionHeader>
                <AccordionBody>
                    <p>Este site foi feito totalmente em react, tanto o frontend como o backend, ele surgiu em decorrencia de um projeto, e foi modelado anteriormente no figma.</p>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    )
}