const express = require("express");
const app = express();

const auth = require('./routes/auth')
const product = require('./routes/products')
const profile = require('./routes/profile')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/auth', auth)
app.use('/products', product)
app.use('/profile', profile)

app.listen(3030, () => {
  console.log("Server running on port 3000");
});
