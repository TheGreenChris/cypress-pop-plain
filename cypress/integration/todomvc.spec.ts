/// <reference path="../support/index.d.ts" />

import { TodoMVCPage } from "../pageobjects/todomvcpage";

describe('adding ToDos', ()=>{
    const todoMVCPage = new TodoMVCPage();
    before(()=>{
        todoMVCPage.navigate('http://todomvc-app-for-testing.surge.sh');
        // todoMVCPage.navigate('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000');
    });

    it('add without timeout', ()=>{
        todoMVCPage.addTodo("Einkaufen gehen");
    })

    it('should create new todo', ()=>{
        todoMVCPage.validateTodoText(1, "Einkaufen gehen");
        cy.get('.toggle').should('not.to.be.checked');
    });

});