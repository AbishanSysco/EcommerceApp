const express = require("express");
const cors = require("cors");

const productsRoutes = require("./routes/productsRoutes");
const cartsRoutes = require("./routes/cartsRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/carts", cartsRoutes);
app.use("/", userRoutes);

module.exports = app;
