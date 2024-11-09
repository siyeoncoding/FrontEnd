import React, { useState } from "react";
import '../assets/scss/_header.scss';

// 네비게이션 항목 배열을 직관적인 이름으로 정의
const navigationItems = [
    { title: "Intro", url: "#intro" },
    { title: "My Stack", url: "#stack" },
    { title: "Portfolio", url: "#portfolio" },
    { title: "Contact", url: "#contact" }
];

const Header = () => {
    // 메뉴의 가시성 상태를 관리
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // 메뉴 토글 함수
    const toggleMenuVisibility = () => {
        setIsMenuVisible((prevVisibility) => !prevVisibility);
    };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                {/* 로고 영역 */}
                <div className="header__logo">
                    <a href="/">MyProject<em>react.js</em></a>
                </div>

                {/* 네비게이션 메뉴 */}
                <nav className={`header__nav ${isMenuVisible ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {navigationItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 모바일 메뉴 토글 버튼 */}
                <div
                    className={`header__nav__mobile ${isMenuVisible ? "open" : ""}`}
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={isMenuVisible ? "true" : "false"}
                    role="button"
                    tabIndex="0"
                    onClick={toggleMenuVisibility}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
