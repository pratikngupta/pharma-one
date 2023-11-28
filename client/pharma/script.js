function createPrescriptionCard(prescription) {
    return `
        <div class="d-flex justify-content-center">
            <div class="card mt-4" style="width: 25rem;">
                <div class="card-body">
                    <h5 class="card-title">Patient Name: ${prescription.patientName}</h5>
                    <h5 class="card-title">File ID: ${prescription.fileId}</h5>
                    <h5 class="card-title">Store Name: ${prescription.storeName}</h5>
                    <h5 class="card-title">Doctor Name: ${prescription.doctorName}</h5>
                    <h5 class="card-title">Doctor Sign: ${prescription.doctorSign}</h5>
                    <h5 class="card-title">Medicine Name: ${prescription.medicineName}</h5>
                    <h5 class="card-title">Dose: ${prescription.dose}</h5>
                    <h5 class="card-title">Start Date: ${prescription.startDate}</h5>
                    <h5 class="card-title">End Date: ${prescription.endDate}</h5>
                    <h5 class="card-title">Frequency: ${prescription.frequency}</h5>
                    <h5 class="card-title">Comments: ${prescription.comments}</h5>
                    <div class="form-group">
                        <label for="status">Status:</label>
                        <select class="form-control" id="status" onchange="updateStatus(this.value, '${prescription.fileId}', '${prescription}')">
                            <option ${prescription.status === 'Unfulfilled' ? 'selected' : ''}>Unfulfilled</option>
                            <option ${prescription.status === 'Fulfilled' ? 'selected' : ''}>Fulfilled</option>
                            <option ${prescription.status === 'Working on it' ? 'selected' : ''}>Working on it</option>
                            <option ${prescription.status === 'Ready for pickup' ? 'selected' : ''}>Ready for pickup</option>
                            <option ${prescription.status === 'Medicine Unavailable' ? 'selected' : ''}>Medicine Unavailable</option>
                            <option ${prescription.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                        </select>
                        <div id="updateBox" class="mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function updateStatus(status, fileId, prescription) {
    console.log(`Status for file ${fileId} updated to ${status} by pharma for id ${fileId}`);
    var data = {
        //send _id of the document
        fileId: fileId,
        patientName: prescription.patientName,
        prep_status: status
    };

    $.ajax({
        url: '/pharma', // Replace with your API URL
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        success: function(response) {
            $('#updateBox').html('Data submitted successfully').show();
        },
        error: function(error) {
            $('#updateBox').html('Error occurred').show();
        }
    });
}

function addPrescription(prescription) {
    var card = createPrescriptionCard(prescription);
    document.getElementById('prescriptions').innerHTML += card;
    // make sure that dropdown is updated with the correct status for the prescription
}

document.getElementById('themeSwitcher').addEventListener('click', function() {
    var body = document.body;
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }
});

// Async function to call API every 30 seconds
async function callApiEvery30Seconds() {
    let previous_response = null;
    while (true) {
        console.log('Calling API...');
        try {
            // Call your API here
            // Replace the URL with your actual API endpoint
            const response = await fetch('/pharama');
            let data = await response.json();
            
            // Process the API response data
            console.log('API response:', data);

            data = data.reverse();

            // If the response is different from the previous response,
            // update the UI
            if (JSON.stringify(data) !== JSON.stringify(previous_response)) {    
                console.log('Response changed...');   
                document.getElementById('prescriptions').innerHTML = '';         
                data.forEach(element => {
                    addPrescription({
                        patientName: element.patientName,
                        fileId: element.fileId,
                        storeName: element.storeName,
                        doctorName: element.doctorName,
                        doctorSign: element.doctorSign,
                        medicineName: element.medicineName,
                        dose: element.dose,
                        startDate: element.startDate,
                        endDate: element.endDate,
                        frequency: element.frequency,
                        comments: element.comments,
                        status: element.prep_status
                    })
                    console.log(element);
                });
                previous_response = data;
            }
            
            // Wait for 30 seconds before making the next API call
            await new Promise(resolve => setTimeout(resolve, 10000));
        } catch (error) {
            console.error('Error calling API:', error);
        }
    }
}

// Start calling the API every 30 seconds
callApiEvery30Seconds();
