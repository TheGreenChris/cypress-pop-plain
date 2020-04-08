/// <reference types = "cypress"/>

import { BasePage } from "./basepage";

export class DefaultPage extends BasePage{
    locators: {
        textinput: string;
    };
    constructor(){
        super();
        this.locators = {
            /*
            * Insert the pagespecific locators like:
            */
           textinput: '#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'
        }
    };
    enterTerm(searchTerm: string){
        cy.get(this.locators.textinput).type(searchTerm + '{enter}');
    };
};