import React from "react";

import Intro from "../src/utils/Intro";
import Home from "./utils/Home";
import Header from "./utils/Header";


const MainView = () => {
    return (
        <>
            <Header/>
            <Intro/>
            <Home/>

        </>

    );
};

export default MainView;