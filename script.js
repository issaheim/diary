
const diaryForm = document.createElement('form');
const dateLabel = document.createElement('label');
const inputDate = document.createElement('input');
const diaryTextLabel = document.createElement('label');
const diaryText = document.createElement('textarea');
const saveBtn = document.createElement('input');


// -------------------- HEADER --------------------
const header = document.createElement("header");
const diaryTitle = document.createElement("h1");
diaryTitle.innerHTML = "My diary";

const date = new Date();

document.body.insertAdjacentElement("afterbegin", header);
header.appendChild(diaryTitle);


// -------------------- BODY --------------------
const main = document.createElement("main");
const writeDiv = document.createElement("div");
const diaryDiv = document.createElement("div");

writeDiv.id = "writeDiv";
diaryDiv.id = "diaryDiv";

document.body.insertAdjacentElement("beforeend", main)


// ------------------- DIARYFORM -------------------
main.appendChild(writeDiv);
writeDiv.innerHTML = '';

diaryForm.setAttribute('onSubmit', 'event.preventDefault()');

dateLabel.setAttribute('for', 'inputDate');
dateLabel.innerText = 'Today´s date:';
dateLabel.id = "dateLabel";

inputDate.setAttribute('type', 'text');
inputDate.setAttribute('name', 'inputDate');
inputDate.setAttribute('id', 'inputDate');
inputDate.required = true;


diaryTextLabel.setAttribute('for', 'diaryText');

diaryText.setAttribute('type', 'text');
// diaryText.setAttribute('rows', "10");
// diaryText.setAttribute('cols', "35");
diaryText.setAttribute('name', 'diaryText');
diaryText.setAttribute('id', 'diaryText');
diaryText.setAttribute('placeholder', 'Text');
diaryText.required = true;

saveBtn.setAttribute('type', 'submit');
saveBtn.id = "saveBtn";
saveBtn.value = 'Save';
// saveBtn.addEventListener('click', checkCredentials)

diaryForm.appendChild(dateLabel);
diaryForm.appendChild(inputDate);
diaryForm.appendChild(diaryTextLabel);
diaryForm.appendChild(diaryText);
diaryForm.appendChild(saveBtn);

writeDiv.appendChild(diaryForm);


// ------------------- Array for posts -------------------
let diaryPosts = []

if (localStorage.getItem("savedDiaryPosts") == null){
  localStorage.setItem("savedDiaryPosts", JSON.stringify(diaryPosts));
  console.log("array finns ej");
}


// ---------------------- Save posts ----------------------
function savePost(inputDate, diaryText){
  let localDiaryPost = JSON.parse(localStorage.getItem("savedDiaryPosts"))
  let post = {date: inputDate, text: diaryText}
  localDiaryPost.push(post);
  console.log(localDiaryPost);

  localStorage.setItem("savedDiaryPosts", JSON.stringify(localDiaryPost));
}


// --------------------- saveBtn ---------------------
saveBtn.addEventListener("click", function(){
  console.log(diaryPosts);
  savePost(inputDate.value, diaryText.value)
  inputDate.innerHTML = '';
  diaryText.innerHTML = '';

  printDiary();
});


// -------------------- Print diary --------------------
main.appendChild(diaryDiv);
let diaryPostList = document.createElement("ul");
diaryDiv.appendChild(diaryPostList);

function printDiary(){
  let localDiaryPost = JSON.parse(localStorage.getItem("savedDiaryPosts"));
  
  diaryPostList.innerHTML = "";

  for (post in localDiaryPost){
    console.log(localDiaryPost[post].date);
    console.log(localDiaryPost[post].text);
    
    diaryPostList.insertAdjacentHTML("afterbegin",`<li id="savedDiaryPost"><h2>${localDiaryPost[post].date}</h2> <p>${localDiaryPost[post].text}</p></li>`);
  }
}

printDiary();

console.log(localDiaryPost[post].date);