'use strict'

import emailList from '../cmps/email-list.cmp.js'
import sideNav from '../cmps/email-sideNav.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailService from '../services/email.service.js'
import {eventBus} from '../../../services/event-bus.service.js'

export default {
    template: `
        <section class="email-app flex column align-center space-around">
            <h1>Email App</h1>
            <email-filter @filtered="setFilter"/>
            <side-nav :unreadCount="unreadEmails"/>
        </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
        }
    },
    methods: {
        setFilter(filter){    
            this.filterBy = filter  
        },
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            
            var regex = new RegExp(`${this.filterBy.subject}`, 'i');

            return this.emails.filter(email => {
               return regex.test(email.subject)
            })
        },
        unreadEmails() {
            let unreadCount = emailService.getUnreadEmails()
            return unreadCount.length
        }
    },
    created() {
        emailService.getEmails()
            .then(res => {
                this.emails = res
                eventBus.$emit('emails', res)
            })
    },
    components: {
        emailList,
        sideNav,
        emailFilter,
    }
}