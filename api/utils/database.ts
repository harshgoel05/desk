import { MongoClient } from "mongodb";
let dbClient: MongoClient;
export async function initDbClient() {
  try {
    dbClient = await MongoClient.connect(("mongodb://deskadmin:deskadmin@cluster0-shard-00-00.x5lvb.mongodb.net:27017,cluster0-shard-00-01.x5lvb.mongodb.net:27017,cluster0-shard-00-02.x5lvb.mongodb.net:27017/Desk?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin") || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ignoreUndefined: true,
    });
    console.log("Connected to Database");
    return dbClient;
  } catch (error) {
    throw error;
  }
}

export async function getDbClient() {
  if (!dbClient) {
    await initDbClient();
  }
  return dbClient;
}
