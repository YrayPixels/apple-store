import React from "react";

const Categories = () => {
    return (
        <div class="contianer-fluid  pt-5">
            <div class="row g-3 justify-content-evenly">
                <div class="col-12 col-md-3 women categories">
                    <div class="bg-white text-center p-2">
                        <h3>Women's</h3>
                    </div>
                </div>
                <div class="col-12 col-md-3 accessories categories">
                    <div class="bg-white text-center p-2">
                        <h3>Accessories</h3>
                    </div>

                </div>
                <div class="col-12 col-md-3 men categories ">
                    <div class="bg-white text-center p-2">
                        <h3>Men's</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Categories;