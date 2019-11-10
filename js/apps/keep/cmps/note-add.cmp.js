'use strict';


export default {
    name: 'note-add',
    template: `
    <section class="note-add flex align-center space-between">
        <input type="text" ref="noteInput" :placeholder="inputPlaceholder" @keyup.enter="addNote" 
            v-model="note.data"/>
        <div class="types">
            <button @click="changeNoteType('textNote')" :class="{selected: note.type === 'textNote'}"
                title="text note"><i class="fa fa-font"></i>
            </button>
            <button @click="changeNoteType('imgNote')" :class="{selected: note.type === 'imgNote'}"
                title="image note"><i class="fa fa-image"></i>
            </button>
            <button @click="changeNoteType('vidNote')" :class="{selected: note.type === 'vidNote'}"
                title="video note"><i class="fa fa-youtube"></i>
            </button>
            <button @click="changeNoteType('todoNote')" :class="{selected: note.type === 'todoNote'}"
                title="list note"><i class="fa fa-list"></i>
            </button>
        </div>
    </section>
    `,
    data() {
        return {
            note: {
                type: '',
                data: '',
                color: 'white'
            }
        }
    },
    methods: {
        changeNoteType(type) {
            this.note.type = type
            this.note.data = ''
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
            if (this.note.type === 'vidNote') return `Enter Youtube URL`;
            if (this.note.type === 'todoNote') return `Enter comma separated list`;
        }
    },
    mounted() {
        this.changeNoteType('textNote')
    }

}
