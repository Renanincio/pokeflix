import Header from '../../components/header/Header.js'
import styles from '../../styles/pokemonid.module.css'
import Image from 'next/image.js'
import Pokestats from '../../components/pokestats/pokestats.js'

export const getStaticPaths = async () => {
  const maxPokemons = 898
  const api = `https://pokeapi.co/api/v2/pokemon/`

  const res = await fetch(`${api}/?limit=${maxPokemons}`)

  const data = await res.json()

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: index.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json()

  return {
    props: { pokemon: data },
  }
}

export default function Pokemon({ pokemon }) {
  return (
    <>
      <main className={styles.pokeSingle}>
        <Header />
        <div className={styles.container}>
          <div className={styles.pokeCard}>
            <Image
              className={styles.pokeImage}
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
              width="150"
              height="150"
              alt={pokemon.name}
            />
            <p>#{pokemon.id}</p>
            <h1>{pokemon.name}</h1>
          </div>
          <div className={styles.content}>
            <h4> {pokemon.types.map((item, index) => (
              <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>
                {item.type.name}
              </span>
            ))}
            </h4>
            <p><span>Altura:</span> {pokemon.height * 10} cm <span>Peso:</span> {pokemon.weight / 10} kg</p>
            <div>{pokemon.stats.map((stat) => (
              <Pokestats name={stat.stat.name} width={stat.base_stat}/>
             ) )}</div>
          </div>
        </div>
      </main>
    </>
  )
}