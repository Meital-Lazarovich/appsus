'use strict';

export default {
    name: 'img-note',
    props: ['data'],
    template: `
        <section class="img-note">
            <img :src="data"/>
        </section>
    `,
}