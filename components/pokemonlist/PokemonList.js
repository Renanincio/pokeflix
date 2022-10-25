import styles from '../../styles/PokemonList.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PokemonList({ item, type }) {
    return (
        <>
            <div className={styles.pokemonList}>
                {item.map((pokemon) => (
                    <div key={pokemon.id} className={styles.card}>
                        <Image
                            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                            width="120"
                            height="120"
                            alt={pokemon.name}
                        />
                        <p>#{pokemon.id}</p>
                        <p>{pokemon.name}</p>
                        <Link href={`/pokemon/${pokemon.id}`}><a>Detalhes</a></Link>
                    </div>
                )
                )
                }
            </div>
        </>
    )
}