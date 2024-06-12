const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;

// Configura la conexión a MySQL
const db = mysql.createConnection({
  host: 'mysqluv.mysql.database.azure.com',
  user: 'chilemorron',
  password: '123',
  database: 'barcodedb'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.get('/data', (req, res) => {
  let sql = 'SELECT * FROM your_table';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
