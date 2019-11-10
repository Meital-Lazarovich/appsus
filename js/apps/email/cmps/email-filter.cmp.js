export default {
    template: `
    <section class="email-filter flex justify-center">
    <section class="search-by">
       <i class="fa fa-search"></i>
       <input type="search" v-model="filterBy.subject" placeholder="Search Mail" @input="setFilterBy"/>
    </section>
        <!-- <input type="text" class="search-by" 
        placeholder="🔍 Search Mail" v-model="filterBy.subject" @input="setFilterBy"/> -->
        <div class="filter-btns flex">
            <button @click="showAll">All</button>
            <button @click="showUnread">Unread</button>
            <button @click="showRead">Read</button>
        </div>
        <select name="" id="" class="sort-by" v-model="sortBy" @change="sort">
            <option value="">No Sort</option>
            <option value="date">Date</option>
            <option value="Subject">Subject</option>
        </select>
    </section>
    `,
    data() {
        return {
            filterBy: {
                subject : '',
                isRead: null,
            },
            sortBy: ''
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
        },
        sort(){
            this.$emit('sort', this.sortBy);
        }
    },
    computed: {
        
    }
}