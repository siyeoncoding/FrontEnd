import React, { useState } from "react";
import '../assets/scss/_portfolio.scss';
import project_1 from "../assets/img/img1.jpg";
import project_2 from "../assets/img/img2.jpg";

const PORTFOLIO_INTRO = [
    {
        id: "intro_title",
        p: '제 포트폴리오에 오신 것을 환영합니다!',
        strong: '“여기는 제가 진행한 프로젝트와 경험을 소개하는 공간입니다.”',
    },
    {
        id: "intro_description",
        p: '저는 다양한 기술과 도구를 활용하여 여러 프로젝트를 성공적으로 수행해왔습니다. 이러한 경험을 통해 문제 해결 능력과 실무 기술을 발전시켰습니다.',
        strong: '“이 포트폴리오를 통해 저의 성장 과정을 확인해 주세요.”',
    }
];

const PROJECTS = [
    {
        id: "project_1",
        title: '의류 쇼핑몰',
        description: '본 프로젝트는 의류 쇼핑몰 웹사이트입니다. 관리자와 사용자의 계정을 나눠 관리자는 상품등록 사용자는 물건 구매가 가능합니다.' +
            '사용한 기술은 JAVA, JS, JDBC, MYSQL, Spring Boot입니다. ',
        image: project_1,
    },
    {
        id: "project_2",
        title: '날씨 분석 및 옷차림 추천 웹사이트',
        description: '본 프로젝트는 Api를 활용하여 전국의 날씨정보 및 옷차림 추천을 제공하는 웹사이트입니다. 전국별 날씨와 자신이 거주중인 지역의 날씨를 파악하고 ' +
            '적절한 옷차림을 추천받을 수 있습니다. 사용한 기술은 JAVA, JS, JDBC, MYSQL, Spring Boot 입니다.',
        image: project_2,
    },
];

const Modal = ({ title, description, image, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="modal-description">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="modal-button-container">
                            <button onClick={onClose}>닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Portfolio = () => {
    const [modalData, setModalData] = useState(null);

    const handleImageClick = (project) => {
        setModalData(project);
    };

    const handleCloseModal = () => {
        setModalData(null);
    };

    return (
        <div>
            <section id="portfolio">
                {/* 포트폴리오 소개 섹션 */}
                <div className="portfolio-intro">
                    {PORTFOLIO_INTRO.map(item => (
                        <div key={item.id}>
                            <p>{item.p}</p>
                            <strong>{item.strong}</strong>
                        </div>
                    ))}
                </div>

                {/* 프로젝트 섹션 */}
                <h2 className="project-title">나의 프로젝트</h2>
                <p className="click-instruction">(이미지를 클릭해주세요.)</p>
                <div className="project-container">
                    {PROJECTS.map(item => (
                        <div key={item.id} className="project">
                            <div className="project-description" onClick={() => handleImageClick(item)}>
                                <h3>{item.title}</h3>
                            </div>
                            {item.image && (
                                <div className="image" onClick={() => handleImageClick(item)}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="project-image"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {modalData && (
                    <Modal
                        title={modalData.title}
                        description={modalData.description}
                        image={modalData.image}
                        onClose={handleCloseModal}
                    />
                )}
            </section>
        </div>
    );
};

export default Portfolio;
