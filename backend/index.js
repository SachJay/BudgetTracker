const express = require('express');
const cors = require('cors');
var fs = require("fs");

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.get('/:name', (req, res, next) => {
    let name = req.params.name;

    fs.readFile("C:/Users/SachJ/Downloads/accountactivity - accountactivity.csv", 'utf8', function(err, buf) {
        if (err) {
            return console.log(err);
        }

        var data = buf.split('\n');
        data = data.map(x => {
            var interaction = x.split(",");
            return {
                date: interaction[0],
                name: interaction[1],
                cost: interaction[2],
                income: interaction[3],
                amount: interaction[4],
                catagory: 0
            }
        });

        console.log(JSON.stringify(data));
    });

    res.json({
        message: `Hello ${name}`
    });
});

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});