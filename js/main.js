'use strict';

import router from './routes.js'
import userMsg from './cmps/user-msg.cmp.js';


new Vue({
    router,
    el: '#appsus',
    template: `
    <section>
        <user-msg></user-msg>
        <router-view></router-view>
    </section>
    `,
    components: {
        userMsg
    }
});




