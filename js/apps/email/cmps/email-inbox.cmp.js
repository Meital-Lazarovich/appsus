'use strcit'

import emailList from './email-list.cmp.js'
import emailFilter from './email-filter.cmp.js'
import emailService from '../services/email.service.js'
import {eventBus} from '../../../services/event-bus.service.js'

export default {
    template: `
        <section class="email-inbox flex column">
            <email-filter @filtered="setFilter"/>
            <email-list :emails="emailsToShow"/>
        </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
            unreadEmailCont: 0
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
            // let undreadMails = emailService.getUnreadEmails()
            let unreadEmails = this.emails.filter(email => !email.isRead)
            eventBus.$emit('unreadCount', unreadEmails.length)
        }
    },
    created() {
        emailService.getEmails()
            .then(res => {
                this.emails = res
                eventBus.$emit('emails', res)
                let unreadEmails = this.emails.filter(email => !email.isRead)
                eventBus.$emit('unreadCount', unreadEmails.length)
            })
    },
    components: {
        emailList,
        emailFilter,
    }
}