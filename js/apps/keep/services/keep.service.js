import {storageService} from '../../../services/storage.service.js'
import {makeId} from '../../../services/util.service.js'


export const keepService = {
    getNotes,
    addNote,
    getNoteById,
    updateNote,
    removeNote
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
        let fullTodos = todos.map(todo => ({txt: todo, isDone: false, id: makeId()}))
        note.data = fullTodos
    }
    var newNote = {
        id: makeId(),
        type: note.type,
        data: note.data,
        isPinned: false,
        color: 'white'
    }
    gNotes.unshift(newNote)
    gNotes.forEach((note, idx) => {
        if (note.pinnedPos) {
            gNotes.splice(idx, 1);
            gNotes.splice(note.pinnedPos, 0, note)
        }
    })
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve();
}

function getNoteById(noteId) {
    gNotes = storageService.load(NOTES_KEY);
    var note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note);
}

function updateNote(note) {
    gNotes = storageService.load(NOTES_KEY);
    var noteId = note.id
    var noteIdx = gNotes.findIndex(note => note.id === noteId)
    gNotes[noteIdx] = note;
    storageService.store(NOTES_KEY, gNotes);
    return Promise.resolve(gNotes);
}

function removeNote(note) {
    var noteId = note.id
    var noteIdx = gNotes.findIndex(note => note.id === noteId)
    gNotes.splice(noteIdx, 1);
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve(gNotes);
}


var gNotes = [
    {
        id: 'jkje8S',
        type: 'vidNote',
        data: 'https://www.youtube.com/watch?v=fyvmLRmkRaU',
        isPinned: false,
        color: 'white'
    },
    {
        id: '2A3d',
        type: 'textNote',
        data: `MOJITO RECIPE: 
        2 parts Bacardi Carta Blanca
        ½ fresh lime
        12 fresh mint leaves
        Dash of soda water
        Crushed ice
        To Garnish: Sprig of Fresh Mint`,
        isPinned: false,
        color: 'lemonchiffon'
    },
    {
        id: '92Pq',
        type: 'imgNote',
        data: 'https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg',
        isPinned: false,
        color: 'pink'
    },
    {
        id: '204sK',
        type: 'todoNote',
        data: [
            {
                txt: 'Buy fresh limes',
                isDone: true,
                id: '99djes'
            },
            {
                txt: 'Take the dog for a walk',
                isDone: false,
                id: 'iqksO8a'
            }
        ],
        isPinned: false,
        color: 'lightcyan'
    }
]



