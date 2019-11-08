'use strict'

import { eventBus } from "../../../services/event-bus.service.js";

export default {
    props: ['email'],
    template: `
    <section class="email-prev-container" @click="toggleEmail">
        <div class="star" :class="{gold:isStared}" @click.stop="onStarClick"><i class="fa fa-star"></i></div>
        <div>Me</div> 
        <div class="email-content">
            <span>{{email.subject}}</span> - 
            <span class="prev-txt">{{prevTxt(email.body)}}...</span>
        </div>
        <div class="read-btns">
            <button v-if="!email.isRead" @click.stop="handleMarkAs">Mark as Read</button>
            <button v-else @click.stop="email.isRead = !email.isRead">Mark as Unread</button>
        </div>
        <div class="email-date">{{handleDate(email.sentAt)}}</div>
        <div class="more-info" v-if="isReading">{{shortTxt(email.body)}}
            <router-link :to="'/email/details/' + email.id">
                <button><i class="fa fa-expand"></i></button>
            </router-link>
            <router-link :to="'/email/compose/' + email.id">
                <button><i class="fa fa-reply"></i></button>
            </router-link>
            <button @click.stop="handleDelete(email.id)"><i class="fa fa-trash"></i></button>
        </div>  
    </section>
    `,
    data() {
        return {
            isReading: false,
            isStared: false
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
        shortTxt(txt) {
            return `${txt.substring(0, 50)}...`;
        },
        handleDelete(emailId) {
            eventBus.$emit('delete', emailId)
        },
        onStarClick() {
            this.$emit('stared', this.email.id)
            this.isStared = !this.isStared
        },
        handleDate(timeStamp) {
            let date = '' + new Date(timeStamp)
            return date.substring(0, 15)
        },
        handleMarkAs(){
            this.email.isRead = !this.email.isRead
            this.$emit('markAs', this.email.id)
        }
        
    },
    computed: {

    },
    created() {
        if (this.email.stared) this.isStared = true
    }
}