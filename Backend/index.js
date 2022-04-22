const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4
    }
   
    function connectWithDB() {
    mongoose.connect(uri, options, function(err, db) {
     if (err) console.error(err);
     else console.log("Database connected succesfully")
   })
   }
    connectWithDB()


    const exercisesRouter = require('./routes/exercises')
    const usersRouter = require('./routes/users');

    app.use('/exercises', exercisesRouter);
    app.use('/users', usersRouter);



    app.route('/')
    .get((req, res) => {
        console.log("Set new Name")
        res.send("Set new name")
    })

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})