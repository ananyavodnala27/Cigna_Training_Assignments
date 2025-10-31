import React from "react";

function App() {

  let productCat = ["Electronics", "Accessories", "Gadgets"];
  let productCatList = productCat.map((product) => (
    <li class="list1">
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
      <li>{storeInfo.location}</li>
      <li>{storeInfo.foundedYear}</li>
      <li>{storeInfo.rating}</li>
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
      <h1>TechTrend Store</h1>

      <ul>{productCatList}</ul>

      <ul>{storeInfoList}</ul>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>price</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {prodObj}
        </tbody>
    </table>
  </>
  );
}

export default App;
