'use strict'

import emailService from '../services/email.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default { 
    props:'',
    template: `
        <section class="email-send">
            <h2 class="compose-header">New Email</h2>

            <form class="email-form">
            <input type="email" placeholder="To" v-model.trim="email.to"/>
            <input type="text" placeholder="Subject" v-model.trim="email.subject"/>
            <textarea v-model="email.body" cols="30" rows="20"></textarea>
            <router-link to="/email/inbox"><button @click="handleEmail()"><i class="fa fa-paper-plane"></i> Send</button></router-link>
            </form>
        </section>
    
    
    `,
    data() {
        return {
            email: {
                to: '',
                subject: '',
                body: ''
            }
        }
    },
    methods: {
        handleEmail() {
            if (this.$route.params.id) this.email.subject = 'Re: '.concat(this.email.subject)
            emailService.addEmail(this.email)
                .then(() => {eventBus.$emit('show-msg', {txt:'Email Sent', type: 'success'})} 
                )
        },
        sendNote(noteTxt) {
            this.email.body = noteTxt      
        }
    },
    created() {
        const emailId = this.$route.params.id;
        if (emailId) {
                emailService.findEmail(emailId)
                    .then(email => {
                        this.email.subject = email.subject;
                        this.email.body = email.body;
                    })
        }
        if (this.$route.query) this.sendNote(this.$route.query.note)
    },
}