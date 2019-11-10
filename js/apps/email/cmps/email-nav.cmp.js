'use sctrict'

import emailStatus from './email-status.cmp.js'
import { eventBus } from '../../../services/event-bus.service.js'


export default {
    props: [],
    template: `
            <section class="side-nav" :class="{'opened-menu': !!this.isMenuOpen}">
                <div class="screen" @click="toggleMenu"></div>    
                <button @click="toggleMenu" class="burger-btn"><i class="fa fa-bars"></i></button>
                <div class="nav" @click=toggleMenu()>
                    <div class="nav-item"><router-link to="/email/compose"><button class="compose-btn"><i class="fa fa-plus"></i> Compose</button></router-link></div>
                    <div class="nav-item"><router-link to="/email/inbox"><button class="nav-btn" @click="onInbox"><i class="fa fa-inbox"></i> Inbox <email-status class="nav-item" :unreadCount="unreadCount"></email-status></button></router-link></div>
                    <div class="nav-item"><button class="nav-btn" @click="onStared"><i class="fa fa-star"></i> Stared Emails</button></div>
                </div>
            </section>
    `,
    data() {
        return {
            unreadCount: [],
            isMenuOpen: false
        }
    },
    methods: {
        onStared() {
            eventBus.$emit('showStared')
        },
        onInbox() {
            eventBus.$emit('inbox')
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    },
    computed: {
        
    },
    created() {
        eventBus.$on('unreadCount', (emails) => {
            this.unreadCount = emails;
        })
    },
    components: {
        emailStatus
    }

}