///<reference types="Cypress"/>
class POcart {
    constructor() {
        this.tShirts='#block_top_menu > ul > li:nth-child(3)',
        this.product='.product_img_link > .replace-2x',
        this.addToCart='.ajax_add_to_cart_button > span',
        this.crossbtn='#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span',
       this.cartbtn='#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a',
       this.productQuantity='.cart_quantity_input'
this.deletebtn='.icon-trash'
    }
    addProduct() {
        cy.get(this.tShirts).click()
       
      cy.get( this.addToCart).click()
      cy.wait(5000)
      cy.get(this.crossbtn).click({force:true})
      cy.get(this.cartbtn).click({force:true})
      cy.get(this.productQuantity).should('have.value', '1')
       


    }
  editProduct() {
    cy.get('.icon-plus').click()
      const prod = cy.get(this.productQuantity).should('be.visible')
       prod.should('have.value', '2')
    }
    deleteProduct() {
        cy.get(this.deletebtn).click()
       
    }
    
    
}
export default POcart