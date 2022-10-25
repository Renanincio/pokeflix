import styles from '../../styles/About.module.css'
import Header from '../../components/header/Header.js'

export default function About() {
    return (
        <>
            <main className={styles.about}>
                <Header />
                <div className={styles.content}>
                    <h1>Resumo:</h1>
                    <p>
                        Olá, me chamo Renan, sou o criador deste projeto e queria falar um pouco sobre ele, Pokeflix é o
                        meu primeiro projeto utilizando NextJS, minha primeira vez utilizando API RestFull, minha primeira
                        vez utilizando rotas dinâmicas e uma grande quantidade de requisições, já que, ao menos inicialmente
                        este projeto possuí 898 pokémons de 18 categorias diferentes. Busquei desenvolver uma Pokedéx utilizando
                        a <a href="https://pokeapi.co/" target="_blank">pokeapiV2</a>, pratiquei meu conhecimento em NextJS, JavaScript,
                        Html e Css, sei que ainda tenho muito a melhora, porém estou muito contente com o resultado deste
                        projeto.
                    </p>
                </div>
            </main>
        </>
    )
}