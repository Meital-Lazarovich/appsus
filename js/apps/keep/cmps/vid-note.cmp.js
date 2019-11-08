'use strict';

export default {
    name: 'vid-note',
    props: ['data'],
    template: `
        <section class="vid-note">
            <iframe width="100%" height="180" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" :src="vidUrl"></iframe>
            <i class="fa fa-youtube"></i>
        </section>
    `,
    computed: {
        vidUrl() {
            var url = this.data.typed;
            var vidId = url.substr(url.indexOf('?v=') + 3)
            return `https://www.youtube.com/embed/${vidId}`
        }
    }
}