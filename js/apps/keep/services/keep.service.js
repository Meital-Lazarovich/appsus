import {storageService} from '../../../services/storage.service.js'
import {makeId} from '../../../services/util.service.js'


export const keepService = {
    getNotes,
    addNote,
    getNoteById,
    updateNotes,
    removeNote,
    pinNote,
    unpinNote,
    getTodos
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
    gNotes = storageService.load(NOTES_KEY)
    var newNote = {
        id: makeId(),
        type: note.type,
        data: {typed: note.data},
        isPinned: false,
        color: note.color
    }
    if (newNote.type === 'todoNote' && typeof newNote.data.typed === 'string') getTodos(newNote);
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

function getTodos(note) {
    let todos = note.data.typed.split(',')
    let fullTodos = todos.map(todo => ({txt: todo, isDone: false, id: makeId()}))
    note.data.todos = fullTodos
}

var gNotes = [
    {
        id: 'jkje8S',
        type: 'vidNote',
        data: {typed: 'https://www.youtube.com/watch?v=fyvmLRmkRaU'},
        isPinned: false,
        color: 'white'
    },
    {
        id: '2A3d',
        type: 'textNote',
        data: {typed: `MOJITO RECIPE: 2 parts white rum, ½ fresh lime,12 fresh mint leaves, Dash of soda water, Crushed ice. To Garnish: Sprig of Fresh Mint`},
        isPinned: false,
        color: 'lemonchiffon'
    },
    {
        id: '92Pq',
        type: 'imgNote',
        data: {typed: 'https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg'},
        isPinned: false,
        color: 'pink'
    },
    {
        id: '204sK',
        type: 'todoNote',
        data: {
            typed: 'Buy fresh limes, Take the dog for a walk',
            todos: [
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
            ]
        },
        isPinned: false,
        color: 'lightcyan'
    },
    {
        id: 'giE35',
        type: 'textNote',
        data: {typed: `Dear diary, after this project I found out that Vue is not so bad. I'll update you again after the final project.`},
        isPinned: false,
        color: 'lavender'
    },
    {
        id: 'oLspe56',
        type: 'imgNote',
        data: {typed: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*'},
        isPinned: false,
        color: 'lightcyan'
    },
    {
        id: 'ioel42',
        type: 'vidNote',
        data: {typed: 'https://www.youtube.com/watch?v=T14QnZMTPOQ'},
        isPinned: false,
        color: 'white'
    }
]



