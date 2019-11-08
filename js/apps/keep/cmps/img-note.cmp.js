'use strict';

export default {
    name: 'img-note',
    props: ['data'],
    template: `
        <section class="img-note">
            <img class="note-img" :src="data.typed"/>
            <i class="fa fa-image"></i>
        </section>
    `,
}