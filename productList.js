const url = "https://kea-alt-del.dk/t7/api/products";

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
<article class="productListed">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
            alt="Sahara Team India Fanwear Roundneck Jersey"
          />
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
          <p class="type">Tshirts</p>
          <p class="colour">Blue</p>
          <p class="price"><span>Prev </span>895kr</p>
          <div class="discounted">
            <p>NOW 716kr</p>
            <p>-20%</p>
          </div>
          <a href="product.html">Read more</a>
        </article>
*/

function showProduct(product) {
  console.log(product);
  //.soldOut onSale

  //grab template
  const template = document.querySelector("#productListedTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector(
    ".type"
  ).textContent = `${product.articletype} ${product.usagetype} ${product.brandname}`;
  copy.querySelector(".colour").textContent = product.basecolour;
  copy.querySelector(".price").textContent = `${product.price} DKK`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  copy.querySelector(".discounted p").textContent = `${
    product.price - (product.discount / 100) * product.price
  } DKK`;

  copy.querySelector(".discounted p:nth-of-type(2)").textContent = `${
    product.discount
  }  ${"%"}`;

  //grab parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
  /* 
<div class="discounted">
            <p>NOW 716kr</p>
            <p>-20%</p>
          </div>
*/
}
