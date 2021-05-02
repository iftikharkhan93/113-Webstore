var myProducts = [
  {
    title: "Men's Hoodie",
    category: "Men's Full-Zip Woven Hoodie",
    price: 50.0,
    newPrice: 39.0,
    desc: "Tie-Dye Pullover Hoodie",
    thumnail: "img/Prod-1.jpg",
    rating: 5,
    relatedImages: [
      "img/Prod-1.jpg",
      "img/Prod-2.jpg",
      "img/Prod-3.jpg",
      "img/Prod-4.jpg",
    ],
    colors: [
      {
        color: "Red",
      },
      {
        color: "Green",
      },
      {
        color: "Blue",
      },
      {
        color: "Green",
      },
    ],
    size: [
      {
        size: "S",
      },
      {
        size: "M",
      },
      {
        size: "L",
      },
    ],
  },
  {
    title: "White Shoe",
    category: "Men's Full-Zip Woven Hoodie",

    price: 50.0,
    newPrice: 40.0,
    desc: "Nike Air Force 1 '07",
    thumnail: "img/Prod-2.jpg",
    rating: 5,
    relatedImages: [
      "img/Prod-1.jpg",
      "img/Prod-2.jpg",
      "img/Prod-3.jpg",
      "img/Prod-4.jpg",
    ],

    colors: [
      {
        color: "Red",
      },
      {
        color: "Green",
      },
      {
        color: "Blue",
      },
      {
        color: "Black",
      },
    ],
    size: [
      {
        size: "S",
      },
      {
        size: "M",
      },
      {
        size: "L",
      },
      {
        size: "XL",
      },
    ],
  },
  {
    title: "Women's Bag",
    category: "Men's Full-Zip Woven Hoodie",

    price: 50.0,
    newPrice: 35.0,
    desc: "Here is a shot of this product ...",
    thumnail: "img/Prod-5.jpg",
    rating: 5,
    relatedImages: [
      "img/Prod-1.jpg",
      "img/Prod-2.jpg",
      "img/Prod-3.jpg",
      "img/Prod-4.jpg",
    ],

    colors: [
      {
        color: "Red",
      },
      {
        color: "Green",
      },
      {
        color: "Blue",
      },
      {
        color: "White",
      },
    ],
    size: [
      {
        size: "XS",
      },
      {
        size: "L",
      },
    ],
  },
  {
    title: "Men's Shoe",
    category: "Men's Full-Zip Woven Hoodie",

    price: 50.0,
    newPrice: 36.0,
    desc: "Nike Blazer Mid '77 Vintage",
    thumnail: "img/Prod-3.jpg",
    rating: 4,
    relatedImages: [
      "img/Prod-1.jpg",
      "img/Prod-2.jpg",
      "img/Prod-3.jpg",
      "img/Prod-4.jpg",
    ],

    colors: [
      {
        color: "Red",
      },
      {
        color: "Green",
      },
      {
        color: "Blue",
      },
      {
        color: "Black",
      },
    ],
    size: [
      {
        size: "S",
      },
      {
        size: "M",
      },
      {
        size: "L",
      },
      {
        size: "XL",
      },
    ],
  },
  {
    title: "Women's Sportswear",
    category: "Men's Full-Zip Woven Hoodie",

    price: 50.0,
    newPrice: 29.0,
    desc: "Here is a shot of this product..",
    thumnail: "img/Prod-4.jpg",
    rating: 3,
    relatedImages: [
      "img/Prod-1.jpg",
      "img/Prod-2.jpg",
      "img/Prod-3.jpg",
      "img/Prod-4.jpg",
    ],

    colors: [
      {
        color: "Red",
      },
      {
        color: "Green",
      },
      {
        color: "Blue",
      },
      {
        color: "Back",
      },
    ],
    size: [
      {
        size: "S",
      },

      {
        size: "L",
      },
      {
        size: "XL",
      },
    ],
  },
  {
    title: "Backpack",
    category: "Men's Full-Zip Woven Hoodie",
    price: 50.0,
    newPrice: 25.0,
    desc: "Here is a shot of this product..",
    thumnail: "img/Prod-6.jpg",
    rating: 5,
    relatedImages: [
      "img/Prod-1.jpg",
      "img/Prod-2.jpg",
      "img/Prod-3.jpg",
      "img/Prod-4.jpg",
    ],
    colors: [
      {
        color: "Red",
      },
      {
        color: "Green",
      },
      {
        color: "Blue",
      },
      {
        color: "White",
      },
    ],
    size: [
      {
        size: "S",
      },
      {
        size: "M",
      },
      {
        size: "L",
      },
      {
        size: "XL",
      },
    ],
  },
];

var radidoBtnsRating = document.getElementsByClassName("_rating");
var radidoBtns = document.getElementsByClassName("_colors");
var SizeBtns = document.getElementsByClassName("_size");
var container = document.getElementById("_productContainer");
var removeProduct = document.getElementsByClassName("productID");

var getRadionBtnValue = () => {
  for (var i = 0; i < radidoBtns.length; i++) {
    if (radidoBtns[i].checked) {
      console.log(radidoBtns[i].value);

      let selectArray = [];
      myProducts.map((v) => {
        v.colors.filter((val) => {
          if (val.color == radidoBtns[i].value) {
            selectArray.push(v);
          }
        });
      });

      removeProduct[0].remove();
      var div = document.createElement("div");
      div.setAttribute("class", "productID");

      for (var i = 0; i < selectArray.length; i++) {
        console.log(selectArray[i].title);
        let box = document.createElement("box");
        let article = document.createElement("article");
        article.setAttribute("class", "product");

        let header = document.createElement("header");
        // article.appendChild(header)

        let headerImg = document.createElement("img");
        headerImg.setAttribute("src", selectArray[i].thumnail);
        headerImg.setAttribute("alt", "Product image");
        header.appendChild(headerImg);

        let h3 = document.createElement("h3");
        h3.innerHTML = selectArray[i].title;
        header.appendChild(h3);

        let data = document.createElement("data");
        data.setAttribute("value", "39");

        let del = document.createElement("del");
        del.innerHTML = " $" + selectArray[i].price;
        let ins = document.createElement("ins");
        ins.innerHTML = " $" + selectArray[i].newPrice;
        del.appendChild(ins);
        data.appendChild(del);

        header.appendChild(del);
        header.appendChild(ins);

        let p = document.createElement("p");
        p.innerHTML = selectArray[i].desc;
        header.appendChild(p);

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
        header.appendChild(dl);
        let anchor2 = document.createElement("a");
        anchor2.setAttribute("href", "product.html");
        anchor2.innerHTML = "see more";
        header.appendChild(anchor2);
        article.appendChild(header);

        let formColor = document.createElement("form");

        let fieldsetColor = document.createElement("fieldset");
        fieldsetColor.setAttribute("class", "product_info");

        let legendColor = document.createElement("legend");
        legendColor.innerHTML = "Colours";
        fieldsetColor.appendChild(legendColor);

        var colors = selectArray[i].colors;
        for (var j = 0; j < colors.length; j++) {
          let label = document.createElement("label");
          label.setAttribute("class", "container-radio-prod");

          let colorTag = document.createElement("span");
          colorTag.innerHTML = colors[j].color;
          label.appendChild(colorTag);

          let input = document.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "radio");
          label.appendChild(input);
          label.appendChild(input);
          let checkmark = document.createElement("span");
          checkmark.setAttribute("class", "checkmark");
          label.appendChild(checkmark);
          fieldsetColor.appendChild(label);
        }

        let form = document.createElement("form");

        let fieldset = document.createElement("fieldset");
        fieldset.setAttribute("class", "product_info");

        let legend = document.createElement("legend");
        legend.innerHTML = "Sizes";
        fieldset.appendChild(legend);
        var size = selectArray[i].size;
        for (var k = 0; k < size.length; k++) {
          let label = document.createElement("label");
          label.setAttribute("class", "container-radio-prod");

          let colorTag = document.createElement("span");
          colorTag.innerHTML = size[k].size;
          label.appendChild(colorTag);

          let input = document.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "radio");
          label.appendChild(input);
          label.appendChild(input);
          let checkmark = document.createElement("span");
          checkmark.setAttribute("class", "checkmark");
          label.appendChild(checkmark);
          fieldset.appendChild(label);
        }

        let footer = document.createElement("footer");
        footer.setAttribute("class", "product_footer");
        let button1 = document.createElement("button");
        button1.setAttribute("style", "font-size:15px");
        let icon1 = document.createElement("i");
        icon1.setAttribute("class", "fa fa-shopping-cart");
        button1.appendChild(icon1);

        let button2 = document.createElement("button");
        button2.setAttribute("style", "font-size:15px");
        let icon2 = document.createElement("i");
        icon2.setAttribute("class", "fa fa-heart");
        button2.appendChild(icon2);
        formColor.appendChild(fieldsetColor);
        article.appendChild(formColor);
        form.appendChild(fieldset);
        article.appendChild(form);

        footer.appendChild(button1);
        footer.appendChild(button2);
        article.appendChild(footer);
        box.appendChild(article);
        div.appendChild(box);
        container.appendChild(div);
      }
    }
  }
};

// Getting Products with SIze filter

var getSizeBtnValue = () => {
  for (var i = 0; i < SizeBtns.length; i++) {
    if (SizeBtns[i].checked) {
      console.log(SizeBtns[i].value);

      let selectArray = [];
      myProducts.map((v) => {
        v.size.filter((val) => {
          if (val.size == SizeBtns[i].value) {
            selectArray.push(v);
          }
        });
      });
      console.log(selectArray);

      removeProduct[0].remove();
      var div = document.createElement("div");
      div.setAttribute("class", "productID");

      for (var i = 0; i < selectArray.length; i++) {
        console.log(selectArray[i].title);
        let box = document.createElement("box");
        let article = document.createElement("article");
        article.setAttribute("class", "product");

        let header = document.createElement("header");
        // article.appendChild(header)

        let headerImg = document.createElement("img");
        headerImg.setAttribute("src", selectArray[i].thumnail);
        headerImg.setAttribute("alt", "Product image");
        header.appendChild(headerImg);

        let h3 = document.createElement("h3");
        h3.innerHTML = selectArray[i].title;
        header.appendChild(h3);

        let data = document.createElement("data");
        data.setAttribute("value", "39");

        let del = document.createElement("del");
        del.innerHTML = " $" + selectArray[i].price;
        let ins = document.createElement("ins");
        ins.innerHTML = " $" + selectArray[i].newPrice;
        del.appendChild(ins);
        data.appendChild(del);

        header.appendChild(del);
        header.appendChild(ins);

        let p = document.createElement("p");
        p.innerHTML = selectArray[i].desc;
        header.appendChild(p);

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
        header.appendChild(dl);
        let anchor2 = document.createElement("a");
        anchor2.setAttribute("href", "product.html");
        anchor2.innerHTML = "see more";
        header.appendChild(anchor2);
        article.appendChild(header);

        let formColor = document.createElement("form");

        let fieldsetColor = document.createElement("fieldset");
        fieldsetColor.setAttribute("class", "product_info");

        let legendColor = document.createElement("legend");
        legendColor.innerHTML = "Colours";
        fieldsetColor.appendChild(legendColor);

        var colors = selectArray[i].colors;
        for (var j = 0; j < colors.length; j++) {
          let label = document.createElement("label");
          label.setAttribute("class", "container-radio-prod");

          let colorTag = document.createElement("span");
          colorTag.innerHTML = colors[j].color;
          label.appendChild(colorTag);

          let input = document.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "radio");
          label.appendChild(input);
          label.appendChild(input);
          let checkmark = document.createElement("span");
          checkmark.setAttribute("class", "checkmark");
          label.appendChild(checkmark);
          fieldsetColor.appendChild(label);
        }

        let form = document.createElement("form");

        let fieldset = document.createElement("fieldset");
        fieldset.setAttribute("class", "product_info");

        let legend = document.createElement("legend");
        legend.innerHTML = "Sizes";
        fieldset.appendChild(legend);
        var size = selectArray[i].size;
        for (var k = 0; k < size.length; k++) {
          let label = document.createElement("label");
          label.setAttribute("class", "container-radio-prod");

          let colorTag = document.createElement("span");
          colorTag.innerHTML = size[k].size;
          label.appendChild(colorTag);

          let input = document.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "radio");
          label.appendChild(input);
          label.appendChild(input);
          let checkmark = document.createElement("span");
          checkmark.setAttribute("class", "checkmark");
          label.appendChild(checkmark);
          fieldset.appendChild(label);
        }

        let footer = document.createElement("footer");
        footer.setAttribute("class", "product_footer");
        let button1 = document.createElement("button");
        button1.setAttribute("style", "font-size:15px");
        let icon1 = document.createElement("i");
        icon1.setAttribute("class", "fa fa-shopping-cart");
        button1.appendChild(icon1);

        let button2 = document.createElement("button");
        button2.setAttribute("style", "font-size:15px");
        let icon2 = document.createElement("i");
        icon2.setAttribute("class", "fa fa-heart");
        button2.appendChild(icon2);
        formColor.appendChild(fieldsetColor);
        article.appendChild(formColor);
        form.appendChild(fieldset);
        article.appendChild(form);

        footer.appendChild(button1);
        footer.appendChild(button2);
        article.appendChild(footer);
        box.appendChild(article);
        div.appendChild(box);
        container.appendChild(div);
      }
    }
  }
};

// Getting Products with rating filter

var getRadionBtnValueRating = () => {
  for (var i = 0; i < radidoBtnsRating.length; i++) {
    if (radidoBtnsRating[i].checked) {
      let check = myProducts.filter(
        (val) => val.rating >= radidoBtnsRating[i].value
      );

      removeProduct[0].remove();
      var div = document.createElement("div");
      div.setAttribute("class", "productID");
      for (var i = 0; i < check.length; i++) {
        console.log(check[i].title);
        let box = document.createElement("box");
        let article = document.createElement("article");
        article.setAttribute("class", "product");

        let header = document.createElement("header");
        // article.appendChild(header)

        let headerImg = document.createElement("img");
        headerImg.setAttribute("src", check[i].thumnail);
        headerImg.setAttribute("alt", "Product image");
        header.appendChild(headerImg);

        let h3 = document.createElement("h3");
        h3.innerHTML = check[i].title;
        header.appendChild(h3);

        let data = document.createElement("data");
        data.setAttribute("value", "39");

        let del = document.createElement("del");
        del.innerHTML = " $" + check[i].price;
        let ins = document.createElement("ins");
        ins.innerHTML = " $" + check[i].newPrice;
        del.appendChild(ins);
        data.appendChild(del);

        header.appendChild(del);
        header.appendChild(ins);

        let p = document.createElement("p");
        p.innerHTML = check[i].desc;
        header.appendChild(p);

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
        header.appendChild(dl);
        let anchor2 = document.createElement("a");
        anchor2.setAttribute("href", "product.html");
        anchor2.innerHTML = "see more";
        header.appendChild(anchor2);
        article.appendChild(header);

        let formColor = document.createElement("form");

        let fieldsetColor = document.createElement("fieldset");
        fieldsetColor.setAttribute("class", "product_info");

        let legendColor = document.createElement("legend");
        legendColor.innerHTML = "Colours";
        fieldsetColor.appendChild(legendColor);

        var colors = check[i].colors;
        for (var j = 0; j < colors.length; j++) {
          let label = document.createElement("label");
          label.setAttribute("class", "container-radio-prod");

          let colorTag = document.createElement("span");
          colorTag.innerHTML = colors[j].color;
          label.appendChild(colorTag);

          let input = document.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "radio");
          label.appendChild(input);
          label.appendChild(input);
          let checkmark = document.createElement("span");
          checkmark.setAttribute("class", "checkmark");
          label.appendChild(checkmark);
          fieldsetColor.appendChild(label);
        }

        let form = document.createElement("form");

        let fieldset = document.createElement("fieldset");
        fieldset.setAttribute("class", "product_info");

        let legend = document.createElement("legend");
        legend.innerHTML = "Sizes";
        fieldset.appendChild(legend);
        var size = check[i].size;
        for (var k = 0; k < size.length; k++) {
          let label = document.createElement("label");
          label.setAttribute("class", "container-radio-prod");

          let colorTag = document.createElement("span");
          colorTag.innerHTML = size[k].size;
          label.appendChild(colorTag);

          let input = document.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "radio");
          label.appendChild(input);
          label.appendChild(input);
          let checkmark = document.createElement("span");
          checkmark.setAttribute("class", "checkmark");
          label.appendChild(checkmark);
          fieldset.appendChild(label);
        }

        let footer = document.createElement("footer");
        footer.setAttribute("class", "product_footer");
        let button1 = document.createElement("button");
        button1.setAttribute("style", "font-size:15px");
        let icon1 = document.createElement("i");
        icon1.setAttribute("class", "fa fa-shopping-cart");
        button1.appendChild(icon1);

        let button2 = document.createElement("button");
        button2.setAttribute("style", "font-size:15px");
        let icon2 = document.createElement("i");
        icon2.setAttribute("class", "fa fa-heart");
        button2.appendChild(icon2);
        formColor.appendChild(fieldsetColor);
        article.appendChild(formColor);
        form.appendChild(fieldset);
        article.appendChild(form);

        footer.appendChild(button1);
        footer.appendChild(button2);
        article.appendChild(footer);
        box.appendChild(article);
        div.appendChild(box);
        container.appendChild(div);
      }
    }
  }
};

// Getting All Products Here
var div = document.createElement("div");
div.setAttribute("class", "productID");
for (var i = 0; i < myProducts.length; i++) {
  let box = document.createElement("box");
  let article = document.createElement("article");
  article.setAttribute("class", "product");

  let header = document.createElement("header");

  let headerImg = document.createElement("img");
  headerImg.setAttribute("src", myProducts[i].thumnail);
  headerImg.setAttribute("alt", "Product image");
  header.appendChild(headerImg);

  let h3 = document.createElement("h3");
  h3.innerHTML = myProducts[i].title;
  header.appendChild(h3);

  let data = document.createElement("data");
  data.setAttribute("value", "39");

  let del = document.createElement("del");
  del.innerHTML = " $" + myProducts[i].price;
  let ins = document.createElement("ins");
  ins.innerHTML = " $" + myProducts[i].newPrice;
  del.appendChild(ins);
  data.appendChild(del);

  header.appendChild(del);
  header.appendChild(ins);

  let p = document.createElement("p");
  p.innerHTML = myProducts[i].desc;
  header.appendChild(p);

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
  header.appendChild(dl);
  let anchor2 = document.createElement("button");
  anchor2.setAttribute("id", "detail-btn");
  anchor2.innerHTML = "Details";
  const v = myProducts[i];
  anchor2.addEventListener("click", function () {
    console.log(v);
    window.location.href = "./product.html";
    var detailBtnId = v;
    localStorage.setItem("cardDetail", JSON.stringify(detailBtnId));
  });

  header.appendChild(anchor2);
  article.appendChild(header);

  let formColor = document.createElement("form");

  let fieldsetColor = document.createElement("fieldset");
  fieldsetColor.setAttribute("class", "product_info");

  let legendColor = document.createElement("legend");
  legendColor.innerHTML = "Colours";
  fieldsetColor.appendChild(legendColor);

  var colors = myProducts[i].colors;
  for (var j = 0; j < colors.length; j++) {
    let label = document.createElement("label");
    label.setAttribute("class", "container-radio-prod");

    let colorTag = document.createElement("span");
    colorTag.innerHTML = colors[j].color;
    label.appendChild(colorTag);

    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "radio");
    label.appendChild(input);
    label.appendChild(input);
    let checkmark = document.createElement("span");
    checkmark.setAttribute("class", "checkmark");
    label.appendChild(checkmark);
    fieldsetColor.appendChild(label);
  }

  let form = document.createElement("form");

  let fieldset = document.createElement("fieldset");
  fieldset.setAttribute("class", "product_info");

  let legend = document.createElement("legend");
  legend.innerHTML = "Sizes";
  fieldset.appendChild(legend);
  var size = myProducts[i].size;
  for (var k = 0; k < size.length; k++) {
    let label = document.createElement("label");
    label.setAttribute("class", "container-radio-prod");

    let colorTag = document.createElement("span");
    colorTag.innerHTML = size[k].size;
    label.appendChild(colorTag);

    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "radio");
    label.appendChild(input);
    label.appendChild(input);
    let checkmark = document.createElement("span");
    checkmark.setAttribute("class", "checkmark");
    label.appendChild(checkmark);
    fieldset.appendChild(label);
  }

  let footer = document.createElement("footer");
  footer.setAttribute("class", "product_footer");
  let button1 = document.createElement("button");
  button1.setAttribute("style", "font-size:15px");
  let icon1 = document.createElement("i");
  icon1.setAttribute("class", "fa fa-shopping-cart");
  button1.appendChild(icon1);

  let button2 = document.createElement("button");
  button2.setAttribute("style", "font-size:15px");
  let icon2 = document.createElement("i");
  icon2.setAttribute("class", "fa fa-heart");
  button2.appendChild(icon2);
  formColor.appendChild(fieldsetColor);
  article.appendChild(formColor);
  form.appendChild(fieldset);
  article.appendChild(form);

  footer.appendChild(button1);
  footer.appendChild(button2);
  article.appendChild(footer);
  box.appendChild(article);
  div.appendChild(box);
  container.appendChild(div);
}

function HighestToLowest() {
  let selectArray = myProducts.sort(function (a, b) {
    return b.newPrice - a.newPrice;
  });

  removeProduct[0].remove();
  var div = document.createElement("div");
  div.setAttribute("class", "productID");

  for (var i = 0; i < selectArray.length; i++) {
    console.log(selectArray[i].title);
    let box = document.createElement("box");
    let article = document.createElement("article");
    article.setAttribute("class", "product");

    let header = document.createElement("header");
    // article.appendChild(header)

    let headerImg = document.createElement("img");
    headerImg.setAttribute("src", selectArray[i].thumnail);
    headerImg.setAttribute("alt", "Product image");
    header.appendChild(headerImg);

    let h3 = document.createElement("h3");
    h3.innerHTML = selectArray[i].title;
    header.appendChild(h3);

    let data = document.createElement("data");
    data.setAttribute("value", "39");

    let del = document.createElement("del");
    del.innerHTML = " $" + selectArray[i].price;
    let ins = document.createElement("ins");
    ins.innerHTML = " $" + selectArray[i].newPrice;
    del.appendChild(ins);
    data.appendChild(del);

    header.appendChild(del);
    header.appendChild(ins);

    let p = document.createElement("p");
    p.innerHTML = selectArray[i].desc;
    header.appendChild(p);

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
    header.appendChild(dl);
    let anchor2 = document.createElement("a");
    anchor2.setAttribute("href", "product.html");
    anchor2.innerHTML = "see more";
    header.appendChild(anchor2);
    article.appendChild(header);

    let formColor = document.createElement("form");

    let fieldsetColor = document.createElement("fieldset");
    fieldsetColor.setAttribute("class", "product_info");

    let legendColor = document.createElement("legend");
    legendColor.innerHTML = "Colours";
    fieldsetColor.appendChild(legendColor);

    var colors = selectArray[i].colors;
    for (var j = 0; j < colors.length; j++) {
      let label = document.createElement("label");
      label.setAttribute("class", "container-radio-prod");

      let colorTag = document.createElement("span");
      colorTag.innerHTML = colors[j].color;
      label.appendChild(colorTag);

      let input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "radio");
      label.appendChild(input);
      label.appendChild(input);
      let checkmark = document.createElement("span");
      checkmark.setAttribute("class", "checkmark");
      label.appendChild(checkmark);
      fieldsetColor.appendChild(label);
    }

    let form = document.createElement("form");

    let fieldset = document.createElement("fieldset");
    fieldset.setAttribute("class", "product_info");

    let legend = document.createElement("legend");
    legend.innerHTML = "Sizes";
    fieldset.appendChild(legend);
    var size = selectArray[i].size;
    for (var k = 0; k < size.length; k++) {
      let label = document.createElement("label");
      label.setAttribute("class", "container-radio-prod");

      let colorTag = document.createElement("span");
      colorTag.innerHTML = size[k].size;
      label.appendChild(colorTag);

      let input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "radio");
      label.appendChild(input);
      label.appendChild(input);
      let checkmark = document.createElement("span");
      checkmark.setAttribute("class", "checkmark");
      label.appendChild(checkmark);
      fieldset.appendChild(label);
    }

    let footer = document.createElement("footer");
    footer.setAttribute("class", "product_footer");
    let button1 = document.createElement("button");
    button1.setAttribute("style", "font-size:15px");
    let icon1 = document.createElement("i");
    icon1.setAttribute("class", "fa fa-shopping-cart");
    button1.appendChild(icon1);

    let button2 = document.createElement("button");
    button2.setAttribute("style", "font-size:15px");
    let icon2 = document.createElement("i");
    icon2.setAttribute("class", "fa fa-heart");
    button2.appendChild(icon2);
    formColor.appendChild(fieldsetColor);
    article.appendChild(formColor);
    form.appendChild(fieldset);
    article.appendChild(form);

    footer.appendChild(button1);
    footer.appendChild(button2);
    article.appendChild(footer);
    box.appendChild(article);
    div.appendChild(box);
    container.appendChild(div);
  }
}

function LowestToHighest() {
  let selectArray = myProducts.sort(function (a, b) {
    return a.newPrice - b.newPrice;
  });

  removeProduct[0].remove();
  var div = document.createElement("div");
  div.setAttribute("class", "productID");

  for (var i = 0; i < selectArray.length; i++) {
    console.log(selectArray[i].title);
    let box = document.createElement("box");
    let article = document.createElement("article");
    article.setAttribute("class", "product");

    let header = document.createElement("header");
    // article.appendChild(header)

    let headerImg = document.createElement("img");
    headerImg.setAttribute("src", selectArray[i].thumnail);
    headerImg.setAttribute("alt", "Product image");
    header.appendChild(headerImg);

    let h3 = document.createElement("h3");
    h3.innerHTML = selectArray[i].title;
    header.appendChild(h3);

    let data = document.createElement("data");
    data.setAttribute("value", "39");

    let del = document.createElement("del");
    del.innerHTML = " $" + selectArray[i].price;
    let ins = document.createElement("ins");
    ins.innerHTML = " $" + selectArray[i].newPrice;
    del.appendChild(ins);
    data.appendChild(del);

    header.appendChild(del);
    header.appendChild(ins);

    let p = document.createElement("p");
    p.innerHTML = selectArray[i].desc;
    header.appendChild(p);

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
    header.appendChild(dl);
    let anchor2 = document.createElement("a");
    anchor2.setAttribute("href", "product.html");
    anchor2.innerHTML = "see more";
    header.appendChild(anchor2);
    article.appendChild(header);

    let formColor = document.createElement("form");

    let fieldsetColor = document.createElement("fieldset");
    fieldsetColor.setAttribute("class", "product_info");

    let legendColor = document.createElement("legend");
    legendColor.innerHTML = "Colours";
    fieldsetColor.appendChild(legendColor);

    var colors = selectArray[i].colors;
    for (var j = 0; j < colors.length; j++) {
      let label = document.createElement("label");
      label.setAttribute("class", "container-radio-prod");

      let colorTag = document.createElement("span");
      colorTag.innerHTML = colors[j].color;
      label.appendChild(colorTag);

      let input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "radio");
      label.appendChild(input);
      label.appendChild(input);
      let checkmark = document.createElement("span");
      checkmark.setAttribute("class", "checkmark");
      label.appendChild(checkmark);
      fieldsetColor.appendChild(label);
    }

    let form = document.createElement("form");

    let fieldset = document.createElement("fieldset");
    fieldset.setAttribute("class", "product_info");

    let legend = document.createElement("legend");
    legend.innerHTML = "Sizes";
    fieldset.appendChild(legend);
    var size = selectArray[i].size;
    for (var k = 0; k < size.length; k++) {
      let label = document.createElement("label");
      label.setAttribute("class", "container-radio-prod");

      let colorTag = document.createElement("span");
      colorTag.innerHTML = size[k].size;
      label.appendChild(colorTag);

      let input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "radio");
      label.appendChild(input);
      label.appendChild(input);
      let checkmark = document.createElement("span");
      checkmark.setAttribute("class", "checkmark");
      label.appendChild(checkmark);
      fieldset.appendChild(label);
    }

    let footer = document.createElement("footer");
    footer.setAttribute("class", "product_footer");
    let button1 = document.createElement("button");
    button1.setAttribute("style", "font-size:15px");
    let icon1 = document.createElement("i");
    icon1.setAttribute("class", "fa fa-shopping-cart");
    button1.appendChild(icon1);

    let button2 = document.createElement("button");
    button2.setAttribute("style", "font-size:15px");
    let icon2 = document.createElement("i");
    icon2.setAttribute("class", "fa fa-heart");
    button2.appendChild(icon2);
    formColor.appendChild(fieldsetColor);
    article.appendChild(formColor);
    form.appendChild(fieldset);
    article.appendChild(form);

    footer.appendChild(button1);
    footer.appendChild(button2);
    article.appendChild(footer);
    box.appendChild(article);
    div.appendChild(box);
    container.appendChild(div);
  }
}
function SortFunct() {
  var e = document.getElementById("sort");
  var sortValue = e.options[e.selectedIndex].value;
  if (sortValue === "Highest to Lowest") {
    HighestToLowest();
  } else if (sortValue === "Lowest to Highest") {
    LowestToHighest();
  }
}
