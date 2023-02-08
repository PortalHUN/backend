require('dotenv').config();
require('./src/database');
const express = require('express');

const app = express();

app.use(require('./src/Routes/root'));
app.use('/auth', require('./src/Routes/auth'));

app.listen(process.env.PORT || 3000,()=>{
    console.log(`[APP] Application is running on ${process.env.PORT || 3000}...`);
});