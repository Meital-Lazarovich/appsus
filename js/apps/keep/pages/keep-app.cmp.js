'use strict';

import {eventBus} from '../../../services/event-bus.service.js'
import {keepService} from '../services/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import noteSearch from '../cmps/note-search.cmp.js'


export default {
    name: 'keep-app',
    template: `
        <section class="keep-app">
            <note-search @filtered="filterNotes"></note-search>
            <note-add @added="addNote"></note-add>
            <note-list :notes="notesToShow" @changed="updateNotes" @removed="removeNote" 
            @pinned="pinNote" @unpinned="unpinNote" @added="addNote" @editedTodo="editTodo"></note-list>

        </section>
    `,
    data(){
        return {
            notes: [],
            filter: null
        }
    },
    methods: {
        addNote(note) {
            keepService.addNote(note)
                .then(notes => this.notes = notes)
                .then(() => {
                    const msg = {
                        txt: `Note was successfully added!`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                })
                .catch(err => {
                    const msg = {
                        txt: `Something went wrong! (${err})`,
                        type: 'error'
                    }
                    eventBus.$emit('show-msg', msg);
                })
        },
        updateNotes() {
            keepService.updateNotes()
                .then(notes => this.notes = notes)
        },
        removeNote(note) {
            keepService.removeNote(note)
                .then(notes => this.notes = notes)
                .then(() => {
                    const msg = {
                        txt: `Note was successfully deleted!`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                })
                .catch(err => {
                    const msg = {
                        txt: `Something went wrong! (${err})`,
                        type: 'error'
                    }
                    eventBus.$emit('show-msg', msg);
                })
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
        },
        filterNotes(filter) {
            this.filter = filter
        }
    },
    computed: {
        notesToShow() {
            if (!this.filter) return this.notes;
            let regex = new RegExp(`${this.filter}`, 'i');
            return this.notes.filter(note => {
                return (note.type === 'todoNote' || note.type === 'textNote') 
                    && regex.test(note.data.typed)
            }
            )
        }
    },
    created() {
        keepService.getNotes()
            .then((notes) => this.notes = notes)
    },
    components: {
        noteList,
        noteAdd,
        noteSearch
    }
}


