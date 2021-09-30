const inputName = document.querySelector('.inputName');
const inputSurname = document.querySelector('.inputSurname');
const inputPost = document.querySelector('.inputPost');
const addBtn = document.querySelector('.addBtn');
// const deleteBtn = document.querySelector('.deleteBtn');
let tbody = document.querySelector('tbody');

addBtn.addEventListener('click', addPerson);

let personList = [];

if (localStorage.getItem('person')) {
	personList = JSON.parse(localStorage.getItem('person'));
	displayPerson();
}

function addPerson() {
	let person = {
		number: personList.length + 1,
		name: inputName.value,
		surname: inputSurname.value,
		post: inputPost.value,
		id: personList.length + 1
	}

	personList.push(person);
	localStorage.setItem('person', JSON.stringify(personList));

	displayPerson();
	inputName.value = '';
	inputSurname.value = '';
	inputPost.value = '';
	initDeleteBtn();
	initEditBtn();
}

function displayPerson() {
	let personInfo = '';
	if ( personList.length === 0 ) tbody.innerHTML = '';

	personList.forEach(function(item, i){
		personInfo +=
		`<tr class="person__${i+1}">
            <td class="list__number">${i + 1}</td>
            <td class="person__name">${item.name}</td>
            <td class="person__surname">${item.surname}</td>
			<td class="person__post">${item.post}</td>
            <td class="person__id">${i+1}</td>
			<td class="deleteBtn" id="deleteBtn">Delete</td>
			<td class="editBtn" id="editBtn">Edit</td>
        </tr>`

		tbody.innerHTML = personInfo;
	})
}

function initDeleteBtn() {
	let idPerson = ''

	tbody.addEventListener('click', function(event){
		if (event.target.classList.contains('deleteBtn')) {
			idPerson = Number(event.target.previousElementSibling.innerHTML);
		} else {
			console.log('ne etot class');
		}

		personList.forEach(function(item, i){
			if (item.id === idPerson) {
				personList.splice(i, 1);
			}
		});

		displayPerson();
		localStorage.setItem('person', JSON.stringify(personList));
	});
}

function initEditBtn(){
	tbody.addEventListener('click', function(event){
		if (event.target.classList.contains('editBtn')) {
			console.log('edit btn');
		}
	});
};