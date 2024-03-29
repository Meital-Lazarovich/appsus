'use strict';

import textNote from './text-note.cmp.js'
import imgNote from './img-note.cmp.js'
import todoNote from './todo-note.cmp.js'
import vidNote from './vid-note.cmp.js'

export default {
    name: 'note-list',
    props: ['notes'],
    template: `
    <section class="note-list" @click="cleanSelected">
        <div class="note-preview text-center flex column space-between" v-for="(note, idx) in notes" 
            :key="note.id" :style="{'background-color': note.color}" @click.stop="selectNote(note)" 
            :class="{selected: note === selectedNote}">
            <img class="note-pin-img" v-if="!!note.isPinned" src="./img/pin.png" 
                @click.stop="togglePinNote(note)"/>
            <component :is="note.type" :data="note.data" @updated="updateNotes"></component>
            <div class="opts" v-if="selectedNote === note">
                <textarea type="text" v-if="openedProp === 'edit'" v-model="note.data.typed" 
                    @keyup.enter="editNote(note)" ref="editInput" 
                    :style="{'background-color': note.color}"></textarea>
                <div class="color-btns-line text-center flex align-center space-around">
                    <button v-if="openedProp === 'color'" class="color-btn" 
                    @click.stop="changeColor(color, note)" v-for="color in colors" 
                    :style="{'color': color}" :title="color">⬤</button> 
                </div>
                <button @click.stop="togglePinNote(note)" :class="{selected: !!note.isPinned}" title="pin note">
                    <i class="fa fa-thumb-tack"></i></button>
                <button @click.stop="toggleProp('color')" :class="{selected: openedProp === 'color'}" 
                    title="change note color"><i class="fa fa-paint-brush"></i></button>
                <button @click.stop="toggleProp('edit')" :class="{selected: openedProp === 'edit'}" title="edit note">
                    <i class="fa fa-edit"></i></button>
                <button @click.stop="copyNote(note)" title="copy note"><i class="fa fa-copy"></i></button>
                <button @click.stop="removeNote(note)" title="delete note"><i class="fa fa-trash"></i></button>
                <router-link to="/email/compose"><button @click.stop="sendNote(note)" title="send note as email">
                    <i class="fa fa-paper-plane"></i></button>
                </router-link>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            selectedNote: null,
            openedProp: null,
            colors: ['white', 'pink', 'lightgreen', 'lightcyan', 'lemonchiffon', 'lavender']
        }
    },
    methods: {
        selectNote(note) {
            this.selectedNote = note
        },
        toggleProp(prop) {
            if (this.openedProp === prop) this.cleanSelected()
            else this.openedProp = prop
            // if (prop === 'edit') this.$refs.editInput.focus();
        },
        changeColor(color, note) {
            note.color = color
            this.updateNotes()
            this.cleanSelected()
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
            var noteToAdd = {type: note.type, data: note.data.typed, color: note.color}
            this.$emit('added', noteToAdd);
            this.cleanSelected()
        },
        editNote(note) {
            this.cleanSelected()
            if (note.type === 'todoNote') this.$emit('editedTodo', note);
            else this.updateNotes()
        },
        sendNote(note) {
            var noteTxt = note.data.typed
            this.$router.push({ path: '/email/compose', query: { note: noteTxt }})
        },
        saveMail(mail) {
            delete this.$route.query.mail
            var noteToAdd = {type: 'textNote', data: mail, color: '#ee8787'}
            this.$emit('added', noteToAdd);
        }
    },
    created() {
        var query = this.$route.query
        if(query.mail){
            this.saveMail(query.mail)
            var pageUrl = window.location.href;
            var newUrl = pageUrl.substr(0, pageUrl.indexOf('?'))
            window.location.replace(`${newUrl}?mail=`)
        }
    },
    components: {
        textNote,
        imgNote,
        todoNote,
        vidNote
    }
}


