import { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { Link } from "react-router-dom";
import productCardStyles from "../styles/productCardStyles";
import HeaderStyles from "../styles/HeaderStyles"
import axios from "axios";
import Product from "./Product";


function ProductList() {
    const [products, setProdutcs] = useState([]);
    const [choosenProducts, setChoosenProducts] = useState([]);

    const fetchData = async (url) => {
        const response = await axios.get(url);
        const data = response.data;
        setProdutcs(data);
    }

    function hendleChange (id, isChecked) {
        if(isChecked) setChoosenProducts([...choosenProducts, id]);
        else {
            const ids = choosenProducts.filter((choosenId) => choosenId !== id);
            setChoosenProducts([...ids]);
        }
    }

    function hendleClick() {
        const response = deleteProducts();
        if(response){
            let arr = [...products];
            choosenProducts.forEach(id => {
                arr = arr.filter(product => product.SKU !== id);
            });
            setProdutcs([...arr]);
            setChoosenProducts([]);
        }
    }

    async function deleteProducts(){
        await axios.delete("http://localhost:8080/product/delete", {
            data: choosenProducts,
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    useEffect(() => {
        fetchData("http://localhost:8080/product");
    }, []);

    return (
        <>
            <Header title={"Product List"}>
                <Link style={HeaderStyles.Header_btn} to={"/add-product"}>ADD</Link>
                <button id="delete-product-btn" style={HeaderStyles.Header_btn} onClick={() => hendleClick()}>MASS DELETE</button>
            </Header>
            <MainContainer>
                <div style={productCardStyles.container}>
                    {products.map((prod) => {
                        return (
                            <Product key={prod.SKU} product={prod} hendleChange={hendleChange} />
                        );
                    })}
                </div>
            </MainContainer>
        </>
    );
}

export default ProductList;
