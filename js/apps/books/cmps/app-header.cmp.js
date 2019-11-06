'use strict';


export default {
    name: 'app-header',
    template: `
        <section class="app-header flex space-between align-center">
            <h1>Miss Book</h1>
            <nav>
                <router-link exact to="/book">Home</router-link>
                <router-link exact to="/book/list">Books</router-link>
                <router-link exact to="/book/about">About</router-link>
            </nav>
        </section>
    `
}


