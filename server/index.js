import app from './app.js';
import databaseConnect from './database/db.js';
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server running: http://localhost:${PORT}`)
})
databaseConnect();