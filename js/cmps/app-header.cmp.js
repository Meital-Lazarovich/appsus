'use strict';


export default {
    name: 'app-header',
    template: `
        <section class="app-header flex space-between align-center">
        <router-link exact to="/"><h1>Appsus</h1></router-link>
            <button @click="toggleMenu"><i class="fa fa-bars"></i></button>
            <nav :class="{'opened-menu': !!this.isMenuOpen}">
                <router-link exact to="/">Home</router-link>
                <router-link to="/email/inbox">Email</router-link>
                <router-link to="/keep">Keep</router-link>
                <router-link to="/book">Books</router-link>
            </nav>
        </section>
    `,
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
    }
}


