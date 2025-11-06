import ProductItem from "./ProductItem";
import "./Products.css"

const productData= [
    {
        productName:"Soda",
        imageUrl:"https://cdn03.ciceksepeti.com/cicek/vbt451-1/L/vbt451-1-8dcf452e8f79374-7afb036.jpg",
        productPrice:4,
    },
    {
        productName:"Bilgisayar",
        imageUrl:"https://cdn03.ciceksepeti.com/cicek/vbt451-1/L/vbt451-1-8dcf452e8f79374-7afb036.jpg",
        productPrice:5,
    },
]


function Products() {
    const fullName="Emin Başbayan";
     const imageUrl="https://cdn03.ciceksepeti.com/cicek/vbt451-1/L/vbt451-1-8dcf452e8f79374-7afb036.jpg"  //react icinde javascript kullandim.
    const productName="Çiçek";
    return (
      <div className="product-wrapper">
        <h1>Products</h1>
    <div className="products">
      {productData.map((product) => {
        return (
          <ProductItem 
          
         imageUrl={productData[product].imageUrl}
         productName={productData[product].productName}
         productPrice={productData[product].productPrice}
     />
        );
      })}

    </div>
      </div>
    );
}

export default Products;