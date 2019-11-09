'use strict'

import emailService from '../services/email.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default { 
    props:'',
    template: `
        <section class="review-add">
            <h2>New Email</h2>

            <form class="email-form">
            <input type="email" placeholder="To" v-model.trim="email.to"/>
            <input type="text" placeholder="Subject" v-model.trim="email.subject"/>
            <textarea v-model="email.body" cols="30" rows="5"></textarea>
            <router-link to="/email/inbox"><button @click="handleEmail()">Send</button></router-link>
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
        sendNote(noteData) {
            this.email.body = noteData      
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
        eventBus.$on('sentNote', this.sendNote)
    },
}