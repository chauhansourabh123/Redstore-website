let menuItems = document.getElementById('menuItems');

menuItems.style.maxHeight = "0px";
function showMenuItem() {
    if (menuItems.style.maxHeight == '0px') {
        menuItems.style.maxHeight = '200px'
    } else {
        menuItems.style.maxHeight = '0px'
    }
}

// Product Details 

let ProductImg = document.getElementById('productImg');
let smallImg = document.querySelectorAll('.smallImg');
const newArr = Array.from(smallImg);
// console.log(newArr);
newArr.forEach((value) => {
    value.addEventListener('click', (e) => {
        ProductImg.src = e.target.src;
    })
})

//Featured Product.




