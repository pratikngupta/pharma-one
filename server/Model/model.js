// Create a Database Model to store the data for medical records
// Author: Pratik Narendra Gupta

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create a Schema for storing the data

const medicalRecordSchema = new Schema({
    //doctor name
    doctorName: {
        type: String,
        required: false,
        trim: true
    },
    //patient name
    patientName: {
        type: String,
        required: false,
        trim: true
    },
    // file id
    fileId: {
        type: String,
        required: false,
        trim: true
    },
    // store the file name
    storeName:{
        type: String,
        required: false,
        trim: true
    },
    medicineName: {
        type: String,
        required: false,
        trim: true
    },
    dose: {
        type: String,
        required: false,
        trim: true
    },
    startDate: {
        type: String,
        required: false,
        trim: true
    },
    endDate: {
        type: String,
        required: false,
        trim: true
    },
    frequency: {
        type: String,
        required: false,
        trim: true
    },
    comments: {
        type: String,
        required: false,
        trim: true
    },
    prep_status: {
        type: String,
        required: false,
        trim: true
    }
});
// Create a Model for storing the data
const medicalRecord = mongoose.model('medicalRecord', medicalRecordSchema);

module.exports = medicalRecord;

