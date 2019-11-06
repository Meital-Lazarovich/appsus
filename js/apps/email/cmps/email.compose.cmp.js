'use strict'

import emailService from '../services/email.service.js'

export default { 
    props:'',
    template: `
        <section class="review-add">
            <h2>New Email</h2>

            <form class="email-form">
            <input type="email" placeholder="To" v-model.trim="email.to"/>
            <input type="text" placeholder="Subject" v-model.trim="email.subject"/>
            <textarea v-model="email.body" cols="30" rows="5"></textarea>
            <button @click.prevent="handleEmail()">Send</button>
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
            emailService.addEmail(this.email)
                .then(res => {console.log(res)}
                )
        }
    }
}