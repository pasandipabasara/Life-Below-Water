// JavaScript code
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform validation
    if (validateForm()) {
        // If form is valid, show preview
        showPreview();
    }
});

function validateForm() {
    // Add your validation logic here
    var isValid = true;
    var name = document.getElementById('YourName').value.trim();
    var email = document.getElementById('YourEmail').value.trim();
    var firstVisitYes = document.getElementById('FirstYes').checked;
    var firstVisitNo = document.getElementById('FirstNo').checked;
    var infoYes = document.getElementById('InfoYes').checked;
    var infoNo = document.getElementById('InfoNo').checked;
    var satisfaction = document.querySelector('input[name="Satisfaction"]:checked');
    var recommendYes = document.getElementById('RecommendYes').checked;
    var recommendNo = document.getElementById('RecommendNo').checked;

    // Example validation: check if required fields are filled
    if (name === '') {
        alert('Please enter your name.');
        isValid = false;
    } else if (email === '' && firstVisitNo && infoNo) {
        alert('Please enter your email.');
        isValid = false;
    } else if (!firstVisitYes && !firstVisitNo) {
        alert('Please indicate if this is your first time visiting.');
        isValid = false;
    } else if (!infoYes && !infoNo) {
        alert('Please indicate if the website was informative and easy to navigate.');
        isValid = false;
    } else if (!satisfaction) {
        alert('Please rate your satisfaction.');
        isValid = false;
    } else if (!recommendYes && !recommendNo) {
        alert('Please indicate if you would recommend our services.');
        isValid = false;
    }

    return isValid;
}

function showPreview() {
    var previewDiv = document.getElementById('preview');
    var confirmationDiv = document.getElementById('confirmation');
    var form = document.getElementById('feedbackForm');

    // Hide form and show preview content
    form.style.display = 'none';
    previewDiv.style.display = 'block';

    // Build preview content
    var previewContent = '<h3>Preview:</h3>';
    previewContent += '<p><strong>Name:</strong> ' + document.getElementById('YourName').value.trim() + '</p>';
    previewContent += '<p><strong>Email:</strong> ' + document.getElementById('YourEmail').value.trim() + '</p>';
    previewContent += '<p><strong>First Time Visit:</strong> ' + (document.getElementById('FirstYes').checked ? 'Yes' : 'No') + '</p>';
    previewContent += '<p><strong>Informative and Easy to Navigate:</strong> ' + (document.getElementById('InfoYes').checked ? 'Yes' : 'No') + '</p>';
    previewContent += '<p><strong>Satisfaction:</strong> ' + document.querySelector('input[name="Satisfaction"]:checked').value + '/10</p>';
    previewContent += '<p><strong>Recommend:</strong> ' + (document.getElementById('RecommendYes').checked ? 'Yes' : 'No') + '</p>';
    previewContent += '<p><strong>Platforms for Updates:</strong> ' + getSelectedOptions('Platforms').join(', ') + '</p>';
    previewContent += '<p><strong>Additional Comments:</strong><br>' + document.getElementById('AdditionalMessage').value.trim() + '</p>';

    // Display preview content
    previewDiv.innerHTML = previewContent;

    // Display confirmation message after a delay
    setTimeout(function() {
        previewDiv.style.display = 'none';
        confirmationDiv.style.display = 'block';
    }, 2000); // Delay in milliseconds
}

function getSelectedOptions(id) {
    var selectedOptions = [];
    var select = document.getElementById(id);
    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].selected) {
            selectedOptions.push(select.options[i].text);
        }
    }
    return selectedOptions;
}
