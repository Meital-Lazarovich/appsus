'use strict'

import emailList from '../cmps/email-list.cmp.js'
import sideNav from '../cmps/email-sideNav.cmp.js'
import emailService from '../services/email.service.js'

export default {
    template: `
        <section class="root">
            <h1>Email App</h1> 
            <side-nav></side-nav>
            <email-list :emails="emails"></email-list>
        </section>
    `,
    data() {
        return {
            emails: []
        }
    },
    methods: {
       
    },
    computed: {
    
    },
    created() {
        emailService.getEmails()
            .then(res => this.emails = res)
    },
    components: {
        emailList,
        sideNav
    }
}