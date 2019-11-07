'use sctrict'

import emailStatus from '../cmps/email-status.cmp.js'
import {eventBus} from '../../../services/event-bus.service.js'


export default {
    props:['unreadCount'],
    template: `
            <section class="side-nav">
                <router-link to="/email/compose"><button>Compose</button></router-link>
                <router-link to="/email/inbox"><button>Inbox</button></router-link>
                <email-status :unreadCount="unreadCount"></email-status>
            </section>
    `,
    data() {
        return {
            emails: []
        }
    },
    computed: {
        
    },
    created() {
        eventBus.$on('emails', (emails) =>{
            this.emails = emails;
            console.log(this.emails);
            
        })
    },
    components: {
        emailStatus
    }

}