export default {
    template: `
    <section class="email-filter flex column align-center">
        <h2>Search</h2>
        <input type="text" class="filter-by" 
        placeholder="By Subject" v-model="filterBy.subject" @input="setFilterBy"/>
        <div class="sort flex">
            <button @click="showAll">All</button>
            <button @click="showUnread">Unread</button>
            <button @click="showRead">Read</button>
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                subject : '',
                isRead: false
            }
        }
    },
    methods: {
        setFilterBy(){
            this.$emit('filtered', this.filterBy)
        },
        showAll() {
            this.filterBy.isRead = null
            this.$emit('showAll')
        },
        showUnread() {
            this.filterBy.isRead = false;
            this.$emit('filtered', this.filterBy)
        },
        showRead(){
            this.filterBy.isRead = true;
            this.$emit('filtered', this.filterBy)
        }
    }
}