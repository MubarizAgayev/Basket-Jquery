"use strict"


let cardBtns = document.querySelectorAll("#shop a");

let products = [];

if(localStorage.getItem("basket") != null){
    products = JSON.parse(localStorage.getItem("basket"));
}

cardBtns.forEach(btn => {
    btn.addEventListener("click",function(e){
        e.preventDefault();
        let productImg = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let productDesc = this.previousElementSibling.innerText;
        let productİd = parseInt(this.parentNode.parentNode.getAttribute("data-id"))
        let productPrize = parseInt(this.parentNode.children[1].innerText)

        let existProduct = products.find(m=>m.id == productİd);
        if(existProduct != undefined){
            existProduct.count += 1;
            existProduct.prize = productPrize * existProduct.count
        }
        else{
            products.push({
                id:productİd,
                name:productName,
                img:productImg,
                describtion:productDesc,
                count:1,
                prize:productPrize
            })
        }

        localStorage.setItem("basket",JSON.stringify(products))

        getBasketCount(products);

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    })
});


function getBasketCount(arr){
    let sum = 0;
    for (const item of arr) {
        sum+=item.count
    }
    document.querySelector("sup").innerText = sum
}

getBasketCount(products);

// document.querySelector("#test span").addEventListener("click",function(){
//     let num = parseInt(document.querySelector("input").value);
//     num += 1
//     document.querySelector("input").value = num;
// })