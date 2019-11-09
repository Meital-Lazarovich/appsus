'use strcit'

import emailList from './email-list.cmp.js'
import emailFilter from './email-filter.cmp.js'
import emailService from '../services/email.service.js'
import {sortDate} from '../../../services/util.service.js'
import {sortSubjects} from '../../../services/util.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default {
    template: `
        <section class="email-inbox flex column">
            <email-filter @filtered="setFilter" @sort="onSort"/>
            <email-list :emails="emailsToShow" @updateUnreadCount="updateUnreadCount"/>
        </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
            unreadEmailCount: 0,
        }
    },
    methods: {
        setFilter(filter) {
            this.filterBy = filter
        },
        onDelete(id) {
            emailService.deleteEmail(id)
            this.updateUnreadCount()
        },
        ShowStared(){
            let staredEmails = this.emails.filter(email => email.stared === true)
            this.emails = staredEmails;            
        },
        ShowInbox() {
            emailService.getEmails()
            .then(res => {
                this.emails = res
                eventBus.$emit('emails', res)
                this.updateUnreadCount()
            })
        },
        onSort(sortBy) {
            if (!sortBy) return this.ShowInbox()
            if (sortBy === 'date') {
                return this.emails.sort(sortDate)
            }
            else return this.emails.sort(sortSubjects)
        },
        updateUnreadCount() {            
            let unreadEmails = this.emails.filter(email => !email.isRead)
                this.unreadEmailCount = unreadEmails.length
                eventBus.$emit('unreadCount', this.unreadEmailCount)
        }
    },
    computed: {
        emailsToShow() {
            
            if (!this.filterBy) return this.emails;
            var isRead = this.filterBy.isRead;
            var isShowStared = this.filterBy.isShowStared
            var regex = new RegExp(`${this.filterBy.subject}`, 'i');
            return this.emails.filter(email => {
                if (isRead === null) return regex.test(email.subject)
                if (isShowStared) return regex.test(email.subject) && email.isRead === isRead && email.stared === true
                return regex.test(email.subject) && email.isRead === isRead;
            })
        }
        
    },
    created() {
        this.ShowInbox()
        eventBus.$on('delete', this.onDelete)
        eventBus.$on('showStared', this.ShowStared)
        eventBus.$on('inbox', this.ShowInbox)
    },
    components: {
        emailList,
        emailFilter,
    }
}