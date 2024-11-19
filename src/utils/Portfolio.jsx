import React, { useState } from "react";
import '../assets/scss/_portfolio.scss';
import project_1 from "../assets/img/img1.jpg";
import project_2 from "../assets/img/img2.jpg";
import project_3 from "../assets/img/img3.jpg";
import project_4 from "../assets/img/img4.jpg";
import project_5 from "../assets/img/img5.jpg";


import project_6 from "../assets/img/img6.png";
import project_7 from "../assets/img/img7.png";
import project_8 from "../assets/img/img8.png";
import project_9 from "../assets/img/img9.png";
const PROJECTS = [
    {
        id: "project_1",
        title: '의류 쇼핑몰',
        images: [project_1, project_3, project_4, project_5],
        descriptions: [
            '스프링부트를 사용한 의류 쇼핑몰입니다.',
            '관리자 계정으로 상품을 등록합니다.',
            '유저 계정으로 상품 담기 및 구매가 가능합니다.',
            ' 사용한 기술 스택 입니다. JAVA, JS, JDBC, MYSQL, Spring Boot입니다.'
        ],
    },
    {
        id: "project_2",
        title: '날씨 분석 및 옷차림 추천 웹사이트',
        images: [project_2, project_6, project_7, project_8, project_9, project_5],
        descriptions: ['전국 날씨, 회원 지역 날씨 및 옷차림 추천 사이트입니다.',
            '회원은 자신의 지역을 등록하여 거주지 날씨를 확인 할 수 있습니다.',
            '전국의 날씨를 한번에 확인이 가능합니다.',
            '회원 정보를 통해 자세한 날씨 정보 확인이 가능합니다.',
            '날씨에 알맞은 옷차림을 추천받을 수 있습니다.',
            '날씨 api를 활용한 기술 스택입니다.  JAVA, JS, JDBC, MYSQL, Spring Boot입니다.'],
    },
];


const ExpandedImageModal = ({ image, onClose }) => {
    return (
        <div className="expanded-image-modal">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <img src={image} alt="확대된 이미지" className="expanded-image" />
                <button className="close-button" onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};

const Modal = ({ project, onClose }) => {
    const [index, setIndex] = useState(0);
    const [expandedImage, setExpandedImage] = useState(null);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const handleImageClick = () => {
        setExpandedImage(project.images[index]);
    };

    const closeExpandedImage = () => {
        setExpandedImage(null);
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-image" onClick={handleImageClick}>
                        <img src={project.images[index]} alt={project.title} />
                    </div>
                    <div className="modal-description">
                        <h3>{project.title}</h3>
                        <p>{project.descriptions[index]}</p>
                        <div className="modal-button-container">
                            <button onClick={handleNext}>다음</button>
                            <button onClick={onClose}>닫기</button>
                        </div>
                    </div>
                </div>
                {expandedImage && (
                    <ExpandedImageModal
                        image={expandedImage}
                        onClose={closeExpandedImage}
                    />
                )}
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
                <h2 className="project-title">나의 프로젝트</h2>
                <p className="click-instruction">(이미지를 클릭해주세요.)</p>
                <div className="project-container">
                    {PROJECTS.map((item) => (
                        <div key={item.id} className="project">
                            <div
                                className="project-description"
                                onClick={() => handleImageClick(item)}
                            >
                                <h3>{item.title}</h3>
                            </div>
                            <div
                                className="image"
                                onClick={() => handleImageClick(item)}
                            >
                                <img src={item.images[0]} alt={item.title} className="project-image" />
                            </div>
                        </div>
                    ))}
                </div>
                {modalData && (
                    <Modal
                        project={modalData}
                        onClose={handleCloseModal}
                    />
                )}
            </section>
        </div>
    );
};

export default Portfolio;
