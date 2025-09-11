# Books

Types:

- <code><a href="./src/resources/books.ts">Book</a></code>
- <code><a href="./src/resources/books.ts">FantasyBook</a></code>
- <code><a href="./src/resources/books.ts">ProgrammingBook</a></code>
- <code><a href="./src/resources/books.ts">ScifiBook</a></code>
- <code><a href="./src/resources/books.ts">BookCreateResponse</a></code>
- <code><a href="./src/resources/books.ts">BookRetrieveResponse</a></code>
- <code><a href="./src/resources/books.ts">BookListResponse</a></code>

Methods:

- <code title="post /books">client.books.<a href="./src/resources/books.ts">create</a>({ ...params }) -> BookCreateResponse</code>
- <code title="get /books/{bookId}">client.books.<a href="./src/resources/books.ts">retrieve</a>(bookID) -> BookRetrieveResponse</code>
- <code title="get /books">client.books.<a href="./src/resources/books.ts">list</a>() -> BookListResponse</code>
- <code title="put /books/{bookId}/cover">client.books.<a href="./src/resources/books.ts">updateCover</a>(bookID, { ...params }) -> void</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">Order</a></code>
- <code><a href="./src/resources/orders.ts">OrderListResponse</a></code>

Methods:

- <code title="post /orders">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> Order</code>
- <code title="get /orders/{orderId}">client.orders.<a href="./src/resources/orders.ts">retrieve</a>(orderID) -> Order</code>
- <code title="get /orders">client.orders.<a href="./src/resources/orders.ts">list</a>() -> OrderListResponse</code>

# Orderstream

Types:

- <code><a href="./src/resources/orderstream.ts">OrderstreamRetrieveResponse</a></code>

Methods:

- <code title="get /orderstream">client.orderstream.<a href="./src/resources/orderstream.ts">retrieve</a>() -> OrderstreamRetrieveResponse</code>
