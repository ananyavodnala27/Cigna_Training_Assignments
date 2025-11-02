
function Products(){

    const productsArr = [
            {pid: 1, img: "/Phone img.jpg", name: "Phone", descOfProd: "It is a mobile device."},
            {pid: 2,img: "/Laptop img.jpg", name: "Laptop", descOfProd: "A small, portable personal computer (PC)."},
            {pid: 3,img: "/TV img.jpg", name: "TV", descOfProd: "System for transmitting moving images and sound over a distance."},
            {pid: 4,img: "/Keyboard img.jpg", name: "Keyboard", descOfProd: "Input device with an array of buttons, or keys."},
            {pid: 5,img: "/Mouse img.jpg", name: "Mouse", descOfProd: "A handheld input device that controls a cursor on a computer screen."}
        ];

    return (
        <div className="container">

            {/* <div className="card">
                <img src="/assets/Laptop img.jpg" height="200" alt="laptop pic"/>
                <h4>Laptop</h4>
                <p>A small, portable personal computer (PC).</p>
            </div>

            <div className="card">
                <img src="/assets/Keyboard img.jpg" height="200" alt="Keyboard image"/>
                <h4>Keyboard</h4>
                <p>Input device with an array of buttons, or keys.</p>
            </div>

            <div className="card">
                <img src="/assets/Mouse img.jpg" height="200" alt="Mouse gadget pic"/>
                <h4>Mouse</h4>
                <p>A handheld input device that controls a cursor on a computer screen.</p>
            </div>

            <div className="card">
                <img src="/assets/Phone img.jpg" height="200" alt="Phone image"/>
                <h4>Phone</h4>
                <p>It is a mobile device.</p>
            </div>

            <div className="card">
                <img src="/assets/TV img.jpg" height="200" alt="TV img"/>
                <h4>TV</h4>
                <p>System for transmitting moving images and sound over a distance.</p>
            </div> */}

            {productsArr.map((product, index)=>
                                            <div className="card">{
                                                <img src={"/assets" + product.img} height="200"/>}
                                                <h4>{product.name}</h4>
                                                {/* <p>{index + 1}</p> */}
                                                <p>{product.descOfProd}</p>
                                            </div>)
            };

        </div>
    )

}

export default Products;