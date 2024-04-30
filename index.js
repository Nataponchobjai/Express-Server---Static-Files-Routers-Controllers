const express = require("express");
const app = express();
const peopleRouter = require('./routers/people')


const PORT = 8000;

app.use(express.json());
app.use('/people', peopleRouter);


app.listen(PORT, () => console.log(`I am listening on port ${PORT}`));