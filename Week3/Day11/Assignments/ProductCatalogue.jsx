
function ProductCatalogue(){
    let productCat = ["Electronics", "Accessories", "Gadgets", "Wearables"];
    let productCatList = productCat.map((product) => (
        <li>
        {product}
        </li>
    ));

    let storeInfo = {
        location: "New York",
        foundedYear: 2000,
        rating: 4.5
    };
    let storeInfoList = (
        <>
        <li><strong>Location : </strong>{storeInfo.location}</li>
        <li><strong>Founded Year : </strong>{storeInfo.foundedYear}</li>
        <li><strong>Rating : </strong>{storeInfo.rating}</li>
        </>
    );

    let productArrObj = [
        {ID: 100, name: "Laptop", price: 65000, category: "Electronics"},
        {ID: 101, name: "TV", price: 85000, category: "Electronics"},
        {ID: 102, name: "Keyboard", price: 5000, category: "Electronics"},
        {ID: 103, name: "Smart Watch", price: 5000, category: "Gadgets"},
        {ID: 104, name: "Phone Case", price: 2000, category: "Electronics"}
    ];
    let prodObj = productArrObj.map((prod) => (
        <tr>
            <td>{prod.ID}</td>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
            <td>{prod.category}</td>
        </tr>
    ));


    return (
        <>
        <h1>TechTrend Innovations</h1>

        <section>
            <h2>Product Categories</h2>
            <ul className="list1">{productCatList}</ul>
            <hr/>
        </section>

        <section>
            <h2>Store Information</h2>
            <ul className="list2">{storeInfoList}</ul>
            <hr/>
        </section>

        <section>
            <h2>Featured Products</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                    {prodObj}
                </tbody>
            </table>
            <hr/>
        </section>

        <footer>
            © TechTrend Innovations. All Rights Reserved.
        </footer>
    </>
    );
}

export default ProductCatalogue;
