fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((objData)=>{
    let product1 ="";
    objData.map((info)=>{
       product1+=`
       <div class="cards">
       
            <img src=${info.image} alt="img">
            <div class=card-info>
            <h1 class="title">${info.title}</h1>
            <p class="Category">${info.category}</p>
            <p class="price">${info.price}</p>
            </div>
        </div>
       ` 
    });
    document.getElementById("Container").innerHTML=product1;
}).catch((e)=>{
    console.log("Can't find products", e)
})