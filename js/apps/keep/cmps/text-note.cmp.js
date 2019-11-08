'use strict';

export default {
    name: 'text-note',
    props: ['data'],
    template: `
        <section class="text-note">
            <p>{{data.typed}}</p>
            <i class="fa fa-font"></i>
        </section>
    `,
    methods: {
        updateNoteData() {
            var isDone = !todo.isDone
            todo.isDone = isDone
            this.$emit('updated');
        }
    }
}