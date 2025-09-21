import mysql from "mysql2/promise";

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: "localhost",   // ya tu apna server IP/URL daal
    user: "root",        // apna MySQL username
    password: "", // apna MySQL password
    database: "pinddaan",     // apna database name
  });

  return connection;
}
