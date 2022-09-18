import { useState } from 'react';
import './works.scss'

export default function Works() {

    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon:'assets/gamepad.png',
            title: "Who Wants To Be A Millionnaire App",
            desc:
                "A quizz app based on the \"Who Wants To Be A Millionnaire\" TV game. Made with React. ",
            img:
                "assets/quizz.png",
        },
        {
            id: "2",
            icon: "./assets/gamepad.png",
            title: "Tenzies Dice Game",
            desc:
                "A dice game. The goal is to roll all dice until all values are the same. Made with React.",
            img:
                "assets/tenzies.png",
        },
        {
            id: "3",
            icon: "./assets/globe.png",
            title: "React Portfolio",
            desc:
                "A regularly-updated, dynamic portfolio made to show my projects. Made with React.",
            img:
                "assets/portfolio.png",
        },
        {
            id: "4",
            icon: "./assets/travel.png",
            title: "Travel Journal",
            desc:
                "A dynamic website which shows travel destinations and their descriptions. Made with React.",
            img:
                "assets/traveljournal.png",
        },
    ];


    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length-1) :
            setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)
    }
    return (

        <div className="works" id='works'>
            <div
                className='slider'
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
               
            >
                {data.map(item => (
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
                                <img
                                    src={item.img}
                                    alt='title'
                                    
                                />
                            </div>
                        </div>
                    </div>))}
            </div>
            <img
                src='assets/arrow.png'
                className="arrow left"
                alt="arrleft"
                onClick={()=>handleClick("left")}            />
            <img
                src='assets/arrow.png'
                className="arrow right"
                alt="arright"
                onClick={() => handleClick()} 
            />
        </div>
    )
}