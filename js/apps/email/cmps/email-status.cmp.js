'use-strict'

export default {
    props:['unreadCount'],
    template: `
        <section class="email-status">
            <h2>Unread Emails Status: {{unreadCount}}</h2>
            
        </section>
    
    `
}