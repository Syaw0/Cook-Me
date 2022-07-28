describe('first when user come into page show him the landpage', () => { 
    

    it('landPage rendering', () => {
        cy.visit("/")
        cy.get('#landingPage_cover').should("exist")
        
    });

    it("when user click the get start page get into a home page"  , ()=>{

        cy.get('#landingPage_card_button').click()
        cy.url().should('contain' , "home")
        cy.get('#recipeLinks_con').should("exist")
    })

})


describe('Navigation', () => {


    it('home page navigation', () => {
        cy.visit('/about');
        cy.get('[href="/home"]').click()
        cy.get('#recipeLinks_con').should("exist")
    });
    
    it('go to about page', () => {
        cy.get('[href="/about"]').click()
        cy.get('.rare_data_con').should("exist").should("contain" , "ABOUT COOK ME")
    });
    
    it('go to Api Ref', () => {
        cy.get('[href="/apiRef"]').click()
        cy.get('.rare_data_con').should("exist").should("contain" , "API REFERENCE")
    });

    it('go to Faq Page', () => {
        cy.get('[href="/faq"]').click()
        cy.get('.rare_data_con').should("exist").should("contain" , "FAQ")
    });
})


describe('Home Page', () => {

    
    
    
    it('click on the cheaps and active them ', () => {
        cy.visit('/home');
        cy.get('#preview_con_text').should("exist")
        cy.get('[title="Goat recipes"]').click()
        cy.get('#preview_con_text').should("not.exist")
    });

    it('when choose items loader display', () => {
        cy.get('[title="Goat recipes"]').click()
        cy.get('.balls').should("exist")
    });
    
    it("when click on the other cheaps" , ()=>{
        cy.get('[title="Goat recipes"]').click()
        cy.url().should("contain" , 'Goat')
        let s = cy.stub(window , 'fetch').resolves({})
        fetch()
        cy.get('[title="Dessert recipes"]').click()
        cy.url().should("contain" , "Dessert")
        expect(s).to.be.called
        
    })

})

describe('in Home Page wait for element to be show when click on item category', () => {



    it('choose item ...', () => {
        cy.get('[title="Goat recipes"]').click()
        cy.get('.Card_Imgcon').should("exist")
    });


    it('click on the card', () => {
        cy.get('.Card_Imgcon').click()
        cy.get('.recipeDetailCard_top_title').should('exist')
    });

    it('back to home when click on the back button', () => {
        cy.get('#detailRecipeBtn_goback').click()
        cy.get('#recipeCard_con').should('exist')
    });
    

})