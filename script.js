const header = document.createElement("header");
const main = document.createElement("main");
const writeDiv = document.createElement("div");
const diaryDiv = document.createElement("div");

const diaryForm = document.createElement('form');
const dateLabel = document.createElement('label');
const inputDate = document.createElement('input');
const diaryTextLabel = document.createElement('label');
const diaryText = document.createElement('textarea');
const saveBtn = document.createElement('input');

// -------------------- HEADER --------------------
const diaryTitle = document.createElement("h1");
diaryTitle.innerHTML = "My diary";

const date = new Date();


document.body.appendChild(header);
header.appendChild(diaryTitle);

// ------------------- DIARYFORM -------------------
document.body.appendChild(writeDiv);
writeDiv.innerHTML = '';

diaryForm.setAttribute('onSubmit', 'event.preventDefault()');

dateLabel.setAttribute('for', 'inputDate');
dateLabel.innerText = 'Today´s date:';

inputDate.setAttribute('type', 'text');
inputDate.setAttribute('name', 'inputDate');
inputDate.setAttribute('id', 'inputDate');
inputDate.required = true;


diaryTextLabel.setAttribute('for', 'diaryText');
diaryTextLabel.innerText = 'Text';

diaryText.setAttribute('type', 'text');
diaryText.setAttribute('name', 'diaryText');
diaryText.setAttribute('id', 'diaryText');
diaryText.setAttribute('placeholder', 'Text');
diaryText.required = true;

saveBtn.setAttribute('type', 'submit');
saveBtn.value = 'Save';
// saveBtn.addEventListener('click', checkCredentials)

diaryForm.appendChild(dateLabel);
diaryForm.appendChild(inputDate);
diaryForm.appendChild(diaryTextLabel);
diaryForm.appendChild(diaryText);
diaryForm.appendChild(saveBtn);

writeDiv.appendChild(diaryForm);