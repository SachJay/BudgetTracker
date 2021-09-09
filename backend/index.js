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

app.get('/db', (req, res, next) => {
    res.json(main());
});

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});

async function main(){
    const uri = "mongodb+srv://test:test@cluster0.ke4o7.mongodb.net/Cluster0?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db("BudgetTracker");
        const collection = db.collection('Interactions');
        
        var stuff = collection.find({});
 
        console.log(stuff);
        return stuff;
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


