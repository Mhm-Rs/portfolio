//projets dans la 3e page

import { useState } from 'react';
import './works.scss'
import { worksData } from '../../data';
export default function Works() {
    //connaitre slide actuelle
    const [currentSlide, setCurrentSlide] = useState(0)

    //incrémenter ou décrémenter currentslide selon si on a appuyé sur flèche gauche ou droite
    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : worksData.length - 1) :
            setCurrentSlide(currentSlide < worksData.length - 1 ? currentSlide + 1 : 0)
    }
    return (

        <div className="works" id='works'>
            <div
                className='slider'
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }} //on affiche une différente slide en fonction de currentslide
            >
                {worksData.map(item => (
                    <div className="container">
                        <div className='item'>
                            <div className="left">
                                <div className='leftContainer'>
                                    <div className='imgContainer'>
                                        <img
                                            src={item.icon}
                                            alt='proj'
                                        />
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className='right'>
                                <a href={item.github}>
                                    <img
                                        src={item.img}
                                        alt='title'

                                    />
                                </a>
                            </div>
                        </div>
                    </div>))}
            </div>
            <img
                src='assets/arrow.png'
                className="arrow left"
                alt="arrleft"
                onClick={() => handleClick("left")} />
            <img
                src='assets/arrow.png'
                className="arrow right"
                alt="arright"
                onClick={() => handleClick("right")}
            />
        </div>
    )
}