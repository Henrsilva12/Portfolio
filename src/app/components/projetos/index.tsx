/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./styles.css";

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = () => {
    const [slidePerView, setSlidePerView] = useState(2)
    const slide = [
        { id: '1', image: '/imagens/EatEating.png', url: 'https://www.figma.com/design/7MhynJQsYgvsyAAF9OrSMJ/EatEating?node-id=238-1718&p=f&t=TvxhLmZGvjGeKWoF-0', title: 'EatEating', description:'Sistema para controlar entradas em refeitórios universitários'},
        { id: '2', image: '/imagens/Enviei.png', url: 'https://www.figma.com/design/4vsABWc6YzGThVfMBhRK9Z/EmailService?node-id=1173-919&p=f&t=TvxhLmZGvjGeKWoF-0', title: 'E-mail Service', description: 'Aplicação para envio de e-mails transacionais'},
        { id: '3', image: '/imagens/KeySafe.png', url: 'https://www.figma.com/design/KaEllRGbIjSJkzjTyANa3V/Desenvolvimento-Mobile?node-id=0-1&t=DS8DaOSZ0OdahLYh-1', title: 'KeySafe', description: 'Gerenciador de senhas mobile com segurança avançada'},
        { id: '4', image: '/imagens/Doe+.png', url: 'https://www.figma.com/design/mITxJzKIUyKd4E2JEa1bCu/PCE-2?node-id=722-3221&t=9HqXkY6NJLpszeFy-1', title: 'Doe+', description: 'Aplicativo de doações para instituições sem fins lucrativos'},
        { id: '5', image: '/imagens/Poster.png', url: 'https://www.figma.com/design/EQv7ACTqoMs52VlvqPgQ0f/Freelas?node-id=0-1&t=AAbJxlqNSk9vr7iY-1', title: 'Poster Design', description: 'Design de pôsteres e material gráfico'},
    ]

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(1);
            }else{
                setSlidePerView(2);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div id="projects" className="section_projects">
            <div className="project_Eat">
                <Swiper
                    slidesPerView={slidePerView}
                    pagination={{ clickable: true }}
                    navigation
                    className="custom-swiper"
                    spaceBetween={10}
                >
                    {slide.map( (item) => (
                        <SwiperSlide key={item.id} className={item.title === 'Doe+' ? 'doe-slide' : '' }>
                        <div className="slide-content">
                        <img
                            src={item.image}
                            alt="Slider"
                            className="slide-item"
                        />
                        <div className="slide-info">
                            <h2>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.title}
                                </a>
                            </h2>
                            <p>{item.description}</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;

