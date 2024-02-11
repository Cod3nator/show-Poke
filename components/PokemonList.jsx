import React from 'react'
import Poke from './Poke';

const PokemonList = async () => {
    const pokemonData = await fetchData();
  return (
  <>
   {pokemonData.map((item,index)=>(
    <Poke key={index} name={item.name} id={index+1}/>
   ))}

  </>
  )
}

export async function fetchData() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    
      const data = await response.json();

      const resultsArray = data.results;
  
      return resultsArray;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
  



export default PokemonList