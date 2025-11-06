
function ProductItem(props) {
    console.log(props)

    return(
<div className="product-item">
     <div className="product-image">
       <img src={props.imageUrl} alt=""/>
     </div>
     <div className="product-info">
      <h2>{props.ProductName}</h2>
      <span>{props.ProductPrice}</span>
      <span>{props.FullName}</span>
     </div>
</div>
    );
}

export default ProductItem;