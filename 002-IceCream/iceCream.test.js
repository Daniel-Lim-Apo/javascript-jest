const IceCreamShop = require("./iceCream");

describe("IceCreamShop", () => {
  let shop;

  beforeEach(() => {
    shop = new IceCreamShop();
  });

  test("should add a new flavor with correct quantity", () => {
    shop.addFlavor("vanilla", 10);
    expect(shop.getQuantity("vanilla")).toBe(10);
  });

  test("should increase quantity of an existing flavor", () => {
    shop.addFlavor("chocolate", 5);
    shop.addFlavor("chocolate", 7);
    expect(shop.getQuantity("chocolate")).toBe(12);
  });

  test("should throw error when adding flavor with non-positive quantity", () => {
    expect(() => shop.addFlavor("strawberry", 0)).toThrow(
      "Quantity must be greater than zero"
    );
  });

  test("should return 0 for a flavor that does not exist", () => {
    expect(shop.getQuantity("mint")).toBe(0);
  });

  test("should sell a flavor and reduce the quantity", () => {
    shop.addFlavor("vanilla", 10);
    shop.sellFlavor("vanilla", 4);
    expect(shop.getQuantity("vanilla")).toBe(6);
  });

  test("should throw error when selling a flavor that does not exist", () => {
    expect(() => shop.sellFlavor("banana", 1)).toThrow(
      "banana is not available"
    );
  });

  test("should throw error when selling more than available quantity", () => {
    shop.addFlavor("strawberry", 5);
    expect(() => shop.sellFlavor("strawberry", 6)).toThrow(
      "Not enough strawberry in stock"
    );
  });
});
