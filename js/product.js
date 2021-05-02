let cardDetail = localStorage.getItem("cardDetail");
cardDetail = JSON.parse(cardDetail);
console.log(cardDetail);

var container = document.getElementById("_product");

var h2 = document.createElement("h3");
h2.innerHTML = cardDetail.title;

container.appendChild(h2);

var rightBox = document.createElement("div");
rightBox.setAttribute("class", "product-images");

var imgDiv = document.createElement("div");
var img = document.createElement("img");
img.setAttribute("src", "./img/Prod-1.jpg");

var imgDiv2 = document.createElement("div");
var img2 = document.createElement("img");
img2.setAttribute("src", "./img/Prod-1.jpg");

var imgDiv3 = document.createElement("div");
var img3 = document.createElement("img");
img3.setAttribute("src", "./img/Prod-1.jpg");

var imgDiv4 = document.createElement("div");
var img4 = document.createElement("img");
img4.setAttribute("src", "./img/Prod-1.jpg");

imgDiv.appendChild(img);
imgDiv2.appendChild(img2);
imgDiv3.appendChild(img3);
imgDiv4.appendChild(img4);

rightBox.appendChild(imgDiv);

var leftBox = document.createElement("div");
leftBox.setAttribute("class", "detail-box");

var br = document.createElement("br");
var br1 = document.createElement("br");
var br2 = document.createElement("br");
var br3 = document.createElement("br");
var br4 = document.createElement("br");
var br5 = document.createElement("br");
leftBox.appendChild(br);

var titleLabel = document.createElement("p");
titleLabel.innerHTML = "Categroy";
leftBox.appendChild(titleLabel);

var title = document.createElement("h2");
title.innerHTML = "Nike Sportware Jacket for Men";
leftBox.appendChild(title);
leftBox.appendChild(br1);

var description = document.createElement("p");
description.innerHTML =
  "The Nike Sportswear Tech Fleece Full-Zip Hoodie updates a layering staple with woven overlays for a durable construction. Made with Tech Fleece, it features soft knit fabric that has a premium feel.";
leftBox.appendChild(description);
leftBox.appendChild(br2);

let addToBagBtn = document.createElement("button");
addToBagBtn.setAttribute("class", "add-bag-btn");
addToBagBtn.innerHTML = "Add to Bag";
leftBox.appendChild(addToBagBtn);
leftBox.appendChild(br3);

let addToFavBtn = document.createElement("button");
addToFavBtn.setAttribute("class", "add-fav-btn");
addToFavBtn.innerHTML = "Favourite";
leftBox.appendChild(addToFavBtn);

leftBox.appendChild(br4);


let h3 = document.createElement("h3");
h3.innerHTML = cardDetail.title;
leftBox.appendChild(h3);

let data = document.createElement("data");
data.setAttribute("value", "39");

let del = document.createElement("del");
del.innerHTML = " $" + cardDetail.price;
let ins = document.createElement("ins");
ins.innerHTML = " $" + cardDetail.newPrice;

del.appendChild(ins);
data.appendChild(del);

leftBox.appendChild(del);
leftBox.appendChild(ins);

let dl = document.createElement("dl");

let dd = document.createElement("dd");
let span1 = document.createElement("span");
span1.innerHTML = "4.4";
dd.appendChild(span1);
let span2 = document.createElement("span");
span2.setAttribute("class", "material-icons");
span2.innerHTML = "star";

let span3 = document.createElement("span");
span3.setAttribute("class", "material-icons");
span3.innerHTML = "star";

let span4 = document.createElement("span");
span4.setAttribute("class", "material-icons");
span4.innerHTML = "star";

let span5 = document.createElement("span");
span5.setAttribute("class", "material-icons");
span5.innerHTML = "star";

let span6 = document.createElement("span");
span6.setAttribute("class", "material-icons");
span6.innerHTML = "star_half";
dd.appendChild(span1);
dd.appendChild(span2);
dd.appendChild(span3);
dd.appendChild(span4);
dd.appendChild(span5);
dd.appendChild(span6);
dl.appendChild(dd);
leftBox.appendChild(dl);

container.appendChild(rightBox);
container.appendChild(leftBox);

{
  /* <section class="single-product">
    <div class="product-images">
      <div>
        <img src="./img/Prod-1.jpg" alt="" width="250">
      </div>
      <div>
        <img src="./img/Prod-1.jpg" alt="" width="250">
      </div>
      <div>
        <img src="./img/Prod-1.jpg" alt="" width="250">
      </div>
      <div>
        <img src="./img/Prod-1.jpg" alt="" width="250">
      </div>

    </div>
    <div class="detail-box">
      <br />
      <br />
      <p>Category</p>
      <h2>Nike Sportware Jacket for Men</h2>
      <br />
      <p>The Nike Sportswear Tech Fleece Full-Zip Hoodie updates a layering staple with woven overlays for a durable
        construction. Made with Tech Fleece, it features soft knit fabric that has a premium feel.</p>
      <br />
      <button class="add-bag-btn">Add to Bag</button>
      <br />
      <button class="add-fav-btn">Favourite</button>
      <br />
      <br />
      <h3>Men's Shoe</h3>
      <data value="40"><del>$60.00</del> <ins>$39.00</ins></data>
      <p>Nike Blazer Mid '77 Vintage</p>
      <dl>


        <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span
            class="material-icons">star</span><span class="material-icons">star</span><span
            class="material-icons">star_half</span></dd>
      </dl>
    </div>
  </section> */
}
