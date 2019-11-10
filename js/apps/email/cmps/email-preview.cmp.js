'use strict'

import { eventBus } from "../../../services/event-bus.service.js";

export default {
    props: ['email'],
    template: `
    <section class="email-prev-container" @click="toggleEmail">
        <div class="flex justify-center">
        <div class="read-btns">
                <div class="mark-as-btn" v-if="email.isRead" @click.stop="handleMarkAs" title="Mark as read"><i class="fa fa-envelope-open"></i></div>
                <div class="mark-as-btn" v-else @click.stop="handleMarkAs" title="Mark as unread"><i class="fa fa-envelope"></i></div>
            </div>
            <div class="star" :class="{gold:isStared}" title="Star email" @click.stop="onStarClick"><i class="fa fa-star"></i></div>
            <div>Me</div> 
            <div class="email-content">
                <span>{{email.subject}}</span> 
                <span class="prev-txt">- {{prevTxt(email.body)}}...</span>
            </div>
            <div class="email-date">{{handleDate(email.sentAt)}}</div>
        </div>
        <div class="more-info" v-if="isReading"><span class="email-short-txt">{{shortTxt(email.body)}}</span>
            <router-link :to="'/email/details/' + email.id">
                <button title="Read more" @click="updateRead(email.id)"><i class="fa fa-expand"></i></button>
            </router-link>
            <router-link :to="'/email/compose/' + email.id">
                <button title="Reply" @click="updateRead(email.id)"><i class="fa fa-reply"></i></button>
            </router-link>
            <button title="Delete" @click.stop="handleDelete(email.id)"><i class="fa fa-trash"></i></button>
            <button title="Save as a note" @click.stop="saveNote"><i class="fa fa-sticky-note"></i></button>
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
            let windowWidth = window.innerWidth;
            let date = '' + new Date(timeStamp)
                if (windowWidth < 850) {
                    date = new Date(timeStamp);
                   return `${date.getDate()}/${date.getMonth()}/ ${date.getFullYear()}` 
                }
            return date.substring(0, 15)
        },
        handleMarkAs(){
            this.$emit('markAs', this.email.id)
        },
        updateRead(id){
            this.email.isRead = true;
            this.$emit('read', id)
        },
        saveNote(){
            this.$router.push({ 
                path: '/keep', query: { mail: `${this.email.subject.toUpperCase()}: ${this.email.body}
                (Sent from My Mail App)` }
            })
        }
        
    },
    computed: {

    },
    created() {
        if (this.email.stared) this.isStared = true
    }
}