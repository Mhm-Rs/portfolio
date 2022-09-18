import { useEffect,useRef } from "react"
import "./intro.scss"
import {init } from 'ityped'

export default function Intro() {


    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings:["Front-End Developer","Designer","Programmer"]
        })
    },[])

    return (

        <div className="intro" id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src='assets/Mohaman.jpg' alt='me' />
                </div>
            </div>
            <div className='right'>
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Mohaman Rais</h1>
                    <h3>Junior <span ref={textRef}></span></h3>
                </div>
                <a href='#portfolio'>
                    <img src='assets/down.png' alt='' />
                </a>
            </div>
        </div>
    )
}