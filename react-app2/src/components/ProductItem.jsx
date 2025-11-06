//function ProductItem() {
   // return <div>Hello</div>;
//}
import "./ProductItem.css"

function ProductItem(props) {
    console.log(props.fullName)
     console.log(props.age)
     console.log(props)
   
    const date=new Date(2023,2,20);
    return (
        <div className="product-item">
            <div className="product-image"> 
                <img src={props.imageUrl} alt=""></img>
            </div>
            <div lassName="product-info">
             <h2>{props.productName}</h2>
            <span>4 tl</span>
           <span>{date.toISOString()}</span>
            </div>
            
        </div>
    );
}

export default ProductItem;