import React from "react";
import Landing from "./Landing";
import Categories from "./Categories";
import NewArrival from "./newArrival";
import Items from "./Items";
import Deals from "./Deals";

const Home = () => {
    return (
        <>
            <Landing />
            <Categories />
            <NewArrival />
            <Items />
            <Deals />
        </>
    );
}

export default Home;