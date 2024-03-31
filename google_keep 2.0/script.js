'use strict'

let new_keep = document.getElementById('new_keep');
let new_keep_btn = document.getElementById('new_keep_btn');
let keeps = document.getElementById('keeps');
new_keep.value = localStorage.getItem('input');
let new_note_btn =  document.getElementById('new_note');
new_note_btn.onclick = () =>{
    new_note_btn.hidden = true;
    new_keep.hidden = false;
    new_keep_btn.hidden = false;
}
new_keep.oninput = (event) => {
    localStorage.setItem('input', event.target.value);
}
let keeps_array = JSON.parse(localStorage.getItem('keeps')) || [];
render_keep();
function render_keep(value){
    keeps.innerHTML = '';
    let i = 0;
    if (keeps_array.length === 0) {
        keeps.insertAdjacentHTML('afterbegin', '<p>Нет заметок</p>');
    } else {
    for (let value of keeps_array){
        const keep_template = `
        <div class="col-12 p-2">
            <div class="border p-2 note">
                <p class="text-wrap overflow-hidden">${value}</p>
                <button class="btn btn-danger delete" data-index="${i}" data-action="delete" id="delete_btn">X</button>
            </div>
        </div>
        `;
        keeps.insertAdjacentHTML('afterbegin', keep_template);
        i++;
    }}
}
new_keep_btn.onclick = () => {
    if (new_keep.value){
        new_keep.hidden = true;
        new_keep_btn.hidden = true;
        new_note_btn.hidden = false;
        keeps_array.push(new_keep.value);
        localStorage.setItem('keeps', JSON.stringify(keeps_array))
        render_keep(new_keep.value);
        new_keep.value = '';
        localStorage.removeItem('input');
    }
}
new_keep.hidden = true;
new_keep_btn.hidden = true;

keeps.onclick = check_action

function check_action(event){
    let HTMLelement = event.target;
    if (HTMLelement.dataset.action === 'delete') delete_keep(HTMLelement.dataset.index);
}
function delete_keep(index){
    keeps_array.splice(index, 1);
    localStorage.setItem('keeps', JSON.stringify(keeps_array));
    render_keep();
}