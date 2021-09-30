const inputName = document.querySelector('.inputName');
const inputSurname = document.querySelector('.inputSurname');
const inputPost = document.querySelector('.inputPost');
const addBtn = document.querySelector('.addBtn');
// const deleteBtn = document.querySelector('.deleteBtn');
const tableBody = document.querySelector('.tableBody');

addBtn.addEventListener('click', addPerson);

let personList = [];



function addPerson() {

	let person = {
		number: personList.length + 1,
		name: inputName.value,
		surname: inputSurname.value,
		post: inputPost.value,
		id: personList.length + 1
	}

	personList.push(person);
	console.log(personList);
	displayPerson();
	inputName.value = '';
	inputSurname.value = '';
	inputPost.value = '';

	// btns()

}

// function btns() {
// const deleteBtn = document.getElementById('deleteBtn');
// console.log(deleteBtn);

tableBody.addEventListener('click', function (event) {
	// console.log(event.target.parentNode);
	// })
	// deleteBtn.addEventListener('click', function (event) {
	// 	console.log(event);
	let parentDeleteBtn = event.target.parentNode;
	let parent = parentDeleteBtn.parentElement;
	let child = parent.querySelector('.person__name');
	let childName = child.innerHTML;
	console.log(childName);

	personList.forEach(function (item, i) {
		if (childName === item.name) {
			personList.splice(i, 1)
		} else {
			console.log('not deleted');
		}


	})

	displayPerson()

})

// const delItem = document.querySelector('.person__1');
// console.log(delItem.id);


// delItem.addEventListener('click', function(event) {
//     let www = delItem.c
//     console.log(event.target.classList.value);


// });


function displayPerson() {
	let personInfo = '';
	debugger
	personList.forEach(function (item) {
		personInfo = `
      	<tr class="person__${item.number}" id="person__${item.number}">
            <td class="list__number">${item.number}</td>
            <td class="person__name">${item.name}</td>
            <td class="person__surname">${item.surname}</td>
            <td class="person__id" id="q123">${item.number}</td>
            <td class="person__post">${item.post}</td>
            <td class="delBtn__${item.number}"><input type="button" value="Delete" class="deleteBtn" id="deleteBtn"></td>
            <td><input type="button" value="Edit"></td>
      	</tr>
      	`
	});

	if (personList.length === 0) {
		tableBody.insertAdjacentHTML("beforeend", )
	} else {
		tableBody.insertAdjacentHTML("beforeend", personInfo);
	}
}