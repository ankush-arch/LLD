import Portfolio from "./Portfolio";

class Account {
  constructor(accountId, user, initialBalance) {
    this.accountId = accountId;
    this.user = user;
    this._balance = initialBalance;
    this.portfolio = new Portfolio(this);
  }

  getBalance() {
    return this._balance;
  }

  getPortfolio() {
    return this.portfolio;
  }

  getUser() {
    return this.user;
  }

  withDraw(amount) {
    if (amount >= this.getBalance()) {
      this._balance -= amount;
      console.log("Amount withdrew");
    } else {
      throw new Error("Insufficuent balance");
    }
  }

  deposit(amount) {
    this._balance += amount;
  }
}

export default Account;
