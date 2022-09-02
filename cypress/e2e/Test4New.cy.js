
        describe('test.cy.js',()=>{
        it('should visit',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         
         })
        it('verify value from anywhere in the table',function () {
        cy.get('table >tbody >tr').contains('td','Appium').should('be.visible')
        })


         it('check condtional logic in the table',function () {
         cy.get('table >tbody>tr td:nth-child(2)').each(($el,index,$list) =>{
        
           var text=$el.text()
           if(text.includes('WebServices')){
            cy.get('table >tbody>tr td:nth-child(3)').eq(index).then(function(price){
                var actualprice=price.text()
                expect(actualprice.trim()).to.equal('35')
            

           })
        

         }


          })
        })
          it('handle Mouse hover',()=>{
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            //cy.get('div .mouse-hover-content').invoke('show')
            //cy.contains('Top').click()


          cy.contains('Top').click({force:true})
          cy.url().should('include','top')
        })

         })
