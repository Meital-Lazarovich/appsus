'use strict';

export default {
    name: 'text-note',
    props: ['data'],
    template: `
        <section class="text-note">
            <p>{{data}}</p>
        </section>
    `,
}