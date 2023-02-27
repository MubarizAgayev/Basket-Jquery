"use strict"





let tableBody = document.querySelector("tbody");
let products = JSON.parse(localStorage.getItem("basket"));

getBasketDatas()

function getBasketDatas(){
    if (products != null) {
        let sum = 0;
        for (const product of products) {
            tableBody.innerHTML += `<tr data-id="${product.id}">
            <td><div class="img"><img src="${product.img}" alt=""></div></td>
            <td>${product.name}</td>
            <td>${product.describtion}</td>
            <td>${product.count}</td>
            <td>${product.prize}</td>
            <td><i class="fa-solid fa-trash delete"></i></td>
            </tr>`
        }
    
        getBasketCount(products);
    }else {
        showAlert()
    }
}


function showAlert(){
    document.querySelector("table").classList.add("d-none");
    document.querySelector(".alert").classList.remove("d-none");
    document.querySelector(".total-title").classList.add("d-none");
    document.querySelector(".total-title").nextElementSibling.classList.add("d-none")
}

function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count
    }
    document.querySelector("sup").innerText = sum
}


function deleteProduct(id){
    products = products.filter(m=>m.id != id); 
    localStorage.setItem("basket",JSON.stringify(products));
}

let deleteIcons = document.querySelectorAll(".delete");

deleteIcons.forEach(icon => {
    icon.addEventListener("click",function(){
        let id = parseInt(this.parentNode.parentNode.getAttribute("data-id"));
        deleteProduct(id);
        this.parentNode.parentNode.remove();
        if(products.length == 0){
            localStorage.removeItem("basket")
            showAlert();
        }
        showTotalPrice();
        getBasketCount(products);

        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    })
});


function showTotalPrice(){
    if(products != null){
        let title = document.querySelector(".total-title"); 
        title.classList.remove("d-none");
        title.nextElementSibling.classList.remove("d-none");

        let sum = 0;
        for (const item of products) {
            sum += parseInt(item.price);
        }
        title.nextElementSibling.innerText = sum + " $";
    }
}
showTotalPrice()