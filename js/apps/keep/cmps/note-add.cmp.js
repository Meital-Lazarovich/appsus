'use strict';


export default {
    name: 'note-add',
    template: `
    <section class="note-add flex align-center justify-center">
        <input type="text" ref="noteInput" :placeholder="inputPlaceholder" @keyup.enter="addNote" v-model="note.data"/>
        <button @click="changeNoteType('text')">TEXT</button>
        <button @click="changeNoteType('img')">IMG</button>
        <button @click="changeNoteType('vid')">VID</button>
        <button @click="changeNoteType('list')">LIST</button>
    </section>
    `,
    data() {
        return {
            note: {
                type: '',
                data: ''
            }
        }
    },
    methods: {
        changeNoteType(type) {
            this.note.type = type
            this.note.data = ''
            this.$refs.noteInput.focus();
        },
        addNote() {
            let note = {...this.note};
            this.$emit('added', note);
            this.changeNoteType(this.note.type)
        }
    },
    computed: {
        inputPlaceholder() {
            if (this.note.type === 'text') return `What's on your mind?`;
            if (this.note.type === 'img') return `Enter image URL`;
            if (this.note.type === 'vid') return `Enter video URL`;
            if (this.note.type === 'list') return `Enter comma separated list`;
        }
    },
    mounted() {
        this.changeNoteType('text')
    }

}
