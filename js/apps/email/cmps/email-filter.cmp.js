export default {
    template: `
    <section class="email-filter">
        <h2>Filter</h2>
        <input type="text" class="filter-by" 
        placeholder="By Name" v-model="filterBy.subject" @input="setFilterBy"/>
    </section>
    `,
    data() {
        return {
            filterBy: {
                subject : '',
                // read: ''
            }
        }
    },
    methods: {
        setFilterBy(){
            
            this.$emit('filtered', this.filterBy)
        }
    },
    
    created() {
        
    }
}