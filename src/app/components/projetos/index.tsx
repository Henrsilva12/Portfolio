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
        { id: '3', image: '/imagens/Enviei.png', url: 'https://www.figma.com/design/4vsABWc6YzGThVfMBhRK9Z/EmailService?node-id=1173-919&p=f&t=TvxhLmZGvjGeKWoF-0', title: 'E-mail Service', description: 'Aplicação para envio de e-mails transacionais'},
        { id: '4', image: '/imagens/Enviei.png', url: 'https://www.figma.com/design/4vsABWc6YzGThVfMBhRK9Z/EmailService?node-id=1173-919&p=f&t=TvxhLmZGvjGeKWoF-0', title: 'E-mail Service', description: 'Aplicação para envio de e-mails transacionais'},
        
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
                    spaceBetween={40}
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

