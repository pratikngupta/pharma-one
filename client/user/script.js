function addCard(details) {
    var card = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">File Number: ${details.fileNumber}</h5>
                <h5 class="card-title">Doctor Name: ${details.doctorName}</h5>
                <h5 class="card-title">Medicine Name: ${details.medicineName}</h5>
                <h5 class="card-title">Dose: ${details.dose}</h5>
                <h5 class="card-title">Start Date: ${details.startDate}</h5>
                <h5 class="card-title">End Date: ${details.endDate}</h5>
                <h5 class="card-title">Frequency: ${details.frequency}</h5>
                <h5 class="card-title">Comments: ${details.comments}</h5>
                <h5 class="card-title">Status: ${details.status}</h5>
            </div>
        </div>
    `;

    $('.container').append(card);
}

// Example usage:
addCard({
    fileNumber: '123',
    doctorName: 'Dr. Smith',
    medicineName: 'Medicine',
    dose: '2 tablets',
    startDate: '2022-01-01',
    endDate: '2022-01-31',
    frequency: 'Once a day',
    comments: 'Take after meals',
    status: 'Unfulfilled'
});
addCard({
    fileNumber: '123',
    doctorName: 'Dr. Smith',
    medicineName: 'Medicine',
    dose: '2 tablets',
    startDate: '2022-01-01',
    endDate: '2022-01-31',
    frequency: 'Once a day',
    comments: 'Take after meals',
    status: 'Unfulfilled'
});
addCard({
    fileNumber: '123',
    doctorName: 'Dr. Smith',
    medicineName: 'Medicine',
    dose: '2 tablets',
    startDate: '2022-01-01',
    endDate: '2022-01-31',
    frequency: 'Once a day',
    comments: 'Take after meals',
    status: 'Unfulfilled'
});