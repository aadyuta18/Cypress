/// <reference types="cypress" />

    //         describe('Empty Test', () => {
    //              it('test one', () => {
    //         cy.viewport(1280, 720)
    //         cy.visit('https://www.instagram.com/')
    //     //  describe('Products api', () => {
    //     //     context('GET /produtos', () => {
       
    //     // it('should return a list with all products', () => {
    //     //     cy.request({
    //     //         method: 'GET',
    //     //         url: 'https://twitter.com/'
    //     //     })
    //     //         .should((response) => {
    //     //             expect(response.status).to.eq(200)
    //     //             expect(response.body.quantidade).to.eq(2)
    //     //             expect(response.body.produtos.length).to.be.eq(2);
    //     //             expect(response.body.produtos[0]).to.have.all.keys(
    //     //               'nome', 'preco', 'descricao', 'quantidade', '_id'
    //     //             )
    //     //         });
    //     // });
    // });
    //         });
    // describe('Given the Users api', () => {
    //     context('When I send POST /usuarios', () => {
    //       it('Then it should create a new user', () => {
    //         cy.request({
    //           method: 'POST',
    //           url: '/usuarios',
    //           body: {
    //             nome: "Dumb Joe",
    //             email: "dumb.joe@qa.com.br",
    //             password: "test",
    //             administrador: "true"
    //           }
    //         })
    //           .should((response) => {
    //             expect(response.status).eq(201)
    //             expect(response.body.message).eq("Cadastro realizado com sucesso")
    //           });
    //       });
    //     });
    //   });
    let fakeUser;

describe('Given the Users api', () => {
  beforeEach(() => {
    cy.task('freshUser').then((user) => {
      fakeUser = user;
      cy.log(JSON.stringify(fakeUser))
    });
  });

  context('When I send POST /usuarios', () => {
    it('Then it should create a new user', () => {
      cy.request({
        method: 'POST',
        url: '/usuarios',
        body: fakeUser
      })
        .should((response) => {
          expect(response.status).eq(201)
          expect(response.body.message).eq("Cadastro realizado com sucesso")
        });
    });
  });
});