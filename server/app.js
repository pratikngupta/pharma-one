require('dotenv/config') 
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const mongoString = process.env.DATABASE_URL
const port = process.env.PORT;
const host = process.env.HOST;

mongoose.connect(mongoString);
const database = mongoose.connection;
console.log(mongoString)

const model = require('./Model/model');

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(cors());
app.use(express.json());

//serve static files from the root directory
app.use('/user', express.static('../client/user'));

//serve static files from the root directory
app.use('/doctor', express.static('../client/doctor'));

//serve static files from the root directory
app.use('/pharma', express.static('../client/pharma'));

// create a post request to store the data in the database received from doctor
app.post('/doctor', async (request, response) => {
    try {
        //print the data received from doctor
        console.log(request.body);
        
        const data = new model(
            {
                doctorName: request.body.doctorName,
                patientName: request.body.patientName,
                fileId: request.body.fileId,
                storeName: request.body.storeName,
                medicineName: request.body.medicineName,
                dose: request.body.dose,
                startDate: request.body.startDate,
                endDate: request.body.endDate,
                frequency: request.body.frequency,
                comments: request.body.comments,
                prep_status: request.body.prep_status
            }
        )
        console.log(data);
        const result = await data.save();
        console.log("status", result);
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
});

app.get('/pharama', async (request, response) => {
    try {
        // send all the data to the pharma
        const result = await model.find();
        response.send(result);
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
});

app.post('/pharma', async (request, response) => {
    try {
        // update the status of the medicine
        console.log("Received from pharma", request.body);
        // find the data with the given patient name and file id and update the status
        const result = await model.updateOne(
            { patientName: request.body.patientName, fileId: request.body.fileId},
            { $set: { prep_status: request.body.prep_status } },
            { new: true }
        );
        console.log(result);

        // send the updated data to the pharma
        const result1 = await model.find();
    }
    catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
});

app.get('/user/:name', async (request, response) => {
    try {
        // only send the data with the given patient name
        patientName = request.params.name;
        const result = await model.find({ patientName: patientName });
        response.send(result);
        console.log(result);

    } catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
});

// start the server
app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}/`);
    // url for the user
    console.log(`User: http://${host}:${port}/user`);
    // url for the doctor
    console.log(`Doctor: http://${host}:${port}/doctor`);
    // url for the pharma
    console.log(`Pharma: http://${host}:${port}/pharma`);
});