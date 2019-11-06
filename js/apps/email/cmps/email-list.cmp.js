'use strict'

import emailPreview from './email-preview.cmp.js'

export default  {
    props: ['emails'],
    template: `
    <section class="emails-list-container">
        <div v-for="email in emails">
            <router-link :to="'/email/details/' + email.id">
                <email-preview :class="{bold: !email.isRead}" :email="email" @click.native="handleIsRead(email.id)">
                </email-preview>
        </router-link>
        </div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        handleIsRead(emailId){
            this.$emit('toggleIsRead', emailId)
        }
    },
    computed: {
        
    },
    components: {
        emailPreview
    }
}