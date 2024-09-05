document.getElementById('diagnosisForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let symptoms = document.getElementById('symptoms').value.toLowerCase();
    let diagnosis = "No specific diagnosis available.";
    let prescription = "Please consult a physician.";

    if(symptoms.includes('headache') || symptoms.includes('fever')) {
        diagnosis = "You may have a viral infection.";
        prescription = "Paracetamol 500mg";
    } else if(symptoms.includes('cough') || symptoms.includes('sore throat')) {
        diagnosis = "You may have a throat infection.";
        prescription = "Amoxicillin 500mg";
    }

    const diagnosisDetails = `
        Diagnosis: ${diagnosis} <br>
        Prescription: ${prescription} <br>
    `;

    document.getElementById('diagnosisDetails').innerHTML = diagnosisDetails;
    document.getElementById('diagnosisResult').classList.remove('hidden');

});

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenue = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenue.classList.toggle('hidden');
});
const mobileMenuBut = document.getElementById('drop');
const mobileMen = document.getElementById('mobile-menu');
mobileMenuBut.addEventListener('click', () => {
    mobileMen.classList.toggle('hidden');
});
