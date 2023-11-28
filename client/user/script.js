function addCard(details) {
    var card = `
        <div class="d-flex justify-content-center">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">File Number: ${details.fileId}</h5>
                    <h5 class="card-title">Doctor Name: ${details.doctorName}</h5>
                    <h5 class="card-title">Medicine Name: ${details.medicineName}</h5>
                    <h5 class="card-title">Dose: ${details.dose}</h5>
                    <h5 class="card-title">Start Date: ${details.startDate}</h5>
                    <h5 class="card-title">End Date: ${details.endDate}</h5>
                    <h5 class="card-title">Frequency: ${details.frequency}</h5>
                    <h5 class="card-title">Comments: ${details.comments}</h5>
                    <h5 class="card-title">Status: ${details.prep_status}</h5>
                </div>
            </div>
        </div>
    `;

    // Add the card to the page
    document.getElementById('prescriptions').innerHTML += card;
}

document.querySelector('.btn-primary').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Button was clicked!');
    //get user input from <input type="text" class="form-control" id="patientName" placeholder="Enter your name">
    var patientName = document.getElementById('patientNameUser').value;
    console.log('Patient name:', patientName);
    //remove previous prescriptions from card
    document.getElementById('prescriptions').innerHTML = '';         
    getPrescriptions(patientName);
});

async function getPrescriptions(name) {
    // Call the API to get the prescriptions
    try{
        let url = '/user/' + name;
        let response = await fetch(url);

        let data = await response.json();

        console.log(data);

        data.forEach(element => {
            addCard(element);
        });

    }
    catch(error){
        console.log(error);
    }
}
