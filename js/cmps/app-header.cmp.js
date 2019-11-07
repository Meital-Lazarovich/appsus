'use strict';


export default {
    name: 'app-header',
    template: `
        <section class="app-header flex space-between align-center">
            <h1>Appsus</h1>
            <nav>
                <router-link exact to="/">Home</router-link>
                <router-link to="/email/inbox">Email</router-link>
                <router-link to="/keep">Keep</router-link>
                <router-link to="/book">Books</router-link>
            </nav>
        </section>
    `
}


