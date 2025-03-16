import Account from "./Account";
import Order from "./Order";

class StockExchangeManager {
  constructor() {
    if (StockExchangeManager.instance) {
      return StockExchangeManager.instance;
    }
    StockExchangeManager.instance = this;
    this.account = new Map();
    this.ordersQueue = new Array();
    this.stocks = new Map();
    this.accountCounter = 1;
  }
  static getInstance() {
    if (!StockExchangeManager.instance) {
      new StockExchangeManager();
    }
    return StockExchangeManager.instance;
  }

  createAccount(uniqueId, user, initialBalance) {
    const account = new Account(uniqueId, user, initialBalance);
    this.account.set(uniqueId, account);
  }

  getAccount(accountId) {
    return this.account.get(accountId);
  }

  addStock(stock) {
    this.stocks.set(stock.getSymbol(), stock);
  }

  placeOrder(order) {
    thhis.ordersQueue.push(order);
  }

  processOrder() {
    while (this.ordersQueue.length !== 0) {
      let order = this.ordersQueue.shift();
      order.execute();
    }
  }
}
