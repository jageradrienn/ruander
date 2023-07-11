var MongoClient=require("mongodb").MongoClient;
var url="mongodb+srv://sqladmin:T11admin$@cluster0.scj0fki.mongodb.net/T11"

async function kollekcioKeszites() {
    try {
      const client = await MongoClient.connect(url);
      const db=client.db("FifaAdatbazis")// kiválasztjuk a db-t, amim a kliensen belül lesz... EZek automatikusan létrejönnek;
      await db.createCollection("Fifa");
      console.log("A kollekció létrejött");// kolleció a databazaás és 
      client.close();
    } catch (err) {
      console.log("Hiba történt a kollekció létrehozása során:", err);
    }
  }

  kollekcioKeszites();

