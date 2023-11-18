const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

// MySQL bağlantı yapılandırması

var connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "ozdemiroguz",
    database: "smarthome"
});


// Express.js sunucu
app.get('/veri', (req, res) => {
    const query = 'SELECT * FROM Users';

    connection.query(query, (err, results, fields) => {
        if (err) {
            console.error('Sorgu hatası: ' + err);
            res.status(500).json({ error: 'Veri çekme sırasında hata oluştu' });
        } else {
            console.log('Veri çekme başarılı!');
            res.json({ data: results });
        }
    });
});

app.get('/tum_tablolar', (req, res) => {
    // Tüm tabloları çekmek için SHOW TABLES sorgusunu kullanın
    connection.query('SHOW TABLES', (err, results, fields) => {
        if (err) {
            console.error('Sorgu hatası: ' + err);
            res.status(500).json({ error: 'Tabloları çekerken hata oluştu' });
        } else {
            const tables = results.map(result => result[`Tables_in_${connection.config.database}`]);

            // Her tabloyu sorgula ve sonuçları al
            const promises = tables.map(table => {
                return new Promise((resolve, reject) => {
                    connection.query(`SELECT * FROM ${table}`, (err, results, fields) => {
                        if (err) {
                            console.error(`Sorgu hatası (${table}): ` + err);
                            reject(err);
                        } else {
                            resolve({ tableName: table, data: results });
                        }
                    });
                });
            });

            // Tüm tablo sorgularının tamamlanmasını bekleyin ve sonuçları gönderin
            Promise.all(promises)
                .then(tableResults => {
                    res.json({ tables: tableResults });
                })
                .catch(error => {
                    res.status(500).json({ error: 'Tabloları çekerken hata oluştu' });
                });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});