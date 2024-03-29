'use strict';

export default {
    name: 'book-filter',
    template: `
    <section class="book-filter flex justify-center align-center">
        <h2>Filter by</h2>
        <form @submit.prevent="onFilter" class="filter-form flex justify-center align-center">
            <div>
            Name:
            <input type="text" placeholder="Book Name" v-model="filterBy.byName" />
            </div>
            <div>
            Price from: 
            <input class="number-input" type="number" v-model.number="filterBy.fromPrice" />
            to: 
            <input class="number-input" type="number" v-model.number="filterBy.toPrice" />
            </div>
            <button>Filter</button>
        </form>
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


