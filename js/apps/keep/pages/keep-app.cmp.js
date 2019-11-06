'use strict';


import {keepService} from '../services/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js'


export default {
    name: 'keep-app',
    template: `
        <section class="keep-app">
            <h1>keep it!</h1>
            <note-add @added="addNote"></note-add>
            <pre v-if="notes.length > 0" v-for="note in notes">{{note}}</pre>
            <note-list :notes="notesToShow" @selected="selectNote"></note-list>

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
        selectNote(note) {
            console.log('clicked note:', note);
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
        // noteList
        noteAdd
    }
}


