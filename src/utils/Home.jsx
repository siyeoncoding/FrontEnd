import React from "react";

const Home = ({ children }) => {
    return (
        <main id="main" role="main">
            {children}
        </main>
    );
};

export default Home;