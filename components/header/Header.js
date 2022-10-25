import styles from '../../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin, AiFillPhone, AiFillProject, AiOutlineRight, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import { BiCaretDown, BiHighlight } from "react-icons/bi";
import { GiRotaryPhone } from "react-icons/gi";

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <header>
                    <div className={styles.logo}>
                        <Link href='/'>
                            <a>
                                <Image
                                    className={styles.image}
                                    src="/images/pokeball.png"
                                    width="30"
                                    height="30"
                                    alt="logo do site"
                                />
                                <p>Poke<span>Flix</span></p>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.divDesktop}>
                        <nav className={styles.navDesktop}>
                            <ul className={styles.iconLink}>
                                <li><a href='https://github.com/Renanincio' target="_blank" rel="noopener noreferrer" className={styles.iconA}><AiFillGithub /></a></li>
                                <li><a href='https://www.linkedin.com/in/renan-inacio-968401240/' target="_blank" rel="noopener noreferrer" className={styles.iconA}><AiFillLinkedin /></a></li>
                            </ul>
                            <ul>
                                <li>
                                    <Link href="/"><a><span className={styles.iconSpan}><AiOutlineHome className={styles.iconNav} /></span>Home</a></Link>
                                </li>

                                <li>
                                    <Link href="/#pokémons"><a><span><BiCaretDown className={styles.iconNav} /></span>Pokémons</a></Link>
                                </li>

                                <li>
                                    <Link href="/about"><a><BiHighlight className={styles.iconNav} />Sobre</a></Link>
                                </li>

                                <li>
                                    <Link href='#contact'><a><GiRotaryPhone className={styles.iconNav} />Contato</a></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.navMobile}>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/"><a><span><AiOutlineHome /></span></a></Link>
                                </li>

                                <li>
                                    <Link href="/#pokémons"><a><span><BiCaretDown /></span></a></Link>
                                </li>

                                <li>
                                    <Link href="/about"><a><BiHighlight /></a></Link>
                                </li>

                                <li>
                                    <Link href='#contact'><a><GiRotaryPhone /></a></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </>

    )
}