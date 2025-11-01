import { useEffect, useState } from "react";

function ProductDetails(){

    const [products, setProducts] = useState([]);

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

    let productsDisplay = products.map((product) =>
        <tr>
            <td>{product.pid}</td>
            <td>{product.pname}</td>
            <td>{product.price}</td>
            <td>{product.Display}</td>
        </tr>
    );

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
                    </tr>
                </thead>
                <tbody>
                    {productsDisplay}
                </tbody>
            </table>
        </>
    )

}

export default ProductDetails;