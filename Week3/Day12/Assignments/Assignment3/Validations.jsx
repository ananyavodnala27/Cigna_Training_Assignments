import { useEffect, useState } from "react";

function ProductDetails(){

    const [products, setProducts] = useState([]);

    // const [pid, setPid] = useState();
    const [pname, setPname] = useState("");
    const [price, setPrice] = useState("");
    const [display, setDisplay] = useState("");

    const [prodNameError, setProductNameError] = useState();
    const [priceError, setPriceError] = useState();

    useEffect(() => {
        // LOADING INITIAL DATA (API)
        // 1 WAY OF FILLING DATA TO products
        const productData = [
            {pid : 1, pname: "Laptop", price: 60000, display: "LED"},
            {pid : 2, pname: "Keyboard", price: 8000, display: "LED"},
            {pid : 3, pname: "Smart Watch", price: 8000, display: "Amoled"},
            {pid : 4, pname: "TV Remote", price: 5000, display: "LED"},
            {pid : 5, pname: "Smart Phone", price: 100000, display: "LCD"}
        ];
        setProducts(productData);
    }, []);

    // useEffect(() =>
    // {
    //     // 2ND WAY OF FILLING DATA TO products
    //     setProducts(
    //         [
    //              {pid : 1, pname: "Laptop", price: 60000, display: "LED"},
    //              {pid : 2, pname: "Keyboard", price: 8000, display: "LED"},
    //              {pid : 3, pname: "Smart Watch", price: 8000, display: "Amoled"},
    //              {pid : 4, pname: "TV Remote", price: 5000, display: "LED"},
    //              {pid : 5, pname: "Smart Phone", price: 100000, display: "LCD"}
    //         ]
    //     );
    // }, []);

    let productsDisplay = products.map((product, index) =>
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.pname}</td>
            <td>{product.price}</td>
            <td>{product.display}</td>
            <td><a href="#" onClick={() => deleteProduct(index)}>Delete</a></td>
        </tr>
    );

    function addProduct(){

        setProductNameError("");
        setPriceError("");

        if(pname.trim() === "")
        {
            setProductNameError("Product Name is Required");
            return;
        }
        else if(pname.length < 4)
        {
            setProductNameError("Product Name Should be ATLEAST 4 Characters Long.");
            return;
        }

        if(price === "")
        {
            setPriceError("Price is Required");
            return;
        }
        else if(parseInt(price) < 0)
        {
            setPriceError("Price Should be Greater than 0");
            return;
        }

        const newProduct = {pname : pname, price: price, display : display};
        setProducts([...products, newProduct]);
        setPname("");
        setPrice("");
        setDisplay("");
    }

    function deleteProduct(i){
        setProducts(products.filter((product, index) => index !== i));

    }

    return (
        <>
            <h1>Product Details Table</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Display</th>
                        <th>Delete Items</th>
                    </tr>
                </thead>
                <tbody>
                    {productsDisplay}
                </tbody>
            </table>

            {/* <label>
                Product ID:
                <input type="text" value={pid} onChange={(e) => setPid(e.target.value)}/>
            </label> */}

            {/* <br/><br/> */}

            <label>
                Product Name:
                <input type="text" value={pname} onChange={(e) => setPname(e.target.value)}/>
                <span>{prodNameError}</span>
            </label>

            <br/><br/>

            <label>
                Product Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <span>{priceError}</span>
            </label>

            <br/><br/>

            <label>
                Display:
                <input type="text" value={display} onChange={(e) => setDisplay(e.target.value)}/>
            </label>

            &nbsp;

            <button onClick={addProduct}>Add Product</button>
        </>
    )

}

export default ProductDetails;