'use strict';

import textNote from './text-note.cmp.js'
import imgNote from './img-note.cmp.js'
import todoNote from './todo-note.cmp.js'
import vidNote from './vid-note.cmp.js'

export default {
    name: 'note-list',
    props: ['notes'],
    template: `
    <section class="note-list">
        <div class="note-preview text-center flex column space-between" v-for="(note, idx) in notes" 
            :key="note.id" :style="{'background-color': note.color}" @click="toggleSelectedNote(note)" 
            :class="{selected: note === selectedNote}">
            <img class="note-pin-img" v-if="!!note.isPinned" src="../../img/pin.png" 
                @click.stop="togglePinNote(note)"/>
            <component :is="note.type"  :data="note.data" :note="note" @updated="updateNoteData"></component>
            <div class="opts" v-if="selectedNote === note">
                <div class="color-btns-line text-center flex align-center space-around">
                    <button v-if="openedProp === 'color'" class="color-btn" 
                    @click.stop="changeColor(color, note)" v-for="color in colors" 
                    :style="{'color': color}">⬤</button> 
                </div>
                <button @click.stop="togglePinNote(note)" :class="{selected: !!note.isPinned}">
                    <i class="fa fa-thumb-tack"></i></button>
                <button @click.stop="openProp('color')" :class="{selected: openedProp === 'color'}">
                    <i class="fa fa-paint-brush"></i></button>
                <button @click.stop="copyNote(note)"><i class="fa fa-copy"></i></button>
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
            this.updateNotes()
        },
        updateNotes() {
            this.$emit('changed');
            this.cleanSelected()
        },
        removeNote(note) {
            this.$emit('removed', note);
            this.cleanSelected()
        },
        togglePinNote(note) {
            if (!note.isPinned) this.$emit('pinned', note);
            else this.$emit('unpinned', note);
            this.cleanSelected()
        },
        cleanSelected() {
            this.selectedNote = null;
            this.openedProp = null;
        },
        copyNote(note) {
            var noteToAdd = {type: note.type, data: note.data, color: note.color}
            this.$emit('added', noteToAdd);
            this.cleanSelected()
        },
        updateNoteData(data, note) {
            note.data = data;
            this.updateNotes()
        }
    },
    components: {
        textNote,
        imgNote,
        todoNote,
        vidNote
    }
}


