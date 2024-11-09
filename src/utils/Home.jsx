import React from "react";
import mark from "../assets/img/mark.jpg";
import '../assets/scss/_home.scss';
const homeText = {
    title: "Passionate     Developer",
    desc: ["SI YEON PARK"],
};

const Home = () => {
    return (
        <section id="home">
            <div className="home__inner">
                <h1 className="home__title">{homeText.title}</h1>
                <div className="home__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="home__text">
                    <div className="text">
                        <div>{homeText.desc[0]}</div>
                        <div>{homeText.desc[1]}</div>
                        <div>{homeText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <img src={mark} alt="내가그린그림" />
                    </div>
                </div>
                <div className="home__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Home;
