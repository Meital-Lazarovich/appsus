'use strict'

import emailPreview from './email-preview.cmp.js'

export default  {
    props: ['emails'],
    template: `
    <section class="emails-container">
        <email-preview v-for="email in emails"
                        :key="email.id"
                        :class="{bold: !email.isRead}" 
                        class="email" 
                        :email="email" 
                         />

        
    </section>
    `,
    data() {
        return {
            selectedEmail: null 
        }
    },
    methods: {
        handleIsRead(emailId){
            this.$emit('toggleIsRead', emailId)
        },
        
        handleDelete(emailId) {
            this.$emit('delete', emailId)
        }
    },
    computed: {
        
    },
    components: {
        emailPreview
    }
}