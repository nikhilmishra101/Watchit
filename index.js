const express = require('express');
const app = express();

app.get('/', (req, res) => {
    
});


const PORT = 5000||process.env.PORT;
app.listen(PORT,function(){
    console.log(`Server is running at ${PORT}....`);
});