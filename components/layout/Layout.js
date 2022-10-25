import Header from "../header/Header"
import Head from "next/head"
import styles from "../../styles/Layout.module.css"
import Footer from "../footer/Footer.js"

export default function Layout({ children }){
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico"/>
            <title>PokeFlix</title>
        </Head>
        <main className={styles.main}>
            { children }
        </main>
        <Footer />
        </>
    )
}