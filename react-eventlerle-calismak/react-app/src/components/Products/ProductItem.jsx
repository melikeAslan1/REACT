import ProductInfo from "./ProductInfo";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;

  const clickHandler = () => console.log("Sepete Eklendi!");

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{productName}</h2>
        <span>{productPrice}₺</span>
        <br />
        <button onClick={() => console.log("Sepete Eklendi!")}>
          Sepete Ekle
        </button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
