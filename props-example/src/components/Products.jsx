import ProductItem from "./ProductItem";

function Products() {
   const fullName="Melike Aslan Demirkiran";
   const imageUrl="https://cdn03.ciceksepeti.com/cicek/vbt451-1/L/vbt451-1-8dcf452e8f79374-7afb036.jpg";
   const ProductName="Çiçek";
   const ProductPrice=4;
    return (
        <div class-name="product-wrapper">
         <h1>Products</h1>
         <div className="products">
           <ProductItem fullName={fullName} age="25" imageUrl={imageUrl} ProductName={ProductName}
            ProductPrice={ProductPrice}/>
         </div>
        </div>
    )
}

export default Products;