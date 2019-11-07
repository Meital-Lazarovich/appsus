'use sctrict'

import emailStatus from '../cmps/email-status.cmp.js'
import {eventBus} from '../../../services/event-bus.service.js'


export default {
    props:[],
    template: `
            <section class="side-nav">
                <div class="nav-item"><router-link to="/email/compose"><button>Compose</button></router-link></div>
                <div class="nav-item"><router-link to="/email/inbox"><button>Inbox</button></router-link></div>
                <email-status class="nav-item" :unreadCount="unreadCount"></email-status>
            </section>
    `,
    data() {
        return {
            unreadCount: []
        }
    },
    computed: {
        
    },
    created() {
        eventBus.$on('unreadCount', (emails) =>{
            this.unreadCount = emails;
            console.log('unread',emails);
            
        })
    },
    components: {
        emailStatus
    }

}