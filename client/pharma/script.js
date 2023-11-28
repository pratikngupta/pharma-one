function createPrescriptionCard(prescription) {
    return `
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">Patient Name: ${prescription.patientName}</h5>
                <h5 class="card-title">File ID: ${prescription.fileId}</h5>
                <h5 class="card-title">Store Name: ${prescription.storeName}</h5>
                <h5 class="card-title">Doctor ID: ${prescription.doctorId}</h5>
                <h5 class="card-title">Doctor Sign: ${prescription.doctorSign}</h5>
                <h5 class="card-title">Medicine Name: ${prescription.medicineName}</h5>
                <h5 class="card-title">Dose: ${prescription.dose}</h5>
                <h5 class="card-title">Start Date: ${prescription.startDate}</h5>
                <h5 class="card-title">End Date: ${prescription.endDate}</h5>
                <h5 class="card-title">Frequency: ${prescription.frequency}</h5>
                <h5 class="card-title">Comments: ${prescription.comments}</h5>
                <div class="form-group">
                    <label for="status">Status:</label>
                    <select class="form-control" id="status" onchange="updateStatus(this.value, '${prescription.fileId}')">
                        <option ${prescription.status === 'Unfulfilled' ? 'selected' : ''}>Unfulfilled</option>
                        <option ${prescription.status === 'Fulfilled' ? 'selected' : ''}>Fulfilled</option>
                    </select>
                </div>
            </div>
        </div>
    `;
}

function updateStatus(status, fileId) {
    console.log(`Status for file ${fileId} updated to ${status}`);
    // Here you can add the code to update the status in your database
}

function addPrescription(prescription) {
    var card = createPrescriptionCard(prescription);
    document.getElementById('prescriptions').innerHTML += card;
}

// Example usage:
addPrescription({
    patientName: 'John Doe',
    fileId: '123',
    storeName: 'Pharmacy 1',
    doctorId: '456',
    doctorSign: 'Dr. Smith',
    medicineName: 'Medicine 1',
    dose: '2 tablets',
    startDate: '2022-01-01',
    endDate: '2022-01-31',
    frequency: 'Once a day',
    comments: 'Take after meals',
    status: 'Unfulfilled'
});

// Example usage:
addPrescription({
    patientName: 'John Doe',
    fileId: '123',
    storeName: 'Pharmacy 1',
    doctorId: '456',
    doctorSign: 'Dr. Smith',
    medicineName: 'Medicine 1',
    dose: '2 tablets',
    startDate: '2022-01-01',
    endDate: '2022-01-31',
    frequency: 'Once a day',
    comments: 'Take after meals',
    status: 'Unfulfilled'
});