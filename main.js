function validateForm(e) {
    let name = document.getElementById("input-name").value;
    let phoneNumber = document.getElementById("input-phone-number").value;
    let quantity = document.getElementById("input-quantity").value;
    let address = document.getElementById("input-adress").value;
    let product = document.getElementById("select-product").value;

    if(name.length < 3){
        alert("The length of your name must be more than 3");
        e.preventDefault();
        return ;
    }

    if(phoneNumber.startsWith("08") == false){
        alert("Phone number must starts with 08");
        e.preventDefault();
        return ;
    }

    if(address.startsWith("Jl.") == false){
        alert("Adress must starts with Jl.");
        e.preventDefault();
        return ;
    }

    let quantityNumber = parseInt(quantity);
    if(isNaN(quantityNumber) == true || quantityNumber < 0){
        alert("Quantity must be more than 0");
        e.preventDefault();
        return ;
    }


    if(product == "Choose your product"){
        alert("Please choose your product");
        e.preventDefault();
        return ;
    }
}