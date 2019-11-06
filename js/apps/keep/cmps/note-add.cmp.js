'use strict';


export default {
    name: 'note-add',
    template: `
    <section class="note-add flex column align-center justify-center">
        <h2></h2>
        <form @submit.prevent="addNote">
            <input type="text" :placeholder="inputPlaceholder"/>
            <button type="submit">Search</button>
        </form>
    </section>
    `,
    data() {
        return {
            noteType: 'text',
            inputPlaceholder: ''
        }
    },
    methods: {
        setPlaceholder(noteType) {
            let ph;
            if (noteType === 'text') ph = `What's on your mind?`;
            if (noteType === 'img') ph = `Enter image URL`;
            if (noteType === 'list') ph = `Enter comma separated list`;
            this.inputPlaceholder = ph;
        }
    },
    created() {
        this.setPlaceholder('text')
    }

}
