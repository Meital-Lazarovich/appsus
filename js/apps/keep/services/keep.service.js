import {storageService} from '../../../services/storage.service.js'
import {makeId} from '../../../services/util.service.js'


export const keepService = {
    getNotes,
    addNote,
    getNoteById,
    updateNote
}

const NOTES_KEY = 'notes'

function getNotes() {
    var notes = storageService.load(NOTES_KEY)
    if (!notes) {
        notes = gNotes;
        storageService.store(NOTES_KEY, notes)    
    }
    gNotes = notes;    
    return Promise.resolve(notes);
}

function addNote(note) {
    if (note.type === 'todoNote') {
        let todos = note.data.split(', ')
        let todosNew = todos.map(todo => ({txt: todo, isDone: false, id: makeId()}))
        note.data = todosNew
    }
    var newNote = {
        id: makeId(),
        type: note.type,
        data: note.data,
        isPinned: false,
        color: 'white'
    }
    gNotes.unshift(newNote)
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve();
}

function getNoteById(noteId) {
    gNotes = storageService.load(NOTES_KEY);
    var note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note);
}

function updateNote(note) {
    var noteId = note.id
    var noteIdx = gNotes.findIndex(note => note.id === noteId)
    gNotes[noteIdx] = note;
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve(gNotes);
}


var gNotes = [
    {
        id: '2A3d',
        type: 'textNote',
        data: 'How to make the best magic ever',
        isPinned: false,
        color: 'white'
    },
    {
        id: '92Pq',
        type: 'imgNote',
        data: 'https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg',
        isPinned: true,
        color: 'white'
    },
    {
        id: '204sK',
        type: 'todoNote',
        data: [
            {
                txt: 'buy a new wand',
                isDone: false,
                id: '99djes'
            },
            {
                txt: 'fix the moving img',
                isDone: true,
                id: 'iqksO8a'
            }
        ],
        isPinned: false,
        color: 'lightblue'
    }
]



