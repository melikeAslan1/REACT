import ProductItem from "./ProductItem.jsx";
import "./Products.css";
import {productData} from "../../ProductData.js";


const Products = () => {
    return (
        <div className="product-wrapper">
          <h1>Ürünler</h1>
          <div className="products">
         {productData.map((product) => {
            return (
               <ProductItem
         key={product.productName}
              product={product}
          />
            );
         }
        )}
         </div>
        </div>
    );
}

export default Products;