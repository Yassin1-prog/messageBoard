#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 55 ),
  text VARCHAR ( 200 ),
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text, date) 
VALUES 
('Charles', 'Hi there!', CURRENT_TIMESTAMP),
('Jane', 'Hello World!', CURRENT_TIMESTAMP);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
