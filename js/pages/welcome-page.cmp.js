'use strict';


export default {
    name: 'welcome-page',
    template: `
        <section class="welcome-page text-center">
            <img src="https://www.employmenthelp.org/wp-content/uploads/Workshops-Header-Background.png"/>
            <h1>Start Organizing!</h1>
            <div class="links flex align-center space-between">
                <router-link to="/email/inbox">Email</router-link>
                <router-link to="/keep">Keep</router-link>
                <router-link to="/book">Books</router-link>
            </div>
            <footer class="footer flex column justify-center">
                <div><i class="fa fa-copyright"></i> Meital & Itay All Rights Reserved 2019</div>
            </footer>
        </section>
    `
}


