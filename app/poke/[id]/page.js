import React from "react";

// export async function generateStaticParams() {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
//     const data = await response.json();

//     const pokemonNames = data.results.map((pokemon) => ({
//       params: {
//         name: pokemon.name,
//       },
//     }));

//     return pokemonNames;
//   }

// async function getPokemon(name) {
//     console.log(name+"name of the pokemon");
//   const response = await fetch(`https://pokeapi.co/api/v2/ability/${name}/`)
//   const data = await response.json();

//   return data;
// }



export async function generateStaticParams() {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
    {
      id: "7",
    },
    {
      id: "8",
    },
    {
      id: "9",
    },
    {
      id: "10",
    },
    {
      id: "11",
    },
    {
      id: "12",
    },
    {
      id: "13",
    },
    {
      id: "14",
    },
    {
      id: "15",
    },
    {
      id: "16",
    },
    {
      id: "17",
    },
    {
      id: "18",
    },
    {
      id: "19",
    },
    {
      id: "20",
    },
  ];
}

export async function getPoke(poke) {
  const { id } =await poke;
  console.log(id)
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  console.log(response);
  const pokemon = await response.json();
  return {
    props: {
      pokemon,
    },
  };
}


const PokemonPage =async ({ params }) => {
  // const pokemon=JSON.stringify(getPokemon);
  const getPokemon = await getPoke(params);
// console.log(getPokemon.props.pokemon.abilities[0].ability.name);
  return (
    <div>
      <h1>Hello world</h1>
      {getPokemon && (
        <div>
          <h1>Name: {getPokemon.props.pokemon.forms[0].name}</h1>
          <p>Height: {getPokemon.props.pokemon.height}</p>
          <p>Weight: {getPokemon.props.pokemon.weight}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonPage;


// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page