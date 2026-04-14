require("dotenv").config();
const express = require("express");
const helmet = require("helmet");

const app = express();

require("./lib/db.mongoose");

app.use(express.json());
app.use(helmet());

require("./middle/sanitize.middleware")(app);

app.use("/auth", require("./router/auth.router"));
app.use("/user", require("./router/user.router"));
app.use("/account", require("./router/account.router"));
app.use("/transaction", require("./router/transaction.router"));
app.use("/beneficiary", require("./router/beneficiary.router"));

app.use(require("./middle/error.middleware"));

app.listen(5000, () => console.log("Server running on 5000"));