import welcomePage from './pages/welcome-page.cmp.js';
import emailApp from './apps/email/cmps/email-app.cmps.js';
import emailInbox from './apps/email/cmps/email-inbox.cmp.js';
import emailDetails from './apps/email/cmps/email-details.cmp.js';
import emailCompose from './apps/email/cmps/email.compose.cmp.js';
import bookApp from './apps/books/pages/book-app.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
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
        path: '/email',
        component: emailApp,
        children: [
            {
            path: 'compose',
            component: emailCompose
        },
        {
            path: 'inbox',
            component: emailInbox
        },
        {
            path: 'details/:id',
            component: emailDetails
        }
    ]
    },
    
    {
        path: '/book',
        component: bookApp
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