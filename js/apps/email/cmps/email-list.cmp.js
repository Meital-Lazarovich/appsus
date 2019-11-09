'use strict'

import emailPreview from './email-preview.cmp.js'
import emailService from '../services/email.service.js'

export default {
    props: ['emails'],
    template: `
    <section class="emails-container">
        <email-preview v-for="email in emails"
                        :key="email.id"
                        :class="{read: !email.isRead}" 
                        class="email flex column" 
                        :email="email"
                        @stared="starEmail"
                        @markAs="onMarkAs"
                        @read="onRead"
                         />

        
    </section>
    `,
    data() {
        return {
            selectedEmail: null
        }
    },
    methods: {
        starEmail(id) {
            emailService.starEmail(id)
                .then(res => console.log(res)
                )
        },
        onMarkAs(id){
            emailService.markAs(id)
            this.$emit('updateUnreadCount')
        },
        onRead(id){ 
            emailService.toggleIsRead(id)                       
            this.$emit('updateUnreadCount')
        }
    },
    computed: {

    },
    components: {
        emailPreview
    }
}