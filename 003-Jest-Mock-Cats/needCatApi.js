const { getCatImage } = require("./catApi");

getCatImage()
  .then((responseCatImage) => {
    console.log(responseCatImage);
  })
  .catch((error) => {
    console.error("Error fetching the cat image:", error);
  });
