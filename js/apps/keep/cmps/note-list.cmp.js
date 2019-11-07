'use strict';

import textNote from './text-note.cmp.js'
import imgNote from './img-note.cmp.js'
import todoNote from './todo-note.cmp.js'

export default {
    name: 'note-list',
    props: ['notes'],
    template: `
    <section class="note-list">
        <div class="note-preview text-center flex column space-between" v-for="note in notes" 
            :key="note.id" :style="{'background-color': note.color}" @click="toggleSelectedNote(note)" 
            :class="{selected: note === selectedNote}">
            <component :is="note.type"  :data="note.data"></component>
            <div class="opts" v-if="selectedNote === note">
                <div class="color-btns-line text-center flex align-center space-around">
                    <button v-if="openedProp === 'color'" class="color-btn" 
                    @click.stop="changeColor(color, note)" v-for="color in colors" 
                    :style="{'color': color}">⬤</button> 
                </div>
                <button @click.stop="updateNote(note)"><i class="fa fa-check"></i></button>
                <button @click.stop="openProp('color')" :class="{selected: openedProp === 'color'}">
                    <i class="fa fa-paint-brush"></i></button>
                <button @click.stop="removeNote(note)"><i class="fa fa-trash"></i></button>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            selectedNote: null,
            openedProp: null,
            colors: ['white', 'pink', 'palegreen', 'lightcyan', 'lemonchiffon', 'lavender']
        }
    },
    methods: {
        toggleSelectedNote(note) {
            this.selectedNote = (this.selectedNote === note) ? null : note
            this.openedProp = null;
        },
        openProp(prop) {
            this.openedProp = prop
        },
        changeColor(color, note) {
            note.color = color
        },
        updateNote(note) {
            this.$emit('changed', note);
            this.selectedNote = null;
            this.openedProp = null;
        },
        removeNote(note) {
            this.$emit('removed', note);
            this.selectedNote = null;
            this.openedProp = null;
        }
    },
    components: {
        textNote,
        imgNote,
        todoNote
    }
}


