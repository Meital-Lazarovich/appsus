'use strict';

export default {
    name: 'text-note',
    props: ['data'],
    template: `
        <section class="text-note">
            <p>{{data.typed}}</p>
            <i v-if="!isMail" class="fa fa-font"></i>
            <i v-if="isMail" class="fa fa-envelope"></i>
        </section>
    `,
    data() {
        return {
            isMail: false
        }
    },
    methods: {
        updateNoteData() {
            var isDone = !todo.isDone
            todo.isDone = isDone
            this.$emit('updated');
        }
    },
    created() {
        if (this.data.typed.includes('Sent from My Mail App')) {
            this.isMail = true;
        }
    }
}