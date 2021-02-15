// Script.js



window.addEventListener('DOMContentLoaded', () => {
  // 
  //if(localStorage.getItem('items')==null){
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('items', JSON.stringify(data));
        var itemsArr = data;
        for(i=0; i<itemsArr.length; i++){
          let item = new ProductItem();
          item.set(itemsArr[i]);
          document.getElementById('product-list').appendChild(item);
        }
    });
  //}else{
  //  itemsArr = JSON.parse(localStorage.getItem('items'));
  //}

});