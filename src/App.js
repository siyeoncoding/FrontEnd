import React from "react";

import Intro from "../src/utils/Intro";
import Home from "./utils/Home";
import Header from "./utils/Header";
import Contact from "./utils/Contact";
import Portfolio from "./utils/Portfolio";
import Stack from "./utils/Stack";


const MainView = () => {
    return (
        <>
            <Header/>
            <Home/>
            <Intro/>
            <Stack/>
            <Portfolio/>
            <Contact/>
        </>

    );
};

export default MainView;