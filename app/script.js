document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const saveButton = document.getElementById('save-button');
    const notesList = document.getElementById('notes-list');

    // Carrega as anotações existentes do localStorage quando a página é carregada
    loadNotes();

    saveButton.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            saveNote(noteText);
            noteInput.value = ''; // Limpa o campo de texto
            loadNotes(); // Recarrega a lista de anotações
        }
    });

    function getNotes() {
        return JSON.parse(localStorage.getItem('notes-app') || '[]');
    }

    function saveNote(text) {
        const notes = getNotes();
        const note = {
            id: Date.now(),
            content: text
        };
        notes.push(note);
        localStorage.setItem('notes-app', JSON.stringify(notes));
    }

    function loadNotes() {
        notesList.innerHTML = ''; // Limpa a lista atual
        const notes = getNotes();
        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');

            const contentElement = document.createElement('span');
            contentElement.classList.add('note-content');
            contentElement.textContent = note.content;

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', () => {
                deleteNote(note.id);
                loadNotes();
            });

            noteElement.appendChild(contentElement);
            noteElement.appendChild(deleteButton);
            notesList.appendChild(noteElement);
        });
    }

    function deleteNote(id) {
        let notes = getNotes();
        notes = notes.filter(note => note.id !== id);
        localStorage.setItem('notes-app', JSON.stringify(notes));
    }
});