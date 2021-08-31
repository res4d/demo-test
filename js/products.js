
// Get Product
const getProducts = async () => {
  try {
    const results = await fetch("./data/products.json");
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};



/*
=============
Load Category Products
=============
 */

const categoryCenter = document.querySelector(".category__center");

window.addEventListener("DOMContentLoaded", async function () {
  const products = await getProducts();
  displayProductItems(products);
});



const categoryCenter = document.querySelector("category__center")





// Display  Products
const displayProductItems = items => {
  let displayProduct = items.map(
    product => ` 
                  <div class="product category__products">
                    <div class="product__header">
                      <img src=${product.image} alt="product">
                    </div>
                    <div class="product__footer">
                      <h3>${product.title}</h3>
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="product__price">
                        <h4>$${product.price}</h4>
                      </div>
                      <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
                    </div>
                    <ul>
                      <a href="#">
                        <i class="far fa-eye"></i>
                      </a>
                      <a href="#">
                        <i class="far fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="fas fa-sync-alt"></i>
                      </a>
                  </ul>
                  </div>
                  `
  );

  displayProduct = displayProduct.join("");
  if (categoryCenter) {
    categoryCenter.innerHTML = displayProduct;
  }
};





/*
=============
Filtering
=============
 */



/*
=============
Product Details Left
=============
 */


// Picture List


// Active Picture



// change active image


/*
=============
Product Details Bottom
=============
 */

