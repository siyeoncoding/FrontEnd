import React from "react";

const Site = () => {
    return (
        <section id="site">
            <div class="site__inner">
                <h2 class="site__title">Site coding <em>나의 작업물</em></h2>
                <div class="site__wrap">
                    <article class="site__item s1">
                        <span class="num">1.</span>
                        <div class="text">
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>webstandard</div>
                        </div>
                        <h3 class="title">웹 표준을 준수한 사이트 제작</h3>
                        <div class="btn">
                            <a href="https://github.com/webstoryboy/port2023-vite">code</a>
                            <a href="https://port2023-vite.netlify.app/">view</a>
                        </div>
                        <div class="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : html5/css3, CSS Variable, Vite</span>
                        </div>
                    </article>
                    <article class="site__item s2">
                        <span class="num">2.</span>
                        <div class="text">
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>react.js</div>
                        </div>
                        <h3 class="title">리액트를 이용한 사이트 제작</h3>
                        <div class="btn">
                            <a href="https://github.com/webstoryboy/port2023-react">code</a>
                            <a href="https://port2023-react.netlify.app/">view</a>
                        </div>
                        <div class="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : HTML5/CSS3, CSS Variable, Vite</span>
                        </div>
                    </article>
                    <article class="site__item s3">
                        <span class="num">3.</span>
                        <div class="text">
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>vue.js</div>
                        </div>
                        <h3 class="title">뷰를 이용한 사이트 제작</h3>
                        <div class="btn">
                            <a href="https://github.com/webstoryboy/port2023-vue">code</a>
                            <a href="https://port2023-vue.netlify.app/">view</a>
                        </div>
                        <div class="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : vue.js, CSS Variable, vite</span>
                        </div>
                    </article>
                    <article class="site__item s4">
                        <span class="num">4.</span>
                        <div class="text">
                            <div>Make</div>
                            <div>site compliant with</div>
                            <div>next.js</div>
                        </div>
                        <h3>넥스트를 이용한 사이트 제작</h3>
                        <div class="btn">
                            <a href="https://github.com/siyeoncoding/FrontEnd.git">code</a>
                            <a href="https://port2023-next.netlify.app/">view</a>
                        </div>
                        <div class="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : next.js, CSS Variable, Vite</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Site;
