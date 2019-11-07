'use strict';


import {keepService} from '../services/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js'
import noteList from '../cmps/note-list.cmp.js'


export default {
    name: 'keep-app',
    template: `
        <section class="keep-app">
            <note-add @added="addNote"></note-add>
            <note-list :notes="notesToShow" @changed="updateNote" @removed='removeNote'></note-list>

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
                .then(() => keepService.getNotes())
                .then(notes => this.notes = notes)
        },
        updateNote(note) {
            keepService.updateNote(note)
        },
        removeNote(note) {
            keepService.removeNote(note)
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


