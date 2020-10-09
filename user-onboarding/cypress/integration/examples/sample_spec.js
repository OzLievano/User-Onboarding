// describe('My First Test', function () {
//     it('Finds an element', function () {
//         cy.visit('http://localhost:3000')
        
//         cy.pause()

//         cy.contains('type').click()
//         cy.url()
//         .should('include','/commands/actions')
//         cy.get('.action-email')
//             .type('fake@email.com')
//             .should('have.value','fake@email.com')
//         //Arrange - setup initial app state
//         //--visit a web page
//         //-- query an element
//         // Act - take an action
//         // -- interact with that element
//         //Assert - make an assertion
//         // -- make an assertion about the page content
//     })
// })

describe("testing for MVP",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    })
    it("name passed",()=>{
        cy.get('#name').type('ozzy').should('have.value','ozzy')
    })
})