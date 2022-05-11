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

moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        modal.classList.add("show");
    });
});

const btnClose = document.querySelector(".btn-close");

btnClose.addEventListener("click", function(){
    modal.classList.add("hide");
});

// like
const likes = document.querySelectorAll(".like");

for (let like of likes) {
    like.addEventListener("click", function(){
    like.classList.toggle("likeChosen");
});
 
 };



