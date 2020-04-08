/// <reference types = "cypress"/>

export class BasePage {
    navigate(destinationUrl: string){
        cy.visit(destinationUrl);
    }
}