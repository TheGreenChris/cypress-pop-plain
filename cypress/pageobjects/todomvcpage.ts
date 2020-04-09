/// <reference types = "cypress"/>

import { BasePage } from "./basepage";

export class TodoMVCPage extends BasePage{
    locators: {
        todoInput: string
        enteredTodoElement: string
    };
    public constructor(){
        super();
        this.locators = {
            todoInput: '.new-todo',
            enteredTodoElement: '.todo-list li:nth-child(1) label'
            // enteredTodoElement: (todoIndex as string) => `.todo-list li:nth-child(${todoIndex}) label`
        };
    };

    public addTodo(todoText: String){
        //cy.get((this.locators.todoInput as string), {timeout: 6000}).type('Einkaufen gehen{enter}');
        cy.get((this.locators.todoInput as string)).type(todoText.concat('{enter}'));
    };

    validateTodoText(todoIndex: number, expectedText: String){
        cy.get((this.locators.enteredTodoElement as string)).should('have.text', expectedText);
        // cy.get((this.locators.enteredTodoElement(todoIndex) as string)).should('have.text', expectedText);
    };
}