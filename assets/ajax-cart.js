
document.addEventListener('DOMContentLoaded', () => {
    let cart = document.getElementById('cart-icon-bubble');
    let colorSelectors = document.querySelectorAll('.color-selector');
    let sizeSelectors = document.querySelectorAll('.size-selector');
    let addTocart = document.querySelectorAll('.product-variant-id');
    let addClick = document.querySelectorAll('.featured-collection-add');
    let selectedColor = '';
    let selectedSize = '';
    let addToCartId;
  
    const arrayToString = (commonValues) => {
      if (selectedColor && selectedSize) {
        addToCartId = commonValues[0];
        
        event.preventDefault();
        let variantId = addToCartId;
        let quantity = 1; 
        fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
                id: variantId,
                quantity: quantity
            })
        })
        .then(response => response.json())
        .then(data => {
            updateCartDrawer();
            
        })
        .catch(error => console.error('Error:', error));
        
  
       
      }
    };
  
    const checkAndAddToCart = () => {
      const commonValues = selectedColor.filter(color => selectedSize.includes(color));
      arrayToString(commonValues);
    };
  
    colorSelectors.forEach((colorClick,index) => {
      colorClick.addEventListener('click', (e) => {
  
        selectedColor = e.target.getAttribute('data-variant-color').split(",");
        let productId = e.target.getAttribute('data-product-id');
        let selectedImage = e.target.getAttribute('data-image');
        let productImages = document.querySelectorAll(`.motion-reduce1[data-product-id="${productId}"]`);
        console.log(productImages);
        productImages.forEach((image) => {
          image.src = selectedImage;
          image.srcset = selectedImage;
        });
        checkAndAddToCart();
      });
  
    });
  
    sizeSelectors.forEach((sizeClick) => {
      sizeClick.addEventListener('click', (e) => {
        selectedSize = e.target.getAttribute('data-variant-size').split(",");
        checkAndAddToCart();
      });
    });
  });
  
  
  function updateCartDrawer() {
    fetch('/cart?view=drawer')
    .then(response => response.text())
    .then(html => {
        document.querySelector('#CartDrawer').innerHTML = html;
        openCartDrawer();
    })
    .catch(error => console.error('Error:', error));
  }
  
  function openCartDrawer() {
    let container = document.querySelector("#cart-icon-bubble");
  container.click();
  }
  
  
  $(document).on('click', 'body', function(e){
    var container = $(".kalviyo");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $('.kalviyo ').removeClass("active");
    }
  });
  
  
  $(document).on('click', 'body', function(e){
  let colorSelectors1 = document.querySelectorAll('.color-selector');
  colorSelectors1.forEach((colorClick,index) => {
    colorClick.addEventListener('click', (e) => {
  
      selectedColor = e.target.getAttribute('data-variant-color').split(",");
      let productId = e.target.getAttribute('data-product-id');
      let selectedImage = e.target.getAttribute('data-image');
      let productImages = document.querySelectorAll(`.motion-reduce1[data-product-id="${productId}"]`);
      console.log(productImages);
      productImages.forEach((image) => {
        image.src = selectedImage;
        image.srcset = selectedImage;
      });
    });
    
  });
  });
  
  
  