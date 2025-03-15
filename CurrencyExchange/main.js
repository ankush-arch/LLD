// Main.js

const CurrencyRegistry = require("./currencyRegistry");

// Create the currency registry and add currencies
const registry = new CurrencyRegistry();

registry.addCurrency("US Dollar", "USD", "$");
registry.addCurrency("Euro", "EUR", "€");
registry.addCurrency("Indian Rupee", "INR", "₹");
registry.addCurrency("Japanese Yen", "JPY", "¥");

// Set exchange rates
registry.setExchangeRate("USD", "EUR", 0.85); // USD -> EUR
registry.setExchangeRate("USD", "INR", 82); // USD -> INR
registry.setExchangeRate("INR", "JPY", 1.5); // INR -> JPY

// Perform conversions
console.log(registry.convert("USD", "INR", 10));
console.log(registry.convert("INR", "USD", 100000));
console.log(registry.convert("INR", "EUR", 100));
console.log(registry.convert("EUR", "INR", 100));
console.log(registry.convert("INR", "JPY", 100));
