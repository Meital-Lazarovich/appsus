'use strict'

import emailPreview from './email-preview.cmp.js'

export default  {
    props: ['emails'],
    template: `
    <section class="emails-list-container">
        <div v-for="email in emails"><router-link :to="'/email/details/' + email.id">
            <email-preview :email="email"></email-preview></router-link>
        </div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        handleBookClick(bookId) {
            this.$emit('selected', bookId)
        }
    },
    computed: {
        
    },
    components: {
        emailPreview
    }
}