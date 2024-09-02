document.addEventListener('DOMContentLoaded', () => {
    let tags = document.querySelectorAll('.blog-articles__article');
    
    if (tags.length > 0) {
      tags.forEach((e) => {
        e.addEventListener("click", () => {
          let getTagName = e.getAttribute('data-article-tag');
          localStorage.setItem('articleTag', getTagName);
        });
    });


    

}

let relatedArticlesTags = document.querySelectorAll('.related-articles-page');
let sliderClass = document.querySelector('.related-articles-tags');
let related_article_slider_icon = document.querySelector('.related-article-slider-icon');
let countss = 0;
relatedArticlesTags.forEach((e,index) => {
    let storedTagName = localStorage.getItem('articleTag');
    let newtag = e.getAttribute('data-related-articles-tags');
    console.log("sdsd",storedTagName)
    
        if (newtag == storedTagName) {
           countss++;
              if(countss > 4 ){
                  sliderClass.classList.add('related-articles-slider')
                   related_article_slider_icon.style.display = "block" 
              }
              else{
                  related_article_slider_icon.style.display = "none" 
              }
         
          e.classList.add(storedTagName);
      } else {
          if( e && ! e.classList.contains(storedTagName)){
              e.style.width = '0px';
              e.style.display = 'none';
          }
          e.remove()
          
      }
    });



    let user_edit_form = document.querySelector('.user-edit-address-form'); 
    let user_edit_btn = document.querySelectorAll('.edit-address-btn'); 
    let user_edit_close = document.querySelector('.edit-address-close'); 
    let add_address_btn = document.querySelectorAll('.add-address-btn'); 
    let add_address_form = document.querySelector('.user-add-form'); 
    let add_address_close = document.querySelector('.add-address-close'); 

    user_edit_btn.forEach((e,index)=>{
        

        e.addEventListener('click',()=>{
            
            user_edit_form.style.display = "block";

            user_edit_close.addEventListener('click',(e)=>{
                user_edit_form.style.display = "none";

            })
        })

    })

    add_address_btn.forEach((e,index)=>{
        

        e.addEventListener('click',()=>{
            
            add_address_form.style.display = "block";

            add_address_close.addEventListener('click',(e)=>{
                add_address_form.style.display = "none";

            })
        })

    })

    

  });

let product__description = document.querySelector('.product__description');
let product__description1 = document.querySelector('.product__description-item1');
let product__description2 = document.querySelector('.product__description-item2');


product__description1.addEventListener('click',()=>{
    product__description.style.height = 'auto'
    product__description2.style.display = 'block';    
    product__description1.style.display = 'none';    
});

product__description2.addEventListener('click',()=>{
    product__description.style.height = '145px'
    product__description2.style.display = 'none';    
    product__description1.style.display = 'block';    
});


let showCard = document.querySelectorAll('.multi-show');
let multiShowBtn = document.querySelector('.multi-show-btn');
let multiShowBtn1 = document.querySelector('.multi-show-btn1');

multiShowBtn.addEventListener('click', () => {
    showCard.forEach((e) => {
        e.style.display = 'block'; 
    });
    multiShowBtn1.style.display = 'block';
    multiShowBtn.style.display = 'none';
});

multiShowBtn1.addEventListener('click', () => {
    showCard.forEach((e, index) => {
        if (index < 4) {
            e.style.display = 'block';
        } else {
            e.style.display = 'none';
        }
    });
    multiShowBtn1.style.display = 'none';
    multiShowBtn.style.display = 'block';
});


