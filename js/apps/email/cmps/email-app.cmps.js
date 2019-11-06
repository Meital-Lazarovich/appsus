'use strict'

import emailList from '../cmps/email-list.cmp.js'
import emailService from '../services/email.service.js'

export default {
    template: `
        <section class="root">
            <h1>Email App</h1>
            <email-list :emails="emails"></email-list>
        </section>
    `,
    data() {
        return {
            emails: emailService.getEmails()
        }
    },
    methods: {
       
    },
    computed: {
    
    },
    created() {
        
    },
    components: {
        emailList
    }
}