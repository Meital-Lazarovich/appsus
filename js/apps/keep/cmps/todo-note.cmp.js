'use strict';

export default {
    name: 'todo-note',
    props: ['data'],
    template: `
        <section class="todo-note">
            <div v-for="todo in data.todos">
                <input class="todo-checkbox" type="checkbox" :id="todo.id" :checked="!!todo.isDone" />
                <label for="todo.id" :class="{ marked: todo.isDone }" @click.stop="toggleIsDone(todo)">{{todo.txt}}</label>
            </div>
            <i class="fa fa-list"></i>
        </section>
    `,
    methods: {
        toggleIsDone(todo) {
            var isDone = !todo.isDone
            todo.isDone = isDone
            this.$emit('updated');
        }
    }
}