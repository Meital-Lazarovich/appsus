'use strict'

import emailPreview from './email-preview.cmp.js'

export default  {
    props: ['emails'],
    template: `
    <section class="emails-list-container">
        <div v-for="email in emails">
            
                <email-preview :class="{bold: !email.isRead}" :email="email" @click.native="isReading = !isReading">
                </email-preview>
        
        <div v-if="isReading">{{shortTxt(email.body)}} 
            <router-link :to="'/email/details/' + email.id">
                <button>ReadMore</button>
            </router-link>
             <button>Delete</button></div>
        </div>
    </section>
    `,
    data() {
        return {
            isReading: false
        }
    },
    methods: {
        handleIsRead(emailId){
            this.$emit('toggleIsRead', emailId)
        },
        shortTxt(txt){
            return `${txt.substring(0, 50)}...`;
        }
    },
    computed: {
        
    },
    components: {
        emailPreview
    }
}