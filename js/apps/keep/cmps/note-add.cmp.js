'use strict';


export default {
    name: 'note-add',
    template: `
    <section class="note-add flex align-center justify-center">
        <input type="text" ref="noteInput" :placeholder="inputPlaceholder" @keyup.enter="addNote" v-model="note.data"/>
        <button @click="changeNoteType('textNote')">TEXT</button>
        <button @click="changeNoteType('imgNote')">IMG</button>
        <button @click="changeNoteType('vidNote')">VID</button>
        <button @click="changeNoteType('todoNote')">LIST</button>
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
            if (this.note.type === 'textNote') return `What's on your mind?`;
            if (this.note.type === 'imgNote') return `Enter image URL`;
            if (this.note.type === 'vidNote') return `Enter video URL`;
            if (this.note.type === 'todoNote') return `Enter comma separated list`;
        }
    },
    mounted() {
        this.changeNoteType('textNote')
    }

}
