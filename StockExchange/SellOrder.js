import Order from "./Order";
import OrderStatus from "./OrderStatus";

class SellOrder extends Order {
  constructor(order_id, account, stock, quantity, price) {
    super(order_id, account, stock, quantity, price);
  }
  execute(stock, quantity) {
    let totalAmount = stock * quantity;
    this.account.deposit(totalAmount);
    // ORder execured status change
  }
}

export default SellOrder;
