import Account from "./Account";
import Stock from "./Stock";

class Portfolio {
  constructor(account) {
    this.account = account;
    this.wallet = new Map();
  }

  addStock(stock, quantity) {
    const currentQuantity = this.wallet.get(stock.getSymbol()) || 0;
    this.wallet.set(stock.getSymbol(), currentQuantity + quantity);
  }

  removeStock(stock, quantity) {
    const currentQuantity = this.wallet.get(stock.getSymbol()) || 0;
    if (this.wallet.get(stock.getSymbol()) !== 0) {
      if (currentQuantity < quantity) {
        this.wallet.set(stock.getSymbol(), currentQuantity - quantity);
      }
      if (currentQuantity === quantity) {
        this.wallet.delete(stock.getSymbol());
      } else {
        throw new Error("Sell quantity > Owned quantity");
      }
    } else {
      throw new Error("Stock does not exists");
    }
  }
}

export default Portfolio;
