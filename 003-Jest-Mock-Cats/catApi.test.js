const axios = require("axios");
const { getCatImage } = require("./catApi");

// Mock the axios module
jest.mock("axios");

describe("getCatImage", () => {
  it("should fetch a random cat image URL", async () => {
    const mockResponse = {
      data: [{ url: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg" }],
    };

    axios.get.mockResolvedValue(mockResponse);

    const catImageUrl = await getCatImage();

    // Remove the x at the end of the image url to pass through
    // expect(catImageUrl).toBe(mockResponse.data[0].url);
    expect(catImageUrl).toBe(
      "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
    );

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.thecatapi.com/v1/images/search"
    );
  });

  it("should handle errors when the API request fails", async () => {
    const errorMessage = "Network Error";
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(getCatImage()).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.thecatapi.com/v1/images/search"
    );
  });
});
