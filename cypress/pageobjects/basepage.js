/// <reference types = "cypress"/>

export class BasePage {
    navigate(destinationUrl){
        cy.visit(destinationUrl);
    }
}