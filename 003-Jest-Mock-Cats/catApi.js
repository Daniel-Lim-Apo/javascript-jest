const axios = require("axios");

const getCatImage = async () => {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    return response.data[0].url;
  } catch (error) {
    console.error("Error fetching the cat image:", error);
    throw error;
  }
};

module.exports = { getCatImage };
