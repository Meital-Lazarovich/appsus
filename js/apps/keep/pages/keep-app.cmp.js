'use strict';


import {keepService} from '../services/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js'


export default {
    name: 'keep-app',
    template: `
        <section class="keep-app">
            <h1>keep it!</h1>
            <note-add @added="addNote"></note-add>
            <pre v-if="notes.length > 0" v-for="note in notes">note</pre>
            <!-- <note-list></note-list> -->
        </section>
    `,
    data(){
        return {
            notes: []
        }
    },
    methods: {
        addNote(note) {
            keepService.addNote(note);
            this.notes = keepService.getNotes()
        }
    },
    computed: {

    },
    created() {
        this.notes = keepService.getNotes()
    },
    components: {
        // noteList
        noteAdd
    }
}


