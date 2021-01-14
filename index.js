const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2]; //siberian = breedName

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

//fetchBreedDescription(siberian, callback) callback takes in an error and a description