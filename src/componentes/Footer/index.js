import './Footer.css'

const Footer = () => {
    return(
        <footer className='footer'>
            <div class="info">
                <a class="info__link" href="https://www.linkedin.com/in/camila-tokubo/" rel='noreferrer' target="_blank">
                    <img src="./imagens/icone-linkedin.svg" alt="ícone da logo do Linkedin"/>
                </a>
                <a class="info__link" href="https://github.com/CamilaSah" rel='noreferrer' target="_blank">
                    <img src="./imagens/icone-github.svg" alt="ícone da logo do Github"/>
                </a>
                <a class="info__link" href="mailto:tokubo.camila@gmail.com">
                    <img src="./imagens/icone-email.svg" alt="tokubo.camila@gmail.com"/>
                </a>
            </div>
            <div className='footer_text-container'>
                <a class="footer_text" href="mailto:tokubo.camila@gmail.com">tokubo.camila@gmail.com</a>
                <p className='footer_text'>© 2025 Camila Sayuri Lobo Tokubo</p>
            </div>
        </footer>
    )
}

export default Footer