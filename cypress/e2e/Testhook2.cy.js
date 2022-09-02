import Registerpage from "./PageObject/Registerpage"

describe("cypress hooks",()=>{

    let dt=

        before(()=>{ 
            cy.fixture("example2").then(function(data){

                dt=data
            }

    // })

    // after(()=>{ 

    // })

    // beforeEach(()=>{ 

    // })
    // afterEach(()=>{ 
            )

        })

    it("Handling Table",()=>{
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
       cy.controlTable(dt.name[3],dt.position[2])
    

    })
    it.only("POM",()=>{

        cy.visit("https://rahulshettyacademy.com/angularpractice//")

        const rp = new Registerpage();

        rp.getname().eq(0).type(dt.name[4])
        //cy.get("input[name='name'").eq(0).type(dt.name)
        rp.getemail().type(dt.email)
        rp.getgender().select(dt.gender).should('have.value',dt.gender)
    })
})
