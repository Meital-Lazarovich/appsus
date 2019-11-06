'use strict';

import textNote from './text-note.cmp.js'
import imgNote from './img-note.cmp.js'
import todoNote from './todo-note.cmp.js'

export default {
    name: 'note-preview',
    props: ['note'],
    template: `
        <section class="note-preview text-center" :style="{'background-color': note.color}">
            <div>
                <component :is="note.type"  :data="note.data"></component>
            </div>
        </section>
    `,
    computed: {
        noteDetailsLink() {
            return `/book`
        }
    },
    components: {
        textNote,
        imgNote,
        todoNote
    }
}


