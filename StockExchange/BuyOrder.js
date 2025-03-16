import Order from "./Order";
import OrderStatus from "./OrderStatus";

class BuyOrder extends Order {
  constructor(order_id, account, stock, quantity, price) {
    super(order_id, account, stock, quantity, price);
  }
  execute() {
    const totalCost = this.quantity * this.price;
    if (this.account.getBalance() >= totalCost) {
      this.account.withDraw(totalCost);
      // Update portfolio
    } else {
      // ...
    }
  }
}

export default BuyOrder;
