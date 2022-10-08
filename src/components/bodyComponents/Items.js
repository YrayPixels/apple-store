import React from "react";
import Favourite from "../ItemDetailsComp/Favourite";
const Items = () => {
    return (

        <div className="container-fluid items text-center">
            <div className="row g-3 justify-content-center">
                {/* Item 1 */}
                <div className="col-6 col-md-5 col-lg-2 itemcard border">
                    <div className="fav">
                        <Favourite />
                    </div>
                    <div className="imgdiv mb-3">
                        <img className="img-fluid" src="images/maleshirt.png" alt="maleshirt" />
                    </div>
                    <div>
                        <a href="/item">Blue Long Sleeved Shirt</a>
                    </div>
                    <div>
                        <p>$200</p>
                    </div>
                    <div className="bg-primary addtocart text-center">
                        <p className="text-white">Add to Cart</p>
                    </div>

                </div>
                <div className="col-6 col-md-5 col-lg-2  itemcard border  p-3">
                    <div className="fav">
                        <Favourite />
                    </div>
                    <div className="imgdiv">
                        <img className="img-fluid" src="images/niki.png" alt="Shoe" />
                    </div>
                    <div>
                        <a href="/item">White Sleek Shoes</a>
                    </div>
                    <div>
                        <p>$315</p>
                    </div>
                    <div className="bg-primary addtocart text-center">
                        <p className="text-white">Add to Cart</p>
                    </div>
                </div>
                <div className="col-6 col-md-5 col-lg-2 itemcard border p-3">
                    <div className="fav">
                        <Favourite />
                    </div>
                    <div className="imgdiv">
                        <img className="img-fluid" src="images/bags.png" alt="bags" />
                    </div>
                    <div>
                        <a href="/item">Black Bag</a>
                    </div>
                    <div>
                        <p>$990</p>
                    </div>
                    <div className="bg-primary addtocart text-center">
                        <p className="text-white">Add to Cart</p>
                    </div>
                </div>
                <div className="col-6 col-md-5 col-lg-2 itemcard border p-3">
                    <div className="fav">
                        <Favourite />
                    </div>
                    <div className="imgdiv">
                        <img className="img-fluid" src="images/denim.png" alt="denim" />
                    </div>
                    <div>
                        <a href="/item">All Weather Denim Jacket</a>
                    </div>
                    <div>
                        <p>$150</p>
                    </div>
                    <div className="bg-primary addtocart text-center">
                        <p className="text-white">Add to Cart</p>
                    </div>
                </div>
                <div className="col-6 col-md-5 col-lg-2 itemcard border p-3">
                    <div className="fav">
                        <Favourite />
                    </div>
                    <div className="imgdiv">
                        <img className="img-fluid" src="images/dress.png" alt="dress" />
                    </div>
                    <div>
                        <a href="/item">Peach Pleated Gown</a>
                    </div>
                    <div>
                        <p>$80</p>
                    </div>
                    <div className="bg-primary addtocart text-center">
                        <p className="text-white">Add to Cart</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Items;