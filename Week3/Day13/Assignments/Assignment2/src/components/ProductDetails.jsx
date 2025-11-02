import { Link, useParams } from "react-router-dom";

function ProductDetails(){

    const { id } = useParams(); // URL PARAMETERS

    const productsArr = [
            {pid: 1, img: "/Phone img.jpg", name: "Phone", descOfProd: "It is a mobile device."},
            {pid: 2,img: "/Laptop img.jpg", name: "Laptop", descOfProd: "A small, portable personal computer (PC)."},
            {pid: 3,img: "/TV img.jpg", name: "TV", descOfProd: "System for transmitting moving images and sound over a distance."},
            {pid: 4,img: "/Keyboard img.jpg", name: "Keyboard", descOfProd: "Input device with an array of buttons, or keys."},
            {pid: 5,img: "/Mouse img.jpg", name: "Mouse", descOfProd: "A handheld input device that controls a cursor on a computer screen."}
        ];

    const prodObj = productsArr.find((product) => product.pid == id);

    return (
        <>
            <h2>Product {prodObj.pid} Details -</h2>
            <p>Product Title : {prodObj.name}<br/>
               Product Description : {prodObj.descOfProd}
            </p>
            <Link to="/Products">Back to Products Page</Link>
        </>
    )

}

export default ProductDetails;