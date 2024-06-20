const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

// middlewear 
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// mongodb config here
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mobile-store:Ayubowan1190!@mobile-shop.las9ozs.mongodb.net/?retryWrites=true&w=majority&appName=Mobile-Shop";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const mobileCollections = client.db("MobileInventory").collection("Mobiles");


        // insert a book to db: Post Method
        app.post("/upload-mobile", async (req, res) => {
            const data = req.body;
            // console.log(data);
            const result = await mobileCollections.insertOne(data);
            res.send(result);
        })

        // // get all mobiles from db
        // app.get("/all-mobiles", async (req, res) => {
        //     const mobiles = mobileCollections.find();
        //     const result = await mobiles.toArray();
        //     res.send(result)
        // })

        // get all mobiles & find by a category from db
        // 
        // GET all mobiles or search by model
        app.get('/all-mobiles', async (req, res) => {
            try {
            let query = {};
            if (req.query.model) {
                query = { model: { $regex: new RegExp(req.query.model, 'i') } };
            }
            const result = await mobileCollections.find(query).toArray();
            res.json(result);
            } catch (error) {
            console.error('Error retrieving mobiles:', error);
            res.status(500).json({ error: 'Internal server error' });
            }
        });

        // update a mobile method
        app.patch("/mobile/:id", async (req, res) => {
            const id = req.params.id;
            // console.log(id);
            const updateMobileData = req.body;
            const filter = { _id: new ObjectId(id) };
            const updatedDoc = {
                $set: {
                    ...updateMobileData
                }
            }
            const options = { upsert: true };

            // update now
            const result = await mobileCollections.updateOne(filter, updatedDoc, options);
            res.send(result);
        })


        // delete one mobile item from db
        app.delete("/mobile/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await mobileCollections.deleteOne(filter);
            res.send(result);
        })


        // get a single mobile data
        app.get("/mobile/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await mobileCollections.findOne(filter);
            res.send(result)
        })


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})