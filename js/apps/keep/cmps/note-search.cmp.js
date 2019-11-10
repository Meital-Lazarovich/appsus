'use strict';

export default {
    name: 'note-search',
    template: `
    <section class="note-search">
       <i class="fa fa-search"></i>
       <input type="search"></div>
    </section>
    `,
    data() {
        return {
            filterBy: {byName: '', fromPrice: 0, toPrice: 10000}
        }
    },
    methods: {
        onFilter() {
            let filter = {...this.filterBy};
            this.$emit('filtered', filter);
        }
    }
}


