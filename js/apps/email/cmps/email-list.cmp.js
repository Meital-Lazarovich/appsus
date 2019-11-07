'use strict'

import emailPreview from './email-preview.cmp.js'
import emailService from '../services/email.service.js'

export default {
    props: ['emails'],
    template: `
    <section class="emails-container">
        <email-preview v-for="email in emails"
                        :key="email.id"
                        :class="{bold: !email.isRead}" 
                        class="email flex align-center" 
                        :email="email"
                        @stared="starEmail"
                         />

        
    </section>
    `,
    data() {
        return {
            selectedEmail: null
        }
    },
    methods: {
        handleIsRead(emailId) {
            this.$emit('toggleIsRead', emailId)
        },
        starEmail(id) {
            emailService.starEmail(id)
                .then(res => console.log(res)
                )

        }
    },
    computed: {

    },
    components: {
        emailPreview
    }
}