const pokemons = [
  'Bulbasaur',
  'Ivysaur',
  'Venusaur',
  'Charmander',
  'Charmeleon',
  'Charizard',
  'Squirtle',
  'Wartortle',
  'Blastoise',
  'Metapod',
  'Weedle',
  'Pikachu',
  'Pidgey',
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(`I have ${pokemons.length} pokemons!`);
};

countThem();

const orderThem = () => {
  // order the pokemons alphabetically
  pokemons.sort();
  console.log(pokemons);
};

orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
  pokemons.reverse();
  console.log(pokemons);
};

flipThem();

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  const bigPokemons = pokemons.map((pokemon) => pokemon.toUpperCase());
  console.log(bigPokemons);
};

makeThemBig();

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  const bPokemons = pokemons.filter((pokemon) => pokemon.startsWith('B'));
  console.log(bPokemons);
};

onlyTheBs();

const notTheCs = () => {
  // remove all pokemons that starts with C
};

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
};

const catchPokemon = (name) => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
};

const didICatchIt = (name) => {
  // check the pokemons to see if a specific pokemon is in the array
};

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
};

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};
