import React from "react";

const Ratings = () => {
    return (
        <>
            <div class="rating-stars">
                <label for="rs0" ></label>
                <input type="radio" name="rating" id="rs0" checked />
                <input type="radio" name="rating" id="rs1" /><label for="rs1" ></label>
                <input type="radio" name="rating" id="rs2" /><label for="rs2"></label>
                <input type="radio" name="rating" id="rs3" /><label for="rs3"></label>
                <input type="radio" name="rating" id="rs4" /><label for="rs4"></label>
                <input type="radio" name="rating" id="rs5" /><label for="rs5"></label>
            </div>
        </>
    );
}

export default Ratings;