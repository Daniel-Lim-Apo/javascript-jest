class IceCreamShop {
  constructor() {
    this.inventory = {};
  }

  addFlavor(flavor, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero");
    }
    if (this.inventory[flavor]) {
      this.inventory[flavor] += quantity;
    } else {
      this.inventory[flavor] = quantity;
    }
  }

  getQuantity(flavor) {
    return this.inventory[flavor] || 0;
  }

  sellFlavor(flavor, quantity) {
    if (!this.inventory[flavor]) {
      throw new Error(`${flavor} is not available`);
    }
    if (this.inventory[flavor] < quantity) {
      throw new Error(`Not enough ${flavor} in stock`);
    }
    this.inventory[flavor] -= quantity;
  }
}

module.exports = IceCreamShop;
