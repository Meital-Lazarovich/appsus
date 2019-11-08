import {storageService} from '../../../services/storage.service.js'
import {makeId} from '../../../services/util.service.js'


export const keepService = {
    getNotes,
    addNote,
    getNoteById,
    updateNotes,
    removeNote,
    pinNote,
    unpinNote
}

const NOTES_KEY = 'notes'

function getNotes() {
    var notes = storageService.load(NOTES_KEY)
    if (!notes) {
        notes = gNotes;
        storageService.store(NOTES_KEY, notes)    
    }
    gNotes = notes;    
    return Promise.resolve(gNotes);
}

function addNote(note) {
    console.log('note', note);
    console.log('type of note data', typeof note.data);
    gNotes = storageService.load(NOTES_KEY)
    if (note.type === 'todoNote' && typeof note.data === 'string') {
        let todos = note.data.split(', ')
        let fullTodos = todos.map(todo => ({txt: todo, isDone: false, id: makeId()}))
        note.data = fullTodos
    }
    var newNote = {
        id: makeId(),
        type: note.type,
        data: note.data,
        isPinned: false,
        color: note.color
    }
    gNotes.unshift(newNote)
    storageService.store(NOTES_KEY, gNotes)
    gNotes.forEach(note => {
        if (note.isPinned) pinNote(note)
    })
    return Promise.resolve(gNotes);
}

function getNoteById(noteId) {
    gNotes = storageService.load(NOTES_KEY);
    var note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note);
}

function updateNotes() {
    storageService.store(NOTES_KEY, gNotes);
    return Promise.resolve(gNotes);
}

function removeNote(note) {
    gNotes = storageService.load(NOTES_KEY)
    var noteId = note.id
    var noteIdx = gNotes.findIndex(note => note.id === noteId)
    gNotes.splice(noteIdx, 1);
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve(gNotes);
}

function pinNote(note) {
    gNotes = storageService.load(NOTES_KEY)
    var noteId = note.id
    var noteIdx = gNotes.findIndex(note => note.id === noteId)
    note.prevIdx = noteIdx
    gNotes.splice(noteIdx, 1);
    gNotes.splice(0, 0, note)
    note.isPinned = true;
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve(gNotes);
}

function unpinNote(note) {
    gNotes = storageService.load(NOTES_KEY)
    var noteId = note.id
    var noteIdx = gNotes.findIndex(note => note.id === noteId)
    gNotes.splice(noteIdx, 1);
    gNotes.splice(note.prevIdx, 0, note)
    note.isPinned = false;
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



