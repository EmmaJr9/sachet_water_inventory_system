const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rock'
})

/* posting data to the db
app.post('/rock', (req, res) => {
    const sql = "INSERT INTO login (`name`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
}) 
*/

// fetching data from the db
app.post('/rock', (req, res) => {
    const sql = "SELECT * FROM login WHERE `name`= ? AND `password` = ?";
    
    db.query(sql, [req.body.name, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        }
        else {
            return res.json("Failed");
        }
    })
})

app.listen(8081, ()=> {
    console.log('listening on port');
})