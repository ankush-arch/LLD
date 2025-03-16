# Stock Exchange Platform

## Requirements

1. Users can create and manage trading accounts.
2. Users can buy/sell stocks, view their portfolio, and transaction history.
3. The system provides real-time stock quotes and market data.
4. The system handles order placement, execution, and settlement processes.

## Base Classes

### User
Represents a user of the stock brokerage system.

- Properties:
  - `user_id`: Unique identifier for the user.
  - `name`: Name of the user.
  - `email`: Email address of the user.

### Account
Represents a user's trading account.

- Properties:
  - `account_id`: Unique identifier for the account.
  - `user`: The associated user.
  - `balance`: The current balance of the account.
- Methods:
  - `deposit(amount)`: Deposit funds into the account.
  - `withdraw(amount)`: Withdraw funds from the account.

### Stock
Represents a stock that can be traded.

- Properties:
  - `symbol`: The ticker symbol of the stock.
  - `name`: The name of the stock.
  - `price`: The current price of the stock.
- Methods:
  - `update_price(new_price)`: Update the price of the stock.

### Order (Abstract)
Represents an order placed by a user.

- Properties:
  - `order_id`: Unique order identifier.
  - `account`: The account placing the order.
  - `stock`: The stock being bought or sold.
  - `quantity`: The number of shares in the order.
  - `price`: The price of the stock in the order.
  - `status`: The status of the order.
- Methods:
  - `execute()`: Abstract method to be implemented by concrete order classes.

### BuyOrder (Concrete)
Represents a buy order for a stock.

- Inherits from `Order`.
- Methods:
  - `execute()`: Executes the buy order.

### SellOrder (Concrete)
Represents a sell order for a stock.

- Inherits from `Order`.
- Methods:
  - `execute()`: Executes the sell order.

### OrderStatus (Enum)
Represents the possible statuses of an order.

- Values:
  - `PENDING`: Order is pending execution.
  - `EXECUTED`: Order has been executed.
  - `REJECTED`: Order has been rejected.

### Portfolio
Represents a user's portfolio, which holds the stocks owned by the user.

- Methods:
  - `add_stock(stock, quantity)`: Adds a stock to the portfolio.
  - `remove_stock(stock, quantity)`: Removes a stock from the portfolio.

### StockBroker (Singleton)
The central component of the stock brokerage system.

- Properties:
  - `users`: A list of registered users.
  - `stocks`: A list of available stocks.
  - `orders`: A list of orders to be processed.
- Methods:
  - `create_account(user)`: Creates a new trading account for a user.
  - `add_stock(stock)`: Adds a stock to the market.
  - `place_order(order)`: Places a new order.
  - `process_orders()`: Processes all pending orders.
