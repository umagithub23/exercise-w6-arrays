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
  /*[...pokemons].reverse()
    - Creates a copy of the array using the spread operator (...)
    - Then reverses that copy
    - The original pokemons array stays unchanged
    - Returns the reversed copy */
  const reversedPokemons = [...pokemons].reverse();
  console.log(reversedPokemons);
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
  const noCPokemons = pokemons.filter((pokemon) => !pokemon.startsWith('C'));
  console.log(noCPokemons);
};

notTheCs();

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  for (let element in pokemons) {
    console.log(`number ${element} - ${pokemons[element]}`);
  }
};

nameAndIdThanks();

const catchPokemon = (name) => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push('Flareon');
  console.log(pokemons);
  console.log(`I have ${pokemons.length} pokemons now!`);
};

catchPokemon();

const didICatchIt = (name) => {
  // check the pokemons to see if a specific pokemon is in the array
  console.log(pokemons.includes('Pikachu'));
  console.log(pokemons.indexOf('Venusaur'));
  console.log(pokemons.includes('Poodle'));
};

didICatchIt();

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2, 0, 'Clefairy');
  console.log(pokemons);
  console.log(`I have ${pokemons.length} pokemons now!`);
};

addInThirdPlace();

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  // reduce function returns only one value. In this case, two indexes (charmander & charmeleon) have the same string length but function returns only first longest - charmander
  const longestName = pokemons.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
  console.log(`The pokemon with the longest name is: ${longestName}`);
};

theLongestName();
