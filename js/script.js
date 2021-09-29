const inputName = document.querySelector('.inputName');
const inputSurname = document.querySelector('.inputSurname');
const inputPost = document.querySelector('.inputPost');
const addBtn = document.querySelector('.addBtn');
// const deleteBtn = document.querySelector('.deleteBtn');
const tableBody = document.querySelector('.tableBody');

addBtn.addEventListener('click', addPerson);

let personList =[];

function addPerson() {

    let person = {
        number : personList.length + 1,
        name : inputName.value,
        surname : inputSurname.value,
        post : inputPost.value,
        id : personList.length + 1
    }

    personList.push(person);
    console.log(personList);
    displayPerson();
    inputName.value ='';
    inputSurname.value ='';
    inputPost.value ='';

    btns()
}

function btns() {
    const deleteBtn = document.querySelector('.deleteBtn');
    let qqq = deleteBtn.closest('td');
    console.log(qqq);

    const delItem = document.querySelector('.person__1');
    console.log(delItem.id);


    // delItem.addEventListener('click', function(event) {
    //     let www = delItem.c
    //     console.log(event.target.classList.value);


    // });
}

function displayPerson() {
    let personInfo = '';

    personList.forEach(function(item){
        personInfo = `
        <tr class="person__${item.number}" id="person__${item.number}">
            <td class="list__number">${item.number}</td>
            <td class="person__name">${item.name}</td>
            <td class="person__surname">${item.surname}</td>
            <td class="person__id" id="q123">${item.number}</td>
            <td class="person__post">${item.post}</td>
            <td class="delBtn__${item.number}"><input type="button" value="Delete" class="deleteBtn"></td>
            <td><input type="button" value="Edit"></td>
        </tr>
        `
    });

    tableBody.insertAdjacentHTML("beforeend" ,personInfo);
}