import welcomePage from './pages/welcome-page.cmp.js';
import bookApp from './apps/books/pages/book-app.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
import bookWelcomePage from './apps/books/pages/welcome-page.cmp.js';
import bookAboutPage from './apps/books/pages/about-page.cmp.js';
import bookDetails from './apps/books/pages/book-details.cmp.js';
import bookAdd from './apps/books/pages/book-add.cmp.js';


const routes = [
    {
        path: '/',
        component: welcomePage
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/',
        component: welcomePage
    },
    {
        path: '/book',
        component: bookWelcomePage
    },
    {
        path: '/book/list',
        component: bookApp
    },
    {
        path: '/book/about',
        component: bookAboutPage
    }, 
    {
        path: '/book/details/:id',
        component: bookDetails
    },
    {
        path: '/book/add',
        component: bookAdd
    }
]

const router = new VueRouter({routes})

export default router;