describe('Read and Create Book', () => {

  beforeEach('Login aplikasi', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Login').click()
      cy.get('input[name=username]').type('admin')
      cy.get('input[name=password]').type('admin')
      cy.get('button[type=submit]').as('Masuk').click()
      cy.url().should('contain', '/adminPage')
    })

    
    it('Read Book', () => {
      cy.url().should('contain', '/adminPage')
      cy.request('https://deploy-web-muhamadthoriqahnaf.vercel.app/api/book').as('bookRequest');
      cy.get('@bookRequest').then(books => {
        expect(books.status).to.eq(200);
        cy.log(books);
    });
    })
    
    it('Add Book', () => {
      cy.url().should('contain', '/adminPage')
      cy.contains('Tambah').click()
      cy.get('input[id=judul]').type('Introduction to Algorithms')
      cy.get('input[id=penulis]').type('Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein')
      cy.get('input[id=terbit]').type('1989')
      cy.get('textarea[id=deskripsi]').type('Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers.')
      cy.get('input[id=file]').selectFile('cypress/fixtures/introduction-to-algorithm.jpg')
      cy.get('button[id=tambahModal]').click({force:true, multiple:true})
      cy.url().should('contain', '/adminPage')
      cy.contains('Berhasil menambahkan buku!')
    })

    it('Logout', () => {
      cy.url().should('contain', '/adminPage')
      cy.contains('Logout').click()
    })

})