const url = "https://kea-alt-del.dk/t7/api/brands";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

/*
<template id="categoryTemplate">
        <article class="letterBrowse">
          <h3>A</h3>
          <ul>
            <li class="letter"><a href="productlist.html?brandname=">Adidas</a></li>
            <li><a href="productlist.html">Acne Studios</a></li>
            <li><a href="productlist.html">Alexander McQueen</a></li>
            <li><a href="productlist.html">Allsaints</a></li>
          </ul>
        </article>
      </temp
*/

function showProduct(product) {
  console.log(product);
  //grab template
  const template = document.querySelector("#categoryTemplate").content;
  //clone template
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector("a").textContent = product.brandname;
  //make the href conect to a product list of brandnames
  copy.querySelector("a").href += product.brandname;

  //grab parent
  const parent = document.querySelector("main");
  //append child
  parent.appendChild(copy);
}
