/// <reference types="cypress" />


// describe('Empty Test', () => {
//     it('test one', () => {
//         cy.viewport(1280, 720)
        // cy.visit('https://www.instagram.com/')
        // cy.get('.rgFsT > :nth-child(1)').click()
        // cy.contains('Get the app.')
        // cy.get('.kEKum > :nth-child(3)').click()
        //  cy.contains('Get the app.').should('exist')
        // cy.contains('[data-testid=title]').should('exist')
        // cy.contains('[data-testid=title]').should('exist')
        // cy.contains('[data-testid=title]').should('exist')
        // cy.contains('[data-testid=title]').should('exist')
        // cy.contains('[data-testid=title]').should('exist')
        
   // })
 //   })
//  describe('Products api', () => {
//     context('GET /produtos', () => {
//         it('should return a list with all products', () => {
//             cy.request({
//                 method: 'GET',
//                 url: 'https://serverest.dev/produtos'
//             })
//                 .should((response) => {
//                     expect(response.status).to.eq(200)
//                     expect(response.body.quantidade).to.eq(2)
//                     expect(response.body.produtos.length).to.be.eq(2);
//                     expect(response.body.produtos[0]).to.have.all.keys(
//                       'nome', 'preco', 'descricao', 'quantidade', '_id'
//                     )
//                 });
//         });
//     });
// });
describe('Products api', () => {
    context('GET /produtos', () => {
        it('should return a list with all products', () => {
            cy.request({
                method: 'GET',
                url: 'https://www.instagram.com/'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                });
        });
    });
});
// describe('Products api', () => {
//     context('GET /produtos', () => {
//         it('should return a list with all products', () => {
//             cy.request({
//                 method: 'POST',
//                 url: 'https://serverest.dev/produtos'
//             })
//                 .should((response) => {
//                     cy.log(JSON.stringify(response.body))
//                 });
//         });
//     });
// });