import React from "react";

const Categories = () => {
    return (
        <div className="contianer-fluid  pt-5">
            <div className="row g-3 justify-content-evenly">
                <div className="col-12 col-md-3 women categories">
                    <div className="bg-white text-center p-2">
                        <h3>Women's</h3>
                    </div>
                </div>
                <div className="col-12 col-md-3 accessories categories">
                    <div className="bg-white text-center p-2">
                        <h3>Accessories</h3>
                    </div>

                </div>
                <div className="col-12 col-md-3 men categories ">
                    <div className="bg-white text-center p-2">
                        <h3>Men's</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Categories;