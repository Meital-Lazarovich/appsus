'use strict'

import { eventBus } from "../../../services/event-bus.service.js";

export default  {
    props: ['email'],
    template: `
    <section class="email-prev-container" @click="toggleEmail">
        <div>Me</div> 
        <div class="email-content">
            <span>{{email.subject}}</span> - 
            <span class="prev-txt">{{prevTxt(email.body)}}...</span>
        </div>
        <div>☆</div>
        <div class="more-info" v-if="isReading">{{shortTxt(email.body)}}
            <router-link :to="'/email/details/' + email.id">
                <button>ReadMore</button>
            </router-link>
            <button @click.stop="handleDelete(email.id)">Delete</button>
        </div>  
    </section>
    `,
    data() {
        return {
            isReading: false,
            // selectedEmail: ''
        }
    },
    methods: {
        prevTxt(emailTxt) {
            return emailTxt.substring(0, 20)
        },
        toggleEmail() {
            this.isReading = !this.isReading
            // this.selectedEmail = this.email
        },
        shortTxt(txt){
            return `${txt.substring(0, 50)}...`;
        },
        handleDelete(emailId) {
            eventBus.$emit('delete', emailId)
        }
    },
    computed: {
    
    }
}