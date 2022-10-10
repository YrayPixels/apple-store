import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
const PaymentTypeSelector = (props) => {


    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };
    const [isShown, setisShown] = useState(false);

    function handleClick() {
        setisShown(true);
    };


    return (
        <>
            <div className="text-center">
                <h4>Kindly select your preffered payment option </h4>
            </div>
            <div className="d-flex fs-4 justify-content-evenly">

                <div>
                    <p onClick={handleClick} className="text-primary fw-bold">$495.00</p>

                </div>
                <div>
                    <p className="text-success fw-bold">$148.00 <span class="badge fw-light bg-secondary">70% 0ff
                    </span></p>
                    {/* <span className="fs-6">get 70% off with our new Team Purchase</span> */}
                </div>
            </div>
        </>
    );
}

export default PaymentTypeSelector;