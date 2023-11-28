$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var patientName = $('#patientName').val();
        var fileId = $('#fileId').val();
        var storeName = $('#storeName').val();
        var doctorId = $('#doctorId').val();
        var doctorSign = $('#doctorSign').val();
        var medicineName = $('#medicineName').val();
        var dose = $('#dose').val();
        var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        var frequency = $('#frequency').val();
        var comments = $('#comments').val();

        var data = {
            patientName: patientName,
            fileId: fileId,
            storeName: storeName,
            doctorId: doctorId,
            doctorSign: doctorSign,
            medicineName: medicineName,
            dose: dose,
            startDate: startDate,
            endDate: endDate,
            frequency: frequency,
            comments: comments,
            prep_status: "medicine sent to pharmacy"
        };

        $.ajax({
            url: '/doctor', // Replace with your API URL
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


        console.log('Patient Name:', patientName);
        console.log('File ID:', fileId);
        console.log('Store Name:', storeName);
        console.log('Doctor ID:', doctorId);
        console.log('Doctor Sign:', doctorSign);
        console.log('Medicine Name:', medicineName);
        console.log('Dose:', dose);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Frequency:', frequency);
        console.log('Comments:', comments);

        //clear the form for next entry
        // $('#patientName').val('');
        // $('#fileId').val('');
        // $('#storeName').val('');
        // $('#doctorId').val('');
        // $('#doctorSign').val('');
        // $('#medicineName').val('');
        // $('#dose').val('');
        // $('#startDate').val('');
        // $('#endDate').val('');
        // $('#frequency').val('');
        // $('#comments').val('');
    });
});

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