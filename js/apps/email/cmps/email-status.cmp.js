'use-strict'

export default {
    props:['unreadCount'],
    template: `
        <section class="email-status">
            <h2>Unread Emails Status</h2>
            {{unreadCount}}
        </section>
    
    `
}