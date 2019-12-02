const makeDino = function(species, period, carnivore, extinct = false) {
  return {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct
  }
}

const makeSingular = function(dinosaur) {
  if (dinosaur.species.endsWith('us')) {
    return makeDino(dinosaur.species.slice(0, -2), dinosaur.period, dinosaur.carnivore, dinosaur.extinct)
  } else {
    return dinosaur;
  }
}

const truncateSpecies = function(dinosaur) {
  const newDino = makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct);

  newDino.species = newDino.species.length <= 10
    ? newDino.species
    : newDino.species.slice(0, 7) + '...';

  return newDino; 
}

const makeExtinct = function(dinosaur) {

}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}