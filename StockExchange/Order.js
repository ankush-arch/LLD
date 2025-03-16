import OrderStatus from "./OrderStatus";

class Order {
  constructor(order_id, account, stock, quantity, price) {
    this.order_id = order_id;
    this.account = account;
    this.stock = stock;
    this.quantity = quantity;
    this.price = price;
    this.status = OrderStatus.PENDING;
  }

  execute() {
    throw new Error("Method not implemented");
  }
}

export default Order;
