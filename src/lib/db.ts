import { Low, JSONFile } from 'lowdb';
import { join } from 'path';

// Define the schema for your database
const defaultData = {
  words: [] // Each word will be an object { word: "example", retention: 0 }
};

// File path for the database
const file = join(process.cwd(), 'data', 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Initialize the database with default data if empty
async function initDB() {
  await db.read();
  db.data ||= defaultData;
  await db.write();
}

export { db, initDB };
