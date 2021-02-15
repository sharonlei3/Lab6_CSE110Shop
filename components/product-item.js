// product-item.js

function increaseCart(){
  let count=document.getElementById('cart-count').textContent;
  document.getElementById('cart-count').textContent=Number(count)+1;
}

function decreaseCart(){
  let count=document.getElementById('cart-count').textContent;
  document.getElementById('cart-count').textContent=Number(count)-1;
}

function buttonCheck(pressed){
  console.log(pressed);
  if(document.getElementById(pressed).value == "Add to Cart"){
    increaseCart();
  }
  else{
    decreaseCart();
  }
}

class ProductItem extends HTMLElement {
  constructor() {
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
       span {
           color: red; 
           font-size: xx-large;
           font-style: italic;
       }
       .price {
        color: green;
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
      }
      .product {
        align-items: center;
        background-color: white;
        border-radius: 5px;
        display: grid;
        grid-template-areas: 
        'image'
        'title'
        'price'
        'add';
        grid-template-rows: 67% 11% 11% 11%;
        height: 450px;
        filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
        margin: 0 30px 30px 0;
        padding: 10px 20px;
        width: 200px;
      }
      
      .product > button {
        background-color: rgb(255, 208, 0);
        border: none;
        border-radius: 5px;
        color: black;
        justify-self: center;
        max-height: 35px;
        padding: 8px 20px;
        transition: 0.1s ease all;
      }
      
      .product > button:hover {
        background-color: rgb(255, 166, 0);
        cursor: pointer;
        transition: 0.1s ease all;
      }
      
      .product > img {
        align-self: center;
        justify-self: center;
        width: 100%;
      }
      
      .title {
        font-size: 1.1em;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .title:hover {
        font-size: 1.1em;
        margin: 0;
        white-space: wrap;
        overflow: auto;
        text-overflow: unset;
      }
    </style>

    <li class="product">
    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
    <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
    <p class="price">$109.95</p>
    <button id="" onclick="buttonCheck(this.id)">Add to Cart</button>
    
    </li>`;

    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));

  }

  //Function to create items
  set(item){
    let temp = this.shadowRoot.lastChild;
    //console.log(item);
    temp.querySelector('.title').textContent=item.title;
    temp.querySelector('.price').textContent="$"+item.price;
    temp.querySelector('img').src=item.image;
    temp.querySelector('img').alt=item.title;  
    temp.querySelector('button').id=item.id;
    console.log(temp.querySelector('button').id);
  }
}

customElements.define('product-item', ProductItem);