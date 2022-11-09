//page de contact (4e page)

import { useState } from "react";
import "./contact.scss"

export default function Contact() {

    const [message,setMessage] =  useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(true)
    }
    return (
        
        <div className="contact" id='contact'>
            <div className='left'>
                <img src='assets/shake.svg' alt='shake' />
                </div>
            <div className='right'>
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder="Email" required/>
                    <textarea placeholder="Message" required></textarea>
                    <button type='submit'>Send <i className="fa-solid fa-paper-plane"></i></button>
                    {message && <span>Thanks for your message! I'll reply ASAP <i className="fa-solid fa-face-grin-wide"></i></span> }
                </form>
            </div>
        </div>
    )
}