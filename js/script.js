const addTitle = document.getElementById("title_id");
const addNote = document.getElementById("note");
const addButton = document.getElementById("btn_id");
const notesDiv = document.getElementById("notes");

// showNotes();

// let notes = [];




function addNotes() {
    // const title = addTitle.value;
    // const note = addNote.value;

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notes = []
    } else {
        notes = JSON.parse(notes)
    }

    if (addNote.value == '') {
        alert('pleae make a note')
        return;
    }

    const noteObj = {
        title: addTitle.value,
        text: addNote.value
    }

    addTitle.value='';
    addNote.value='';

    notes.push(noteObj)
    localStorage.setItem('notes', JSON.stringify(notes))
    showNotes();

    function showNotes() {
        let notesHTML = ''
        let notes = localStorage.getItem('notes')
        if (notes == null) {
            return;
        } else {
            notes = JSON.parse(notes);
        }
        for (let i = 0; i < notes.length; i++) {

            notesHTML += `
                            <div class="note">
                                <button class="delete_btn" id=${i} onclick="deleteNote(${i})"> Delete </button>
                                <div class="title"> ${notes[i].title === "" ? 'Note' : notes[i].title} </div>
                                <div class="text"> ${notes[i].text} </div>
                            </div>
                         `
        }
        notesDiv.innerHTML = notesHTML;
    }

}


function deleteNote(index) {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        return;
    } else {
        notes = JSON.parse(notes);
    }

    notes.splice(index,1);
    // localStorage.removeItem(notes[index])
    localStorage.setItem('notes', JSON.stringify(notes))
    showNotes();
}




addButton.addEventListener('click', addNotes)