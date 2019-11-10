'use strict';

export default {
    name: 'note-search',
    template: `
    <section class="note-search">
       <i class="fa fa-search"></i>
       <input type="search" v-model="filter" @input="setfilter"/>
    </section>
    `,
    data() {
        return {
            filter: null
        }
    },
    methods: {
        setfilter() {
            this.$emit('filtered', this.filter)
        }
    }
}


