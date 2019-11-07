'use strict'

import sideNav from '../cmps/email-sideNav.cmp.js'
import emailInbox from './email-inbox.cmp.js'
import {eventBus} from '../../../services/event-bus.service.js'

export default {
    template: `
        <section class="email-app flex">
            <side-nav/>
            <router-view></router-view>
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
        
    },
    created() {
       
    },
    components: {
        sideNav,
        emailInbox
    }
}