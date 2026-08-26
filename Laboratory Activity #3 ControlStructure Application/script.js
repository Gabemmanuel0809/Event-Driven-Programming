let customer = document.querySelector("#customerName"); 
let productNumber = document.querySelector("#productCount"); 
let productsContainer = document.querySelector("#productsContainer"); 
let delivery = document.querySelector("#deliveryOption"); 
let calculate = document.querySelector("#calculateBtn"); 
let validationMessage = document.querySelector("#validationMessage"); 
let orderSummary = document.querySelector("#orderSummary"); 

// Arrow function are fun to use, but somehow I felt like its still better 
// to use the regular function if the function becomes big 

const calculateItemAmount = (price, quantity) => { return price * quantity; }; 

const calculateDiscount = (subtotal) => { 
    let discount; 
	if (subtotal >= 5000) { 
         discount = subtotal * 0.10; 
    } else if (subtotal >= 3000) { 
	     discount = subtotal * 0.07; 
	} else if (subtotal >= 1000) { 
	     discount = subtotal * 0.05; 
    } else { 
	    discount = 0; 
	} return discount; 
}; 

const getDeliveryFee = (option) => { 
    let fee; 
	const optionNum = Number(option); 
	
	switch (optionNum) { 
	   case 1: 
	      fee = 0; 
		  break; 
	   case 2: 
	      fee = 80; 
		  break; 
	   case 3: 
	      fee = 150; 
		  break; 
	   default: 
	      fee = 0; 
	} 
	
	return fee; 
}; 

const getDeliveryTypeName = (option) => { 
     const optionNum = Number(option); 
	 
	 switch (optionNum) { 
	    case 1: return "Store Pickup"; 
		case 2: return "Standard Delivery"; 
		case 3: return "Express Delivery"; 
		default: return "Unknown"; 
	 } 
}; 

productNumber.addEventListener("input", function () { 
    productsContainer.innerHTML = ""; 
	const count = Number(productNumber.value); 
	
	if (isNaN(count) || count <= 0 || !Number.isInteger(count)) { 
	    return; 
	} 
	
	for (let i = 0; i < count; i++) { 
	  const productCard = document.createElement("div"); 
	  productCard.className = "product-row"; 
	  productCard.innerHTML = ` <h4>Product #${i + 1}</h4> 
	                            <div class="form-group"> 
	                              <label for="productName-${i}">Product Name</label> 
								  <input type="text" id="productName-${i}" placeholder="Product Name" > 
								</div> 
								
								<div class="form-group"> 
								  <label for="productPrice-${i}">Price</label> 
								  <input type="number" id="productPrice-${i}" step="0.01" min="0" placeholder="Price" > 
								</div> 
								
								<div class="form-group"> 
								    <label for="productQuantity-${i}">Quantity</label> 
									<input type="number" id="productQuantity-${i}" min="1" placeholder="Quantity" > 
								</div> <br> `; 
	   productsContainer.appendChild(productCard); 
	} 
}); 

calculate.addEventListener("click", function () { 
      validationMessage.innerHTML = ""; 
	  orderSummary.innerHTML = ""; 
	  
	  const customerName = customer.value.trim(); 
	  const rawCount = productNumber.value; 
	  const count = Number(rawCount); 
	  const deliveryOption = delivery.value; 
	  
	  if (customerName === "") { 
	      validationMessage.innerHTML = "Error: Customer Name is required."; 
		  return; 
	  } 
	  
	  if ( rawCount === "" || isNaN(count) || count <= 0 || !Number.isInteger(count) ) { 
	     validationMessage.innerHTML = "Error: Please enter a valid positive integer for Number of Products.";
		 return; 
	  } 
	  
	  if ( deliveryOption === "" || !["1", "2", "3"].includes(deliveryOption) ) { 
	     validationMessage.innerHTML = "Error: Please select a valid Delivery Option."; 
		 return; 
	  } 
	  
	  let subtotal = 0; 
	  let productListHTML = "<div>"; 
	  
	  for (let i = 0; i < count; i++) { 
	     const nameElem = document.getElementById(`productName-${i}`); 
		 const priceElem = document.getElementById(`productPrice-${i}`); 
		 const qtyElem = document.getElementById(`productQuantity-${i}`); 
		 
		 if (!nameElem || !priceElem || !qtyElem) { 
		    validationMessage.innerHTML = `Error: Missing input fields for item #${i + 1}.`; 
		    return; 
		 } 
		 
		 const pName = nameElem.value.trim(); 
		 const pPrice = parseFloat(priceElem.value); 
		 const pQty = Number(qtyElem.value); 
		 
		 if (pName === "") { 
		    validationMessage.innerHTML = `Error: Product Name for item #${i + 1} cannot be empty.`; return; } if (isNaN(pPrice) || pPrice <= 0) { validationMessage.innerHTML = `Error: Please enter a valid positive price for item #${i + 1}.`; 
			return; 
		 } 
		 
		 if ( isNaN(pQty) || pQty <= 0 || !Number.isInteger(pQty) ) { 
		    validationMessage.innerHTML = `Error: Please enter a valid positive integer quantity for item #${i + 1}.`; 
			return; 
		 } 
		 
		 const itemAmount = calculateItemAmount(pPrice, pQty); 
		 subtotal += itemAmount; 
		 
		 productListHTML += ` <p> <strong>${i + 1}. ${pName}</strong><br> Price: ₱${pPrice.toFixed(2)}<br> Quantity: ${pQty}<br> Amount: ₱${itemAmount.toFixed(2)} </p> `;
		} 
		 
		productListHTML += "</div>"; 
		 
		const discount = calculateDiscount(subtotal); 
		const deliveryFee = getDeliveryFee(deliveryOption); 
		const deliveryType = getDeliveryTypeName(deliveryOption); 
		const finalAmount = subtotal - discount + deliveryFee; 
		let discountRateText = "0%"; 
		
		if (subtotal >= 5000) { 
		    discountRateText = "10%"; 
		} else if (subtotal >= 3000) { 
		    discountRateText = "7%"; 
		} else if (subtotal >= 1000) { 
		    discountRateText = "5%"; 
		} 
		
		orderSummary.innerHTML = ` <h2>ORDER SUMMARY</h2> 
		<p> <strong>Customer:</strong> ${customerName} </p> 
		${productListHTML} <hr> 
		<p> <strong>Subtotal:</strong> ₱${subtotal.toFixed(2)} </p> 
		<p> <strong>Discount Rate:</strong> ${discountRateText} </p> 
		<p> <strong>Discount Amount:</strong> ₱${discount.toFixed(2)} </p> 
		<p> <strong>Delivery Type:</strong> ${deliveryType} </p> 
		<p> <strong>Delivery Fee:</strong> ₱${deliveryFee.toFixed(2)} </p> 
		<h3> <strong>Final Amount:</strong> ₱${finalAmount.toFixed(2)} </h3> `; 
    });