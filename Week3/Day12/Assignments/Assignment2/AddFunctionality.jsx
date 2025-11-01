import { useEffect, useState } from "react";

function ProductDetails(){

    const [products, setProducts] = useState([]);

    const [pid, setPid] = useState();
    const [pname, setPname] = useState();
    const [price, setPrice] = useState();
    const [display, setDisplay] = useState();

    useEffect(() => {
        // LOADING INITIAL DATA (API)
        // 1 WAY OF FILLING DATA TO products
        const productData = [
            {pid : 1, pname: "Laptop", price: 60000, display: "LED"},
            {pid : 2, pname: "TV", price: 680000, display: "LED"},
            {pid : 3, pname: "Smart Watch", price: 8000, display: "Amoled"},
            {pid : 4, pname: "TV", price: 55000, display: "LED"},
            {pid : 5, pname: "TV", price: 100000, display: "LCD"}
        ];
        setProducts(productData);
    }, []);

    // useEffect(() =>
    // {
    //     // 2ND WAY OF FILLING DATA TO products
    //     setProducts(
    //         [
    //             {pid : 1, pname: "Laptop", price: 60000, Display: "LED"},
    //             {pid : 2, pname: "TV", price: 680000, Display: "LED"},
    //             {pid : 3, pname: "Smart Watch", price: 8000, Display: "Amoled"},
    //             {pid : 4, pname: "TV", price: 55000, Display: "LED"},
    //             {pid : 5, pname: "TV", price: 100000, Display: "LCD"}
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
        const newProduct = {pname : pname, price: price, display : display};
        setProducts([...products, newProduct]);
        setPid("");
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
            </label>

            <br/><br/>

            <label>
                Product Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
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