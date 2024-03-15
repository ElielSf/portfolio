import React, { useState, useEffect } from 'react';
import '../css/Slideshow.css'

export default function Slideshow() {
    const imagens = ['computer-coffee-floating.jpg','computer-program-coding-screen.jpg','html-system-website-concept.jpg'];
    const legendas = ['imagem-de-um-computador','imagem-de-html','imagem-de-varias-linguagens-e-tecnologias'];
    const [indiceAtual, setIndiceAtual] = useState(0);

    const proxSlide = () => {
        setIndiceAtual((indiceAtual) => (indiceAtual + 1) % imagens.length);
    };

    useEffect(() => {
        const intervalo = setInterval(proxSlide, 5000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <img className='slideShow__Content__Image' src={imagens[indiceAtual]} alt={legendas[indiceAtual]} />
    )
}