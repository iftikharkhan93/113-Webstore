let cardDetail = localStorage.getItem("cardDetail");
cardDetail = JSON.parse(cardDetail);
console.log(cardDetail);

var container = document.getElementById("_product");

var rightBox = document.createElement("div");
rightBox.setAttribute("class", "product-images");

let a = cardDetail.relatedImages;
for (var i = 0; i < a.length; i++) {
  var imgDiv = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", a[i]);
  img.setAttribute("style", "width: 240px");
  imgDiv.appendChild(img);
  rightBox.appendChild(imgDiv);
}



var leftBox = document.createElement("div");
leftBox.setAttribute("class", "detail-box");

var br = document.createElement("br");
var br1 = document.createElement("br");
var br2 = document.createElement("br");
var br3 = document.createElement("br");
var br4 = document.createElement("br");
var br5 = document.createElement("br");
var br6 = document.createElement("br");
leftBox.appendChild(br);

var titleLabel = document.createElement("p");
titleLabel.innerHTML = "Categroy";
leftBox.appendChild(titleLabel);

var title = document.createElement("h2");
title.innerHTML = cardDetail.category;
leftBox.appendChild(title);
leftBox.appendChild(br1);

var description = document.createElement("p");
description.innerHTML = cardDetail.desc;
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
leftBox.appendChild(br5);
leftBox.appendChild(br6);

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
