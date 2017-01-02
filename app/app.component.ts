import {Component} from '@angular/core';

interface ITodo {
    title: string;
    completed: boolean;

}
const todos: ITodo[] = [
    {
        title: 'Изучить AngularJs',
        completed: true,
    },
    {
        title: 'Изучить Angular 2',
        completed: false,
    },
    {
        title: 'Написать приложение',
        completed: false,
    }


];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})

export class AppComponent {
    title = 'Angular 2 toDO';
    todos: ITodo[]= todos;

    toggle(todo: ITodo) {
        todo.completed = !todo.completed;
    }

    delete(todo: ITodo) {
        let index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1)
        }
    }
}
