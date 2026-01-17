// main server

import express from 'express';
import mysql from 'mysql2'
import "dotenv/config";

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || ''
})

app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';

    db.query(sql, (err, result) => {
        if (err) {
            console.log('Error fetching products:', err);
            res.status(500).send('Error fetching products');
        }

        res.json(result);
    })
})

app.get('/products', (req, res) => {
    const { candleType, flavour, height, width, price } = req.query;

    if (!candleType && !flavour && !height && !width && !price) {
        return res.status(400).json({ error: "Please Enter Valid Credentials!"})
    }

    const sql = 'INSERT INTO products (candleType, flavour, height, width, price) VALUES (?, ?, ?, ?, ?)';
    const values = [candleType, flavour, height, width, price];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log('Error inserting product:', err);
            return res.status(500).send(`Error inserting product, Error message: ${err.message}`);
        }

        const insertResult = result as mysql.ResultSetHeader;
        res.json({ message: 'Product Inserted Successfully', productId: insertResult.insertId });
    })
})

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on ${process.env.PORT}`)
})