import productCardStyles from "../styles/productCardStyles";

function Product ( props ) {
    return <div style={productCardStyles.cards}>
        <input className="delete-checkbox" id={props.product.SKU} type="checkbox" onChange={(e) => props.hendleChange(props.product.SKU, e.target.checked)}/>
        <div style={productCardStyles.auterContainer}>
            <div style={productCardStyles.cardsInnerContainer}>
                <h3>{props.product.SKU}</h3>
                <h5>{props.product.name}</h5>
                <h5>{props.product.price} $</h5>
                <h5>
                    {props.product.type === "dvd" ? "size: " + props.product.size
                        : props.product.type === "book" ? "weight: " + props.product.weight
                            : "dimension: " + props.product.height + "x" +props.product.length + "x" +props.product.width
                    }
                </h5>
            </div>
        </div>
    </div>
}

export default Product;