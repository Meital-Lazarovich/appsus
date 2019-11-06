'use strict';

export default {
    name: 'note-add',
    template: `
    <section class="note-add flex column align-center justify-center">
        <h2></h2>
        <form @submit.prevent="addNote">
            <input type="text" :placeholder="placeholder"/>
            <button>Search</button>
        </form>
    </section>
    `,
    data() {
        return {
            type: null,
            placeholder: 'whats on your mind?'
        }
    },
    methods: {
        onFilter() {
            let filter = {...this.filterBy};
            this.$emit('filtered', filter);
        }
    }
}
