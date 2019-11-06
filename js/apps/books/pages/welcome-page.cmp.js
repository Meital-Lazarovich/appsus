'use strict';

import appHeader from '../cmps/app-header.cmp.js'

export default {
    name: 'welcome-page',
    template: `
        <section class="welcome-page-container text-center">
            <app-header></app-header>
            <img src="http://images6.fanpop.com/image/photos/40600000/Book-Banner-Header-booknerd-40619463-950-323.jpg"/>
            <h1>Welcome!</h1>
        </section>
    `,
    components: {
        appHeader
    }
}


