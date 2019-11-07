'use strict';

import router from './routes.js'
import userMsg from './cmps/user-msg.cmp.js';
import appHeader from './cmps/app-header.cmp.js'


new Vue({
    router,
    el: '#appsus',
    template: `
    <section class="app">
        <app-header></app-header>
        <user-msg></user-msg>
        <router-view></router-view>
    </section>
    `,
    components: {
        userMsg,
        appHeader
    }
});




