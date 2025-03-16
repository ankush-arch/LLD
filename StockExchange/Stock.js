class Stock {
    constructor(symbol, name, price) {
        this.symbol = symbol;
        this.name = name;
        this._price = price;
    }

    // Getters, Setters
    get price() {
        return this.price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
    }

    getName() {
        return this.name;
    }

    getSymbol() {
        return this.symbol;
    }
}

export default Stock;