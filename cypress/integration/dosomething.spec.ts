/// <reference path="../support/index.d.ts" />

import { DefaultPage } from "../pageobjects/defaultpage";

describe('default actions', ()=>{
    const defaultPage = new DefaultPage();
    before(()=>{
        /*
        * setup this specific default actions run
        */
    });
    beforeEach(()=>{
        /*
        * preconditions for each of the following tests
        */
       defaultPage.navigate('https://www.google.com');   
    });
    it('enters a term',()=>{
        defaultPage.enterTerm('COVID-19');
    });
    afterEach(()=>{

    });
    after(()=>{

    });
});