import { useEffect, useState } from "react";

function ProductDetails(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // LOADING INITIAL DATA (API)
        // 1 WAY OF FILLING DATA TO products
        const productData = [
            {pid : 1, pname: "Laptop", price: 60000, Display: "LED"},
            {pid : 2, pname: "TV", price: 680000, Display: "LED"},
            {pid : 3, pname: "Smart Watch", price: 8000, Display: "Amoled"},
            {pid : 4, pname: "TV", price: 55000, Display: "LED"},
            {pid : 5, pname: "TV", price: 100000, Display: "LCD"}
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