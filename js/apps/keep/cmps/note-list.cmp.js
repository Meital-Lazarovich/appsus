'use strict';

import notePreview from './note-preview.cmp.js'

export default {
    name: 'note-list',
    props: ['notes'],
    template: `
    <section class="note-list">
        <note-preview v-for="currNote in notes" :note="currNote" @click.native="onSelectNote(currNote.id)" :key="currNote.id">
        </note-preview>
    </section>
    `,
    data() {
        return {
            selectedNote: null
        }
    },
    methods: {
        onSelectNote(noteId) {
            this.selectedNote = noteId;
            this.$emit('selected', this.selectedBook);
        }
    },
    components: {
        notePreview
    }
}


