'use strict';

import textNote from './text-note.cmp.js'
import imgNote from './img-note.cmp.js'
import todoNote from './todo-note.cmp.js'

export default {
    name: 'note-list',
    props: ['notes'],
    template: `
    <section class="note-list">
        <div class="note-preview text-center" v-for="note in notes" :key="note.id" :style="{'background-color': note.color}">
            <component :is="note.type"  :data="note.data"></component>
            <div class="opts"><button @click="toggleColors(note)">BGC</button></div>
            <div class="color-btns-line text-center flex align-center space-around">
                <button v-if="isShowColors && selectedNote === note" class="color-btn" 
                @click="updateColor(color, note)" v-for="color in colors" 
                :style="{'color': color}">⬤</button> 
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            selectedNote: null,
            isShowColors: false,
            colors: ['white', 'pink', 'palegreen', 'lightcyan', 'lemonchiffon', 'lavender']
        }
    },
    methods: {
        toggleColors(note) {
            this.selectedNote = note;
            this.isShowColors = !this.isShowColors
        },
        updateColor(color, note) {
            note.color = color
            this.$emit('changed', note);
            this.toggleColors(note);
        }
    },
    components: {
        textNote,
        imgNote,
        todoNote
    }
}


