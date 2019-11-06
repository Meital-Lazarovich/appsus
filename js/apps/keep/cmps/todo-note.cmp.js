'use strict';

export default {
    name: 'todo-note',
    props: ['data'],
    template: `
        <section class="todo-note">
            <div v-for="todo in data" @click="toggleIsDone(todo)">
                <input type="checkbox" :id="todo.id" :checked="!!todo.isDone" />
                <label for="todo.id" :class="{ marked: todo.isDone }">{{todo.txt}}</label>
            </div>
        </section>
    `,
    methods: {
        toggleIsDone(todo) {
            var isDone = !todo.isDone
            todo.isDone = isDone
        }
    }
}