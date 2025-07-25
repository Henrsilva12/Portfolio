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
        { id: '1', image: '/imagens/EatEating.png', title: 'EatEating', description:'Sistema para controlar entradas em refeitórios universitários'},
        { id: '2', image: '/imagens/Enviei.png', title: 'Portal de BSI', description: 'Portal educacional do curso superior do IF Baiano Campus Itapetinga'},
        { id: '3', image: '/imagens/Enviei.png', title: 'ReciclaITA', description: 'Sistema para gerenciamento de resíduos sólidos'},
        { id: '4', image: '/imagens/Enviei.png', title: 'Geni', description: 'Projetos como designer gráficos para um projeto do IF Baiano Campus Itapetinga'},
        { id: '5', image: '/imagens/Enviei.png', title: 'Doe+', description: 'Sistema de doações de alimentos para pessoas carentes'},
        { id: '6', image: '/imagens/Enviei.png', title: 'LabsIf', description: 'Site da empresa LabsIf'},
        { id: '7', image: '/imagens/Enviei.png', title: 'Zelo+', description: 'Aplicativo para auxiliar pessoas idosas em atividades do dia a dia'},
        { id: '8', image: '/imagens/Enviei.png', title: 'KeySafe', description: 'Aplicativo para gerenciamento de senhas'},
        { id: '9', image: '/imagens/Enviei.png', title: 'Enviei', description: 'Sistema de envio de e-mails em massa'},
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
        <div className="section_projects">
            <div className="project_Eat">
                <Swiper
                    slidesPerView={slidePerView}
                    pagination={{ clickable: true }}
                    navigation
                    className="custom-swiper"
                    spaceBetween={20}
                >
                    {slide.map( (item) => (
                        <SwiperSlide key={item.id} className={item.title === 'Doe+' ? 'doe-slide' : '' }>
                               
                                <div className="corousel-item">
                                    <img
                                        src={item.image}
                                        alt="Slider"
                                        className="d-block w-100 slide-item"
                                    />
                                    <a href={item.url} target="_blanck" rel="noopener noreferrer" className="text-link">
                                        
                                        <div className="carousel-caption">
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                    </a>    
                                </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;

