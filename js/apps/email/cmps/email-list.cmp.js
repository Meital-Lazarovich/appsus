'use strict'

import emailPreview from './email-preview.cmp.js'

export default  {
    props: ['emails'],
    template: `
    <section class="emails-list-container">
        <div v-for="email in emails">
            <email-preview :class="{bold: !email.isRead}" :email="email" @click.native="toggleEmail(email)">
            </email-preview>
            <div v-if="isReading && selectedEmail === email">{{shortTxt(email.body)}} 
                <router-link :to="'/email/details/' + email.id">
                    <button>ReadMore</button>
                </router-link>
                <button>Delete</button>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            isReading: false,
            selectedEmail: null 
        }
    },
    methods: {
        handleIsRead(emailId){
            this.$emit('toggleIsRead', emailId)
        },
        shortTxt(txt){
            return `${txt.substring(0, 50)}...`;
        },
        toggleEmail(email) {
            this.isReading = !this.isReading
            this.selectedEmail = email
        }
    },
    computed: {
        
    },
    components: {
        emailPreview
    }
}