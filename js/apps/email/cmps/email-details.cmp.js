'use strict'

import emailService from '../services/email.service.js' 

export default  {
    props: [],
    template: `
    <section class="email-details">
            <router-link to="/email/inbox"><i class="fa fa-arrow-left back-arrow-details"></i></router-link>
        <div class="email-info flex space-between">
           <h3>{{emailToShow.subject}}</h3>
           <div>{{handleEmailDate(emailToShow.sentAt)}}</div>
       </div>
       <div class="email-body">{{emailToShow.body}}</div>
       <router-link :to="'/email/compose/' + emailToShow.id">
                <button class="details-reply-btn"><i class="fa fa-reply"></i> Reply</button>
            </router-link>
    </section>
    `,
    data() {
        return {
            emailToShow: {}
        }
    },
    methods: {
        loadEmail() {
            const emailId = this.$route.params.id;            
            emailService.findEmail(emailId)
                .then(email =>{
                    
                    this.emailToShow = email
                    // this.nextBookId = emailService.getNextIdBook(email.id)
                } )
        },
        handleEmailDate(timeStamp){
            let date = '' + new Date(timeStamp)
            return date.substring(0, 15)
        }
        
    },
    created() {
        this.loadEmail();
    },
    watch: {
        '$route.params.id'() {
            this.loadEmail();
        }
    }
}