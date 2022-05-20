// add to cart
const productCountEl =document.getElementById("product-count");
const addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
    productCountEl.textContent = +productCountEl.textContent + 1;
    /*let prevProductsCount = +productCountEl.textContent;
    productCountEl.textContent = prevProductsCount + 1;*/
});
};

// modal
const modal = document.querySelector(".modal");
const moreDetailsBtns = document.querySelectorAll(".btn-more-details");
const closeBtn = document.querySelector(".btn-close")

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
  }
  
  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
  }

moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function(e){
    if (e.target === modal) {
        closeModal();
    }
});

function showModalByScroll() {

    if (window.pageYOffset > document.body.scrollHeight / 2) {
        openModal() ;
        window.removeEventListener("scroll", showModalByScroll);
    } 
}
window.addEventListener("scroll", showModalByScroll);


// like
const likes = document.querySelectorAll(".like");

for (let like of likes) {
    like.addEventListener("click", function(){
    like.classList.toggle("likeChosen");
});
 
 };

 //slick

 $(".slider").slick({
     /*autoplay: true,*/
     dots: true
 });
 
 
  
const decrementBtns = document.querySelectorAll(".decrement-button");
const incrementBtns = document.querySelectorAll(".increment-button");
const quantityInputs = document.querySelectorAll(".product-quantity input");



   class Counter {
        constructor(incrementBtn, decrementBtn, quantityInput, minCount = 1, maxCount = 5) {
            this.domRefs = {
                incrementBtn,
                decrementBtn,
                quantityInput,
            };

               
            //Дизейблим increment-button и decrement-button
            this.toggleButtonState = function () {
                const count = this.domRefs.quantityInput.value;
                this.domRefs.decrementBtn.disabled = count <= minCount;
                this.domRefs.incrementBtn.disabled = count >= maxCount;
            };

            this.toggleButtonState();


            // функция, при клике на '+' увеличивает кол-во выбранных товаров, при клике на '-', уменьшает
            this.increment = function () {
                console.log(this);
                this.domRefs.quantityInput.value = +this.domRefs.quantityInput.value + 1;
                this.toggleButtonState();
            };
            this.decrement = function () {
                this.domRefs.quantityInput.value = +this.domRefs.quantityInput.value - 1;
                this.toggleButtonState();
            };
            
    
     
    console.log(this);
            this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
            this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
        }}

    
   
const counters = [];
quantityInputs.forEach ((item, i) =>{
    counters[i] = new Counter(incrementBtns[i], decrementBtns[i], item);
});

console.log(quantityInputs);
