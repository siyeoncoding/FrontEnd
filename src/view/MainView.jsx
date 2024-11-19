// MainView.jsx
import React from "react";

import Intro from "../src/utils/Intro";
import Home from "./utils/Home";
import Header from "./utils/Header";
import Contack from "../utils/Contack";

// 네비게이션 메뉴 항목 배열
const navigationItems = [
    { title: "Intro", url: "#intro" },
    { title: "My Stack", url: "#stack" },
    { title: "Portfolio", url: "#portfolio" },
    { title: "Contact", url: "#contact" }
];

const MainView = () => {
    return (
        <>
            <Header navItems={navigationItems} /> {/* 네비게이션 항목 배열을 prop으로 전달해야함*/}

            <Home/>

            <Intro/>

            <Stack/>


            <Portfolio/>


            <Contact/>
        </>
    );
};

export default MainView;