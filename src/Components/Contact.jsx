import React from 'react';

function Contact() {
    return (
        <div id='contact'>
            <h1>FALE CONOSCO</h1>
            <form>
                <input type="text" placeholder='Nome Completo' required />
                <input type="email" placeholder='Digite seu E-Mail' required />
                <textarea name="message" placeholder='Digite Sua Mensagem...'></textarea>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Contact;