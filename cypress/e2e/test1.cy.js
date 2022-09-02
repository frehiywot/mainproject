describe('test.cy.js',()=>{
    it('should visit',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
       // cy.get('.search-button').click()
        
        //assertion

        cy.url().should('include', 'seleniumPractise')
       cy.get('.product').should('have.length',5)    //I got error on 5 elements

        //how to handle invisible items or elements check with wisible and without visible
        cy.get('.product:visible').should('have.length',4)

        //parent child chaining and use of find function
        cy.get('.products').find('.product').should('have.length',4)   
        //cy.get('.nth-chld(3) > .product-action > button').click
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    })
})
