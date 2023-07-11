var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://sqladmin:T11admin$@cluster0.scj0fki.mongodb.net/T11"

async function adatLekerdezes() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('FifaAdatbazis');
        const collection = db.collection('Fifa');
        const rendszerezesBeallitasai = { Helyezes: 1 };

        const result = await collection.find({Helyezes:{$lt:4}}).sort(rendszerezesBeallitasai).toArray();
        console.log(result);

        client.close();
    } catch (err) {
        console.error("Hiba történt a csatlakozás vagy lekérdezés közben:", err);
    }
}

adatLekerdezes();