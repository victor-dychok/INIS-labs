document.addEventListener('DOMContentLoaded', function() {
let myDiv = document.querySelector(".container-spec");
let details = document.querySelector(".details-container");

if (myDiv)
for (let i = 0 ; i < shirts.length; i++) {
    let card = document.createElement('div'); // Создаем div и помещаем его в переменную card
    card.classList.add("card-product"); // добавляем класс к контейнеру
    myDiv.appendChild(card); // вставляем элемент на страницу
    card.setAttribute("data-id", i);
    
    let img = document.createElement('img');
    img.height = "200"; 
    card.appendChild(img);
    img.src = shirts[i].colors.white.front;
    
    let text = document.createElement('h3');
    text.textContent = shirts[i].name; //добавление текста
    card.appendChild(text);
    
    let NumOfColors = document.createElement('p');
    if (Object.keys(shirts[i].colors).length > 1) 
    {NumOfColors.textContent = "Футболка представлена в " +Object.keys(shirts[i].colors).length+  " цветах";}
    else {NumOfColors.textContent = `Футболка представлена в ${Object.keys(shirts[i].colors).length} цвете`; }
    card.appendChild(NumOfColors);
    
    let linkContainer = document.createElement("div");
    linkContainer.classList.add("link-container")
    card.appendChild(linkContainer);
    
    let buttonQuick = document.createElement(`a`);
    buttonQuick.innerHTML = "Quick view";
    buttonQuick.href = "javascript:PopUpShow()"
    buttonQuick.classList.add("button");
    buttonQuick.addEventListener('click', e =>{
        let quickItem = document.getElementById("quick-img");
        quickItem.src = shirts[i].colors.white.front;
    })
    linkContainer.appendChild(buttonQuick);
    document.getElementById("price-text").textContent = shirts[i].price;
    document.getElementById("prod-text").textContent = shirts[i].description;
    document.getElementById("nameText").textContent = shirts[i].name;
    
    let hrefDetails = document.createElement(`a`);
    hrefDetails.classList.add("button");
    linkContainer.appendChild(hrefDetails);
    
    hrefDetails.innerHTML = "See page"
    hrefDetails.href = "tshirts.html";
    hrefDetails.search = "id=" + i;
    
    $("#popup1").hide();
};

if (details)
    {
        let str = location.search;
        str = str.slice(1);
        let array = str.split("&");
        let search = {};
        for(let i = 0; i <array.length; i++)
        {
            let param = array[i].split("=");
            search[param[0]] = param[1];
        }
        let item = shirts[search.id];
        
        let prodNameContainer = document.createElement("div");
        prodNameContainer.classList.add("product-name");
        details.appendChild(prodNameContainer);
        
        let name = document.createElement("h1");
        name.classList.add("title");
        name.innerHTML = item.name;
        prodNameContainer.append(name);
        
        let cardProduct = document.createElement("div");
        cardProduct.classList.add("card");
        details.appendChild(cardProduct);
        
        
        let img = document.createElement("img");
        img.src = item.default;
        img.classList.add("intro-photo");
        cardProduct.appendChild(img);
        img.setAttribute('id', 'front-img');
        
        let imgBack = document.createElement("img");
        imgBack.src = item.default;
        imgBack.classList.add("intro-photo");
        cardProduct.appendChild(imgBack);
        imgBack.setAttribute('id', 'back-img');
        
        
        let prodInfo = document.createElement("div");
        prodInfo.classList.add("product-info");
        prodInfo.style.width = "700px";
        details.appendChild(prodInfo);
        
        let prodPrice = document.createElement("p");
        let prodText = document.createElement("p");
        prodPrice.classList.add("product-price");
        prodText.classList.add("product-text");
        prodPrice.innerHTML = item.price;
        prodText.innerHTML = item.description;
        
        prodInfo.appendChild(prodPrice);
        prodInfo.appendChild(prodText);
        
        let prodVariants = document.createElement("div");
        prodVariants.classList.add("prod-variants");
        prodInfo.appendChild(prodVariants);
        
        let sideContainer = document.createElement("div");
        sideContainer.classList.add("container");
        prodVariants.appendChild(sideContainer);
        
        let sideText = document.createElement("p");
        sideText.classList.add("product-text");
        sideText.textContent = "Side: ";
        sideContainer.appendChild(sideText);
        
        let frontButton = document.createElement("a");
        let backButton = document.createElement("a");
        frontButton.classList.add("button");
        backButton.classList.add("button");
        frontButton.textContent = "Front";
        backButton.textContent = "Back";
        sideContainer.appendChild(frontButton);
        sideContainer.appendChild(backButton);
        
        let colorContainer = document.createElement("div");
        sideContainer.classList.add("container");
        prodVariants.appendChild(colorContainer);
        
        let colorText = document.createElement("p");
        colorText.classList.add("product-text");
        colorText.textContent = "Color: ";
        colorContainer.appendChild(colorText);
        
        frontButton.addEventListener('click', e => {
            document.getElementById('back-img').style.display = "none";
            document.getElementById('front-img').style.display = "block";
        })
        
        backButton.addEventListener('click', e => {
            document.getElementById('front-img').style.display = "none";
            document.getElementById('back-img').style.display = "block";
        })
        
        img.src = item.colors.white.front;
        for (let color in item.colors)
            {
                let btn = document.createElement("a");
                btn.classList.add("button");
                btn.style.background = color;
                btn.style.borderColor = "black";
                btn.innerHTML = color;
                colorContainer.appendChild(btn);
                            
                btn.addEventListener('click', e => {
                    img.src = item.colors[btn.textContent].front;
                    imgBack.src = item.colors[btn.textContent].back;
                })
            }
        document.getElementById('back-img').style.display = "none";
    }
})