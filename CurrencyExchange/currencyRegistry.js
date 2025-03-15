const IRegistry = require("./IRegistry");
const currencyGraph = require("./currencyGraph");

class CurrencyRegistry extends IRegistry {
  constructor() {
    super();
    this.currencyGraph = new currencyGraph();
  }

  addCurrency(name, code, symbol) {
    this.currencyGraph.addCurrency(name, code, symbol);
  }

  getCurrency(code) {
    return this.currencyGraph.getCurrency(code);
  }

  setExchangeRate(from, to, amount) {
    this.currencyGraph.setExchangeRate(from, to, amount);
  }

  convert(from, to, amount) {
    return this.currencyGraph.convert(from, to, amount);
  }
}

module.exports = CurrencyRegistry;
