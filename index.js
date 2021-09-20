const express = require('express');
const cors = require('cors');
var fs = require("fs");
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test@cluster0.ke4o7.mongodb.net/Cluster0?retryWrites=true&w=majority";

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.post('/saveInteractions', (req, res, next) => {
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

        insertAll(data);
        res.json(data);
    });
});

app.get('/getInteractions', async(req, res, next) => {
    var interactions = await pullAll();
    var result = {
        interactions: interactions,
        totalCost: interactions.reduce(x => x.cost ? x.cost : 0)
    }

    res.json(result);
});

app.post('/saveCatagory', async(req, res, next) => {
    res.json("received catagory");
});

app.post('/deleteCatagory', async(req, res, next) => {
    res.json("deleted catagory");
});

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});

async function pullAll() {
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

async function insertAll(data) {
    const client = new MongoClient(uri);

    try {
        await client.connect();

        result = await client.db("BudgetTracker").collection("Interactions").insertMany(data);
        
    } catch (e) {
        console.error(e);
        
    } finally {
        await client.close();
    }
}

