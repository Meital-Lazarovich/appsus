'use strict'

export default  {
    props: ['email'],
    template: `
    <section class="email-prev-container">
        <div class="email">
            {{email.subject}}
        </div>
    </section>
    `,
    data() {
        return {
            
        }
    },
    computed: {
    
    }
}