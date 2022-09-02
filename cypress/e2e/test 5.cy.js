describe("Test Alert, Table and Mouse over",()=>{

    it("handle Alert",()=>{
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get("#name").type("Fre")
        cy.get("#alertbtn").click()

        cy.get("#name").type("Fre")
        cy.get("#confirmbtn").click()

        cy.on("window:alert",(text)=>{
           
            expect(text).to.equal("Hello Fre, share this practice page and share your knowledge")
        }) 
        cy.on('window:confirm',(str)=>{
           expect(str).to.equal("Hello Fre, Are you sure you want to confirm?")

    })
})
    
})


