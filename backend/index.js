const express = require('express');
const cors = require('cors');
var fs = require("fs");
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.get('/data', (req, res, next) => {
    var data ;

    fs.readFile("C:/Users/SachJ/Downloads/accountactivity - accountactivity.csv", 'utf8', function(err, buf) {
        if (err) {
            return console.log(err);
        }

        data = buf.split('\n');
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

        res.json(data);
    });
});

app.get('/db', async(req, res, next) => {
    var result = await main();
    console.log(result);
    res.json(result);
});

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});

async function main(){
    const uri = "mongodb+srv://test:test@cluster0.ke4o7.mongodb.net/Cluster0?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    var result;

    try {
        await client.connect();
        result = await client.db("BudgetTracker").collection("Interactions").find({catagory: 0}).toArray();
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        return result;
    }
}


