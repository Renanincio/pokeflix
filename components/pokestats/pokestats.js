import styles from '../../styles/pokestats.module.css'

export default function Pokestats({ name, width}) {
    const width2 = width + 60

    return (
        <>
        <span className={styles.s1}>{name}:</span>
        <span className={styles.s2}>{width}</span>
        <div className={styles.b2}><div className={styles.b1} style={{width: width + '%'}}></div></div>
        </>
    )
}