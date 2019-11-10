'use strict'

import emailService from '../services/email.service.js' 

export default  {
    props: [],
    template: `
    <section class="email-details-container">
       <h1>details</h1>
       <div>Email Subject : {{emailToShow.subject}}</div>
       <div>Sent At : {{handleEmailDate(emailToShow.sentAt)}}</div>
       <div>Email Body : {{emailToShow.body}}</div>
       <router-link :to="'/email/compose/' + emailToShow.id">
                <button>Replpy</button>
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
    computed: {
        
    },
    components: {
        
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