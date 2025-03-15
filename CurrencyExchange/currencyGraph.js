const IConverter = require("./IConverter");
const Currency = require("./currency");

class CurrencyGraph extends IConverter {
  constructor() {
    super();
    this.currencies = new Map();
    this.graph = new Map();
  }
  // Add a new Currency
  addCurrency(name, code, symbol) {
    const currency = new Currency(name, code, symbol);
    this.currencies.set(code, currency);
    this.graph.set(code, []);
  }
  // Get currency
  getCurrency(code) {
    return this.currencies.get(code);
  }
  // Set Exchange Rate
  setExchangeRate(from, to, rate) {
    const fromCurrency = this.currencies.get(from);
    const toCurrency = this.currencies.get(to);
    // Add currency rate as an edge in the graph
    this.graph.get(from).push({ to: to, rate });
    this.graph.get(to).push({ to: from, rate: 1 / rate }); // Adding a reverse edge for bi directional conversion
  }

  // Convert currency
  convert(from, to, amount) {
    const visited = new Set();
    const result = this._findShortestPath(from, to, amount, visited);
    if (result === -1) {
      throw new Error(`Cant convert from ${from} to ${to}`);
    }
    return result;
  }

  // Find shortest oath bw 2 currencies
  _findShortestPath(from, to, amount, visited) {
    const queue = [{ currency: from, rate: 1 }];
    visited.add(from);

    while (queue[0]) {
      const { currency: fromCurrency, rate } = queue.shift();
      // Reached from fromCurrency to toCurrency
      if (fromCurrency === to) {
        return amount * rate;
      }
      // Traverse all neighbors (connected currencies)
      const neighbors = this.graph.get(fromCurrency);
      if (!Array.isArray(neighbors)) {
        continue; // Skip if neighbors is not an array
      }
      for (const { to, rate: edgeRate } of neighbors) {
        if (!visited.has(to)) {
          visited.add(to);
          queue.push({ currency: to, rate: rate * edgeRate });
        }
      }
    }
    return -1;
  }
}

module.exports = CurrencyGraph;
