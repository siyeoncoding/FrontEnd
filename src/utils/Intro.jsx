import React, { useEffect, useState } from "react";
import '../assets/scss/_intro.scss';
import { FaUser, FaLightbulb, FaUsers } from 'react-icons/fa';

const INTRO_FIRST = [
    {
        id: "about_me",
        p: '안녕하세요. 문제 해결을 즐기는 개발자 이수민입니다.',
        strong: (
            <>
                “저는 주어진 목표를 달성하기 위해 끊임없이 나아가며 <br />
                이를 위해 꾸준히 노력하고 있습니다.”
            </>
        ),
    },
    {
        id: "about_major",
        p: '인하공업전문대학에서 컴퓨터정보과를 전공하였습니다.',
        strong: (
            <>
                "전공 지식을 바탕으로 여러 프로젝트를 성공적으로 수행한 경험이 있습니다. <br />
                이를 통해 다양한 환경에서도 유연하게 적용할 수 있는 실무 기술과 문제 해결 능력을 갖추게 되었습니다."
            </>
        ),
    }
];

const INTRO_BOTTOM = [
    {
        id: "my_strength",
        p: (
            <>
                어려운 문제가 눈앞에 닥친다 해도 <br />
                포기하지 않고 문제 해결을 위한 노력에 늘 최선을 다해왔습니다.
            </>
        ),
    },
    {
        id: "my_purpose",
        p: '부족한 부분에 대한 성찰을 멈추지 않고 끝없이 자기개발을 해 나갈 것입니다.',
    },
];

const SUB_KEYWORD = [
    {
        id: 1,
        p: '저를 소개하겠습니다.',
        span: "Let me introduce myself",
    },
    {
        id: 2,
        p: 'WHO AM I?',
        span: "I'm Lee Su Min",
    },
];

const KEYWORD = [
    {
        id: "keyword_1",
        icon: <FaLightbulb />,
        title: 'Problem Solver',
        text: '문제 해결에 집중하며, 새로운 문제를 만났을 때 주도적으로 원인을 분석하고 최선의 솔루션을 찾아내는 것을 좋아합니다. 어려움이 닥쳐도 이를 극복하기 위한 다양한 접근 방식을 모색하며 끈기를 가지고 도전합니다.',
    },
    {
        id: "keyword_2",
        icon: <FaUser />,
        title: 'Continuous Learner',
        text: '기술의 발전 속도에 맞춰 꾸준히 새로운 것을 배우고 적용해보려 노력합니다. 특히, 최신 기술 트렌드나 도구들을 탐구하며, 업무에 활용할 수 있는 방식으로 발전시키는 것에 보람을 느낍니다.',
    },
    {
        id: "keyword_3",
        icon: <FaUsers />,
        title: 'Collaborative Team Player',
        text: '팀 내에서 협력하여 문제를 해결하고 목표를 달성하는 것을 중요하게 여깁니다. 동료와의 소통을 통해 서로의 아이디어를 발전시키며 더 나은 결과를 위해 노력합니다. 다양한 관점을 존중하며, 의견을 공유하는 데 적극적입니다.',
    },
];

const Intro = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const subKeywordSection = document.querySelector('.sub-keywords');
            const rect = subKeywordSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="intro-container">
            <section id="intro">
                {/* INTRO_FIRST Section */}
                <div className="intro-section">
                    {INTRO_FIRST.map(item => (
                        <div key={item.id} className="intro-text">
                            <p>{item.p}</p>
                            <strong>{item.strong}</strong>
                        </div>
                    ))}
                </div>

                {/* INTRO_BOTTOM Section */}
                <div className="intro-bottom">
                    {INTRO_BOTTOM.map(item => (
                        <div key={item.id} className="intro-text">
                            <p>{item.p}</p>
                        </div>
                    ))}
                </div>

                {/* SUB_KEYWORD Section */}
                <div className="sub-keywords">
                    {SUB_KEYWORD.map(item => (
                        <div
                            key={item.id}
                            className={`sub-keyword ${isVisible ? 'visible' : ''}`}
                        >
                            <p>{item.p}</p>
                            <span>{item.span}</span>
                        </div>
                    ))}
                </div>

                {/* KEYWORD Section */}
                <div className="keywords-container">
                    {KEYWORD.map(item => (
                        <div key={item.id} className="keyword-item">
                            <div className="keyword-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Intro;