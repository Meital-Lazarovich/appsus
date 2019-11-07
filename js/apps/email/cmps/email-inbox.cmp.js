'use strcit'

import emailList from './email-list.cmp.js'
import emailFilter from './email-filter.cmp.js'
import emailService from '../services/email.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

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
            unreadEmailCont: 0,
        }
    },
    methods: {
        setFilter(filter) {
            this.filterBy = filter
        },
        onDelete(id) {
            emailService.deleteEmail(id)
        },
        toggleIsShowStared(){
            this.isShowStared = true
            this.showStaredEmails()
        },
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            var isRead = this.filterBy.isRead;
            var regex = new RegExp(`${this.filterBy.subject}`, 'i');
            return this.emails.filter(email => {
                if (isRead === null) return regex.test(email.subject)
                return regex.test(email.subject) && email.isRead === isRead;
            })
        },
    },
    created() {
        emailService.getEmails()
            .then(res => {
                this.emails = res
                eventBus.$emit('emails', res)
                let unreadEmails = this.emails.filter(email => !email.isRead)
                eventBus.$emit('unreadCount', unreadEmails.length)
            })
        eventBus.$on('delete', this.onDelete)
    },
    components: {
        emailList,
        emailFilter,
    }
}