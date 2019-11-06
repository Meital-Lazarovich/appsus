'use strict';

export default {
    name: 'note-preview',
    props: ['note'],
    template: `
        <section class="note-preview text-center">
            <router-link :to="noteDetailsLink" :style="{'background-color': note.color}">
                <h3>{{ note.data }}</h3> 
                <p>note type: {{note.type}}</p>
                <p v-if="note.isPinned">P!</p>
            </router-link>
        </section>
    `,
    computed: {
        noteDetailsLink() {
            return `/book`
        }
    },
    created() {
        console.log('this.note', this.note);
        console.log('this.note.id', this.note.id);
    }
}


