import {storageService} from '../../../services/storage.service.js'
import {makeId} from '../../../services/util.service.js'


export const keepService = {
    getNotes,
    addNote,
    getNoteById
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
    if (note.type === 'list') note.data = note.data.split(', ')
    var newNote = {
        id: makeId,
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


var gNotes = [
    {
        id: '2A3d',
        type: 'text',
        data: 'How to make the best magic ever',
        isPinned: false,
        color: 'white'
    },
    {
        id: '92Pq',
        type: 'img',
        data: 'https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg',
        isPinned: true,
        color: 'white'
    },
    {
        id: '204sK',
        type: 'list',
        data: [
            {
                txt: 'buy a new wand',
                isDone: false
            },
            {
                txt: 'fix the moving img',
                isDone: true
            }
        ],
        isPinned: false,
        color: 'lightblue'
    }
]

