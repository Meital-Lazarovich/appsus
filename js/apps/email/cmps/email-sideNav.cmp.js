'use sctrict'

import emailStatus from '../cmps/email-status.cmp.js'
import { eventBus } from '../../../services/event-bus.service.js'


export default {
    props: [],
    template: `
            <section class="side-nav">
                <div class="nav-item"><router-link to="/email/compose"><button>Compose</button></router-link></div>
                <div class="nav-item"><router-link to="/email/inbox"><button class="nav-btn">Inbox <email-status class="nav-item" :unreadCount="unreadCount"></email-status></button></router-link></div>
                <div class="nav-item"><button class="nav-btn" @click="onStared">Stared Emails</button></div>
                
            </section>
    `,
    data() {
        return {
            unreadCount: []
        }
    },
    methods: {
        onStared() {
            // eventBus.$emit('showStared')
        }
    },
    computed: {

    },
    created() {
        eventBus.$on('unreadCount', (emails) => {
            this.unreadCount = emails;
            console.log('unread', emails);

        })
    },
    components: {
        emailStatus
    }

}