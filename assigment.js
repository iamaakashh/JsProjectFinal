var productload = () => {
 $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function(productList,status){
  var cards=document.getElementById('cards')
  var recieved_cardItems=JSON.parse(localStorage.getItem('cartItems'))
  var count=0;
  if(recieved_cardItems!=null){
  for(var x in recieved_cardItems){
   count=count+1;
    }
  document.getElementById('cartvalue').innerHTML=count
   }
    for(var i=0; i<productList.length/2; i++){

        var card=document.createElement('div');
        cards.appendChild(card);
        card.className="card";

        var images= document.createElement('img');
        card.appendChild(images);
        images.className="image"
         
        var item_name=document.createElement('div');
        card.appendChild(item_name);  
        item_name.className="name"

        var brand=document.createElement('div');
        card.appendChild(brand);  
        brand.className="brand"

        var rs=document.createElement('div');
        card.appendChild(rs);  
        rs.className="ruppes"

       for( var j in productList[i]){
        if(j=="id"){
          card.id=productList[i][j]
        }
        if(j =="preview"){
            images.src=productList[i][j];
        }
        if(j== "name"){
           item_name.innerText=productList[i][j];
        }
        if(j== "brand"){
            brand.innerText=productList[i][j];
         }
         if(j== "price"){
            rs.innerText= "RS " +productList[i][j];
         }
       }
    }

    for(var i=productList.length/2; i<productList.length; i++){  

        var card=document.createElement('div');
        card2.appendChild(card);
        card.className="card";

        var images= document.createElement('img');
        card.appendChild(images);
        images.className="image"
         
        var item_name=document.createElement('div');
        card.appendChild(item_name);  
        item_name.className="name"

        var brand=document.createElement('div');
        card.appendChild(brand);  
        brand.className="brand"

        var rs=document.createElement('div');
        card.appendChild(rs);  
        rs.className="ruppes"

       for( var j in productList[i]){
        if(j=="id"){
          card.id=productList[i][j]
        }
        if(j =="preview"){
            images.src=productList[i][j];
        }
        if(j== "name"){
           item_name.innerText=productList[i][j];
        }
        if(j== "brand"){
            brand.innerText=productList[i][j];
         }
         if(j== "price"){
            rs.innerText= "RS " +productList[i][j];
         }
       }
    }
   ////product detail page start here
    var cardDiv = document.getElementsByClassName('card');
   for(var z=0; z<cardDiv.length; z++){
     cardDiv[z].addEventListener('click',function(){
     var main_class= document.getElementById('main')
      main_class.className+=' hide'
      var main2_class= document.getElementById('main2');
      // main2_class.classList.remove('hide')
      var productData=productList[this.id-1]

        var outer = document.getElementById("main2");
outer.className = "outer";
var main2 = document.createElement('div');
main2.className ="main2";
var big_img = document.createElement("img");
big_img.className="big_img"
outer.appendChild(big_img);
outer.appendChild(main2);

var addcart_button = document.createElement('button');
addcart_button.innerHTML+= 'Add to Cart';
addcart_button.className= 'addcart';
addcart_button.id='addcart'
main2.appendChild(addcart_button);

for (var i in productData) {
  
 if (i == "name") {
    var name_heading = document.createElement("h1");
    name_heading.innerText += productData[i];
    name_heading.className = "name_heading";
    main2.appendChild(name_heading);
  } else if (i == "brand") {
    var brand = document.createElement("h4");
    brand.innerText += productData[i];
    brand.className = "brand";
    main2.appendChild(brand);
  } else if (i == "price") {
    var rate = document.createElement('div')
    var price = document.createElement("span");
    var rs = document.createElement("span");
    price.innerText += "Price: Rs ";
    rs.innerHTML += productData[i];
    rs.className = "rs";
    price.className = "price";
    rate.appendChild(price);
    rate.appendChild(rs);
    main2.appendChild(rate);
  } else if (i == "description") {
    var des = document.createElement("div");
    var description = document.createElement("div");
    des.innerText += "Description";
    description.innerHTML += productData[i];
    description.className = "description";
    des.className = "des";
    main2.appendChild(description);
    main2.appendChild(des);
  } else if (i == "photos") {
    var preview_container = document.createElement("div");
    var preview = document.createElement("h3");
    preview.innerText += " Product Preview";
    main2.appendChild(preview_container);
    main2.appendChild(preview)
    for (var j = 0; j < productData[i].length; j++) {
      var preview_img = document.createElement("img");
      preview_img.src=productData[i][j];
      preview_container.appendChild(preview_img);
      preview_img.className = "preview_img";
      
    }
    preview.className ='preview'
    preview_container.className='preview_container'
    
  }
  else if(i=="preview"){
    big_img.src=productData[i];
  }
}

var big =document.getElementsByClassName('preview_img');

for( var k=0; k<big.length;k++){
  if (k == 0) {
    big[k].classList.add("active");
  }
  big[k].addEventListener('click',function(e){
    big_img.src=e.target.src; 
   var x = document.getElementsByClassName("active");
    if (x.length > 0) {
      x[0].classList.remove("active");
    }
    e.target.classList.add("active");
  })
}
  addcart_button.addEventListener('click',function(){
    var recieved_cardItems=localStorage.getItem('cartItems')
    var cart_items;
    if(recieved_cardItems==null){
      cart_items=[];
    }
    else{
      cart_items=JSON.parse(recieved_cardItems)
    }
      cart_items.push(productData.id-1)
      console.log(cart_items)
      console.log(typeof(cart_items))
    localStorage.setItem(`cartItems`,JSON.stringify(cart_items))
     var recieved_cardItems=JSON.parse(localStorage.getItem('cartItems'))
      var count=0;
    if(recieved_cardItems!=null){
    for(var x in recieved_cardItems){
      count=count+1;
    }
    document.getElementById('cartvalue').innerHTML=count
  }
  })
   

     })
   }var clickcount=0;
    var cartIcon= document.getElementById('cartIcon');
    cartIcon.addEventListener('click',function(){
      clickcount++;
      if(clickcount==1){
        $('#checkout_page').prepend(`<h1 id="checkout_heading">Checkout</h1><div id="total_items_text">Total Items:</div>`)
         $('#checkout_page').append(`<div id="checkout_innerdiv"><div id="final_C1"></div><div id="final_C2"></div></div>`);
        
         var main_class= document.getElementById('main')
          main_class.className+=' hide'
         var main2_class=document.getElementById('main2')
         main2_class.className+=' hide'
          var final_C1=document.getElementById('final_C1')
          $('#final_C2').append('<div id="tm">Total Amount</div><spam id="Am">Amount: RS </span><span id="trs">0</span><button id="placeOrder">Place Order</button>')
          var Tamount=0;
          var quantity=1;
          var products=[];
          var recieved_cardItems=JSON.parse(localStorage.getItem('cartItems'))
          for(var i=0;i<recieved_cardItems.length;i++){
           products.push(productList[recieved_cardItems[i]])
          
           if(recieved_cardItems[i]!=recieved_cardItems[i-1]){
            var cartItem=document.createElement('div');
            final_C1.appendChild(cartItem);
            cartItem.className='cartItem';
            
            var cartItemImg=document.createElement('img');
            cartItem.appendChild(cartItemImg);
            cartItemImg.className='cartItemImg';

            var cartItemName=document.createElement('div');
            cartItem.appendChild(cartItemName);
            cartItemName.className='cartItemName';

            var cartItemRs=document.createElement('div');
            cartItem.appendChild(cartItemRs);
            cartItemRs.className='cartItemRs';

            var cartItemQ=document.createElement('div');
            cartItem.appendChild(cartItemQ);
            cartItemQ.className='cartItemQ';
           cartItemQ.innerHTML="Quantity:"+quantity;

            var cartItemQ=document.createElement('div');
            cartItem.appendChild(cartItemQ);
            cartItemQ.className='cartItemQ';
            for(var j in productList[recieved_cardItems[i]]){
                 if(j=="preview"){
                  cartItemImg.src=productList[recieved_cardItems[i]][j]
                 }
                if(j=="name"){
                  cartItemName.innerHTML+=productList[recieved_cardItems[i]][j]
                }
                if(j=="price"){
                  cartItemRs.innerHTML+=" Amount:Rs "+productList[recieved_cardItems[i]][j];
                  Tamount=Tamount+productList[recieved_cardItems[i]][j];
                }
            }
          }
            else{
              for(var j in productList[recieved_cardItems[i-1]]){
               if(j=="price"){
                quantity++;
                cartItemQ.innerHTML="x"+quantity;
                Tamount=Tamount+productList[recieved_cardItems[i]][j];
               }
           }
            }
            
         }
         
         document.getElementById('trs').innerHTML=Tamount;
         var placeorder=document.getElementById('placeOrder');
         placeorder.addEventListener('click',function(){
          document.getElementById('checkout_page').className='hide';
           $('#orderplaced_page').append('<div id=circle><i id="check" class="fa-solid fa-check fa-6x"></i></div><h1>Order Placed Successfully!!</h1>')
           $('#orderplaced_page').append('<p>We have sent you an email with the order details </p>') 
        
           var orderPlacedData={
            name:"Sumit Kumar",
            products:products,
           }
          var order=JSON.stringify(orderPlacedData);
           console.log(orderPlacedData)
           localStorage.clear();
           document.getElementById('cartvalue').innerHTML=0;
           $.post('https://5d76bf96515d1a0014085cf9.mockapi.io/order',order,function(data,status){
           console.log(data)
            })

          })
      }
         
    })
    
  

///get request end here
  })
}
    

productload();

