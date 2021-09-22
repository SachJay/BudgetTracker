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
                catagory: 1
            }
        });

        insertAll(data);
        res.json(data);
    });
});

app.get('/getInteractions', async(req, res, next) => {
    var interactions = await pullAll();

    if(interactions == undefined){
        res.json("failed");
        return;
    }

    var interactionByCatagory = {
        0: { 
            name: "all",
            interactions: [],
            totalCost: 0
        }, 
        1: { 
            name: "food",
            interactions: [],
            totalCost: 0
        }, 
        2: { 
            name: "eating out",
            interactions: [],
            totalCost: 0
        }, 
        3: { 
            name: "games",
            interactions: [],
            totalCost: 0
        },
        4: { 
            name: "other",
            interactions: [],
            totalCost: 0
        },  
    };
    
    interactions.forEach(x => interactionByCatagory[x.catagory].interactions.push(x));

    Object.keys(interactionByCatagory).forEach(x => {
        var total = 0;
        interactionByCatagory[x].interactions.forEach(x => total = Number(total) + Number(x.cost));
        interactionByCatagory[x].totalCost = total.toFixed(2);
    });
    
    var result = {
        data: interactionByCatagory,
        totalCost: 0
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
        result = await client.db("BudgetTracker").collection("Interactions").find().toArray();
        
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

