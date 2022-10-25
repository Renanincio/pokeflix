import styles from '../styles/Home.module.css'
import Header from '../components/header/Header'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import PokemonList from '../components/pokemonlist/PokemonList.js'

export async function getStaticProps() {
  const maxPokemons = 898;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {

  return (
    <>
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.card1}>

        </div>
        <div className={styles.content}>
        <h1>Poke<span>Flix</span></h1>
        <h4>Pokeflix é uma Pokédex em formato de website que possui 18 categorias e mais de 200 pokémons</h4>
        <p>A Pokédex, também conhecida como Poké-Agenda no Brasil (e ainda como Dexter ou Dextette, dependendo da voz
          masculina ou feminina do aparelho) é uma enciclopédia virtual portátil de alta tecnologia que os treinadores
          Pokémon transportam para registra todas as espécies diferentes de Pokémon que são encontradas durante a sua
          viagem como treinadores. Em geral, quando são cumpridos determinados requisitos, a capacidade pode ser aumentada
          permitindo que a Pokédex possa armazenar dados de outros Pokémon, que não são comuns, assim como os Pokémon de
          outras regiões.</p>

          <Link href="/#pokémons"><a>Ver todos os pokémons</a></Link>
          </div>
      </div>
    </main>

    <section id='pokémons'>
      <PokemonList item={pokemons} />
    </section>

    </>
  )
}
