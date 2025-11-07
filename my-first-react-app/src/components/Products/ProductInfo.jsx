const ProductInfo = (props) => {
    return (
        <div className="product-info">
          <span className="ad">Günlük Üretimdir.</span>
        {props.children}
        </div>
    );
};

export default ProductInfo;