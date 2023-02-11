import Header from "./Header";
import MainContainer from "./MainContainer";
import AddProductForm from "./AddProductForm";
import HeaderStyles from "../styles/HeaderStyles"
import { Link, useNavigate } from "react-router-dom";
import  { useState } from "react";
import axios from "axios";

function AddProduct() {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const formValidator = (event) => {
        const { type } = event.target;
        if(type === "text") textValidator(event.target);
        else if (type === "number") numberValidator(event.target);
    }

    const textValidator = (target) => {
        const reg = /[a-zA-z]/;
        const newErrors = {...errors};
        newErrors[target.name] = true;
        if(reg.test(target.value)) newErrors[target.name] = false;

        setErrors(newErrors);
    }

    const numberValidator = (target) => {
        const reg = /[0-9]/;
        const newErrors = {...errors};
        newErrors[target.name] = true;
        if(reg.test(target.value) && target.value > 0) newErrors[target.name] = false;

        setErrors(newErrors);
    }

    const saveProduct = async () => {
        const response = await axios.post("http://localhost:8080/product/add", {formData} ,{
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if(response.status === 200) {
            navigate("/");
        } else {
            alert("something went wrong");
        }
    }

    const hendleChange = (event) => {
        const { value, name } = event.target;
        const obj = {...formData}

        formValidator(event);
        obj[name] = value;
        setFormData(obj);
    }
    
    const hendleSubmit = () => {
        let isValid = true;
        Object.keys(errors).map(key => {
            if(errors[key]) isValid = false
        });

        if(isValid){
            saveProduct();
        }
    }
    return (
        <>
            <Header title={"Product Add"}>
                <button style={HeaderStyles.Header_btn} onClick={() => hendleSubmit()}>Save</button>
                <Link style={HeaderStyles.Header_btn} to={"/"}>Cancel</Link>
            </Header>
            <MainContainer>
                <AddProductForm hendleSubmit={hendleSubmit} hendleChange={hendleChange} productType={formData.productType} errors={errors}/>
            </MainContainer>
        </>
    );
}

export default AddProduct;