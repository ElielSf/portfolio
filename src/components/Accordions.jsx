import '../css/Accordions.css'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion'

export default function Accordions() {
    return (
        <Accordion className='accordionContent'>
            <AccordionItem className='accordionContent__item'>
                <AccordionHeader className='accordionContent__item__header'>
                    <h2 className='accordionContent__header__title'>Quem sou eu?</h2>
                </AccordionHeader>
                <AccordionBody className='accordionContent__item__body'>
                    <p className='accordionContent__body__text'>Eu me chamo Eliel Souza Ferreira e sou um estudante do curso desenvolvimento de sistemas no SENAI. Atualmente estou cursando o terceiro semestre a noite. Moro em Alagoinhas, Bahia.</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className='accordionContent__item'>
                <AccordionHeader className='accordionContent__item__header'>
                    <h2 className='accordionContent__header__title'>Tecnologias que eu uso</h2>
                </AccordionHeader>
                <AccordionBody className='accordionContent__item__body'>
                    <AccordionItem className='accordionContent__item'>
                        <AccordionHeader>
                            <h3>Linguagens de programação</h3>
                        </AccordionHeader>
                        <AccordionBody>
                            <p className='accordionContent__body__text'>C - Intermediário</p>
                            <p className='accordionContent__body__text'>Python - Básico</p>
                            <p className='accordionContent__body__text'>Javascript - Básico</p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader>
                            <h3>Frameworks</h3>
                        </AccordionHeader>
                        <AccordionBody>
                            <p className='accordionContent__body__text'>Node.js: Framework para criar o backend das aplicações.</p>
                            <p className='accordionContent__body__text'>React.js: Framework para criar o frontend SPA das aplicações.</p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader>
                            <h3>Banco de dados</h3>
                        </AccordionHeader>
                        <AccordionBody>
                            <p className='accordionContent__body__text'>MySQL: Banco de dados relacional.</p>
                        </AccordionBody>
                    </AccordionItem>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem className='accordionContent__item'>
                <AccordionHeader className='accordionContent__item__header'>
                    <h2 className='accordionContent__header__title'>Sobre este site</h2>
                </AccordionHeader>
                <AccordionBody className='accordionContent__item__body'>
                    <p className='accordionContent__body__text'>Este site foi feito totalmente em react, tanto o frontend como o backend, ele surgiu em decorrência de um projeto, e foi modelado anteriormente no figma.</p>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    )
}