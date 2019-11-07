'use-strict'

export default {
    props:['unreadCount'],
    template: `
        <section class="email-status">
            <span>({{unreadCount}})</span>
            
        </section>
    
    `
}