const makeDino = function(newSpecies,newPeriod,newDiet,existence) {
  if(existence === undefined){existence = false}
  return{
    species: newSpecies,
    period: newPeriod,
    carnivore: newDiet,
    extinct: existence
  }
}

const makeSingular = function(dino) {
  let newName = '';
  if(dino.species.slice(-2)==='us'){newName += dino.species.slice(0,-2)}
  else {newName = dino.species}
  return{
    species: newName,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct
  }
}

const truncateSpecies = function(dino) {
  let newName = '';
  if(dino.species.length>7){newName += dino.species.slice(0,7)+'...'}
  else {newName += dino.species}
  return{
    species: newName,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct
  }
}

const makeExtinct = function(dino) {
  return{
    species: dino.species+'...',
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: true
  }
}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}