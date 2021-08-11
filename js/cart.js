/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length -1; i++) {
   
      table.removeChild(rows[i]);

    
}
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  tbodyElement=table.getElementsByTagName('tbody')[0];


  // TODO: Iterate over the items in the cart
  for(let i=0; i < cart.items.length;i++)
  { 
    let product=cart.items[i].product;
    let quantity=cart.items[i].quantity;
    new CartItem (product,quantity);


  // TODO: Create a TR
  trElement = document.createElement('tr');

  // TODO: Create a TD for the delete link, quantity,  and the item
  
  tdElementLink=document.createElement('td');
  tdElementLink.textContent='X'  ;
  tdElementLink.id=`${i}`;
  
  let tdElementQuantity=document.createElement('td');
  tdElementQuantity.textContent=`${cart.items[i].quantity}` 

  let tdElementItem=document.createElement('td');
  tdElementItem.textContent=`${cart.items[i].product}` 

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tbodyElement.appendChild(trElement);
  trElement.appendChild(tdElementLink);
  trElement.appendChild(tdElementQuantity);
  trElm.appendChild(tdElementItem);




}

function removeItemFromCart(event) {

  function removeItemFromCart(event) {
    tbodyElm=table.getElementsByTagName('tbody')[0];
    let trElm=tbodyElm.getElementsByTagName('tr')
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    for (let i =0; i<trElm.length;i++){
      trElm[i].getElementsByTagName('td')[0];
      if( event.target.id ==trElm[i].firstChild.id){
        cart.removeItem(i);
            // TODO: Save the cart back to local storage
        cart.saveToLocalStorage();
        // TODO: Re-draw the cart table
  From Dima Alabsi to Everyone:  03:52 PM
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tbodyElm.appendChild(trElm);
    trElm.appendChild(tdElmLink);
    trElm.appendChild(tdElmQuantity);
    trElm.appendChild(tdElmItem);
    }
  
  
}

// This will initialize the page and draw the cart on screen
renderCart();