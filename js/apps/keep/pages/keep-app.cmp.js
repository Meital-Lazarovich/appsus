'use strict';


import {keepService} from '../services/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js'
import noteList from '../cmps/note-list.cmp.js'


export default {
    name: 'keep-app',
    template: `
        <section class="keep-app">
            <note-add @added="addNote"></note-add>
            <note-list :notes="notesToShow" @changed="updateNotes" @removed="removeNote" 
            @pinned="pinNote" @unpinned="unpinNote" @added="addNote" @editedTodo="editTodo"></note-list>

        </section>
    `,
    data(){
        return {
            notes: []
        }
    },
    methods: {
        addNote(note) {
            keepService.addNote(note)
                .then(notes => this.notes = notes)
        },
        updateNotes() {
            keepService.updateNotes()
                .then(notes => this.notes = notes)
        },
        removeNote(note) {
            keepService.removeNote(note)
                .then(notes => this.notes = notes)
        },
        pinNote(note) {
            keepService.pinNote(note)
                .then(notes => this.notes = notes)
        },
        unpinNote(note) {
            keepService.unpinNote(note)
                .then(notes => this.notes = notes)
        },
        editTodo(note) {
            keepService.getTodos(note)
            keepService.updateNotes()
                .then(notes => this.notes = notes)
        }
    },
    computed: {
        notesToShow() {
            return this.notes
        }
    },
    created() {
        keepService.getNotes()
            .then((notes) => this.notes = notes)
    },
    components: {
        noteList,
        noteAdd
    }
}


