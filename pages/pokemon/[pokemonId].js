import Header from '../../components/header/Header.js'
import styles from '../../styles/pokemonid.module.css'
import Image from 'next/image.js'
import Pokestats from '../../components/pokestats/pokestats.js'

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  const maxPokemons = 898
  const api = `https://pokeapi.co/api/v2/pokemon/`

  const res = await fetch(`${api}/?limit=${maxPokemons}`)

  const dataId = await res.json()

  const paths = dataId.results.map((pokemon, index) => {
    return {
      params: { pokemonId: index.toString() },
    }
  })

  const id = context.params.pokemonId

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await response.json()

  return {
    props: { pokemon: data, pokemonId: paths },

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
              <Pokestats key={pokemon.id} name={stat.stat.name} width={stat.base_stat}/>
             ) )}</div>
          </div>
        </div>
      </main>
    </>
  )
}