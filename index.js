
const apiUrl = "https://www.test.salesforce.com/standardapi"

document.addEventListener('DOMContentLoaded', function() {
    const customRadio = document.getElementById('custom');
    const standardRadio = document.getElementById('standard');
    const textbox = document.getElementById('textbox');

    // Function to handle radio button change
    function handleRadioChange() {
        if (standardRadio.checked) {
            textbox.value = apiUrl; // Enter predefined text
        } else {
            textbox.value = ''; // Clear textbox if custom is selected
        }
    }

    // Add event listeners to radio buttons
    customRadio.addEventListener('change', handleRadioChange);
    standardRadio.addEventListener('change', handleRadioChange);

    // Initialize the textbox value based on the default selected radio button
    handleRadioChange();
});

function selectedSubjectName() {
    console.log(textbox.value);
    // if (text.value === "Select") {

    // }
    var subjectIdNode = document.getElementById('options');
    // console.log(subjectIdNode.value);
    // var value = subjectIdNode.options[subjectIdNode.selectedIndex].text;
    if (subjectIdNode.value == "") {
        textbox.value = apiUrl;
    }
    else {
        textbox.value = `https://www.test.salesforce.com/${subjectIdNode.value}api`;
    }
    // textbox.value = `https://www.test.salesforce.com/${subjectIdNode.value}api`;
    // console.log(value);
}

function sendRequest() {
    if (textbox.value) {
        alert(`sending request to ${textbox.value}`)
    } else {
        alert("Please select a Salesforce API endpoint");
    }
}