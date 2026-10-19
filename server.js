const express = require("express");

// Import routers
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");

const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// Connect routers using app.use()
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
