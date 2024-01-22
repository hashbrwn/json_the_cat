const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(`Error in fetching data: ${error.message}`, null);
    } else {
      const breedData = JSON.parse(body);

      if (breedData.length === 0) {
        callback("Breed not found", null);
      } else {
        const description = breedData[0].description;
        callback(null, description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
