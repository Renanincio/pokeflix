import styles from '../../styles/Footer.module.css'
import { MdEmail } from "react-icons/md";
import { AiFillPhone, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
    return (
        <>
            <footer id='contact' className={styles.footer}>
                <div className={styles.content}>
                    <form action="https://formsubmit.co/renanincioprgmdr@gmail.com" method="POST">
                        <fieldset>
                            <legend><h1>Fale Comigo!</h1></legend>
                            <label for="name">Nome:</label>
                        <input type="text" name="name" required placeholder='Digite seu nome'></input>
                        <label for="email">E-mail:</label>
                        <input type="email" name="email" required placeholder='Digite seu e-mail'></input>
                        <input type="hidden" name="_next" value='https://localhost:300/'></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <label for="message">Mensagem:</label>
                        <textarea name="message" required placeholder='Digite sua mensagem'></textarea>
                        <button type="submit">Send</button>
                        </fieldset>
                    </form>

                    <div className={styles.links}>
                        <a href='https://www.linkedin.com/in/renan-inacio-968401240/' target="_blank"><span><AiFillLinkedin /></span></a>
                        <a href='https://github.com/Renanincio' target="_blank"><span><AiFillGithub /> </span></a>
                        <p><MdEmail />renanincioprgmdr@gmail</p>
                        <p><AiFillPhone />+55 21 97494-1136</p>
                    </div>
                </div>
                <div className={styles.copy}><p>Criador por &copy; Renan Inacio</p></div>
            </footer>
        </>
    )
}