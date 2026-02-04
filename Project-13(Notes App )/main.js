const textArea = document.getElementById("textarea");
const addNotes = document.getElementById("addNotes");
const emptyNotes = document.getElementById("emptyNotes");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Save notes to LocalStorage
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Render notes
function renderNotes() {
    notesContainer.innerHTML = "";

    if (notes.length === 0) {
        emptyNotes.style.display = "block";
        return;
    }

    emptyNotes.style.display = "none";

    notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("notes");

        const noteText = document.createElement("p");
        noteText.textContent = note.text;

        const dateTime = document.createElement("p");
        dateTime.textContent = note.time;
        dateTime.classList.add("dateTime");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener("click", () => {
            notes.splice(index, 1);
            saveNotes();
            renderNotes();
        });

        noteDiv.appendChild(noteText);
        noteDiv.appendChild(dateTime);
        noteDiv.appendChild(deleteBtn);

        notesContainer.appendChild(noteDiv);
    });
}

// Add note
addNotes.addEventListener("click", function () {
    const text = textArea.value.trim();
    if (text === "") return;

    const note = {
        text: text,
        time: new Date().toLocaleString()
    };

    notes.push(note);
    saveNotes();
    textArea.value = "";
    renderNotes();
});

// Initial render
renderNotes();
