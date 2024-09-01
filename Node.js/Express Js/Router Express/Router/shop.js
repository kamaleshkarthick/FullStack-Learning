import express from 'express';

export const routers = express.Router();

routers.get('/product', (req, res) => {
    res.send(`<form action="/shop/product-detail" method="POST">
    <label for="password">Password:</label>
    <input type="text" id="password" name="password" required>
    <input type="submit" value="Submit">
  </form>`)
})
routers.post('/product-detail', (req, res) => {
    res.send(`<ul>
        <li>Product value</li>
        <li>Product value</li>
        <li>Product value</li>
        <li>Product value</li>
        </ul>`)
})