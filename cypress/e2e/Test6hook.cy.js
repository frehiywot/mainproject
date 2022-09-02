describe("cypress hooks",()=>{

     before(()=>{ 

    })

    after(()=>{ 

    })

    beforeEach(()=>{ 

    })
    afterEach(()=>{ 

    })

    it("Handling Table",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
         
        cy.controlTable('Ivory','Receptionist')

        //cy.get("tr td:nth-child(2)").each(($el,$index,$list)=>{
           // let txt = $el.text()
           //if(txt.includes('Receptionist')){
              //  cy.get("tr td:nth-child(2)").eq($index).prev().then((price)=>{
                  // let m = price.text()
                  // expect(m).to.be.equal('Ivory')
               // })
          // }
         //})

    })
})
        

