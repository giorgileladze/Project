import formStyles from "../styles/formStyles";

function AddProductForm (props) {
    return (
        <form id="product_form" style={formStyles.formBody} onSubmit={() => props.hendleSubmit()}>

            <input style={formStyles.input} type="text" name="SKU" id="sku" onChange={(e) => props.hendleChange(e)} placeholder="unic id"/>
            {props.errors.SKU && <label>SKU is invalid or it is already used</label>}

            <input style={formStyles.input} type="text" name="name" id="name" onChange={(e) => props.hendleChange(e)} placeholder="name"/>
            {props.errors.name && <label>Please provide Name</label>}

            <input style={formStyles.input} type="number" name="price" id="price" onChange={(e) => props.hendleChange(e)} placeholder="price ($)"/>
            {props.errors.price && <label>Please provide Price</label>}

            <select style={formStyles.select} name="productType" id="productType" onChange={(e) => props.hendleChange(e)}>
                <option value="">choose product</option>
                <option value="DVD" >DVD</option>
                <option value="Book" >Book</option>
                <option value="Furniture" >Furniture</option>
            </select>

            {props.productType === "DVD"
            ?  <>
                    <input style={formStyles.input} type="number" id="size" placeholder="size (MG)" name="size" onChange={(e) => props.hendleChange(e)}/>
                    {props.errors.size && <label>Please provide Size</label>}
               </>
            : props.productType === "Book"
            ? <>
                <input style={formStyles.input} type="number" id="weight" placeholder="weight (KG)" name="weight" onChange={(e) => props.hendleChange(e)}/>
                {props.errors.weight && <label>Please provide Weight</label>}
              </>
            : props.productType === "Furniture"
            ? <>
                <div id="Furniture">
                    <input style={formStyles.input} type="number" id="height" placeholder="Height (CM)" name="height" onChange={(e) => props.hendleChange(e)}/>
                    {props.errors.height && <label>Please provide Height</label>}

                    <input style={formStyles.input} type="number" id="width" placeholder="Width (CM)" name="width" onChange={(e) => props.hendleChange(e)}/>
                    {props.errors.width && <label>Please provide Width</label>}

                    <input style={formStyles.input} type="number" id="length" placeholder="Length (CM)" name="length" onChange={(e) => props.hendleChange(e)}/>
                    {props.errors.length && <label>Please provide Length</label>}
                </div>
                <label>Please, provide dimensions</label>
              </>
            : ""}
        </form>
    );
}

export default AddProductForm;