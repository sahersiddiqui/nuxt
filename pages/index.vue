<template>
<div>
    <div class="custom_container">
        <div class="flex_row">
            <div class="courses_col">
                <figure class="offer-img">
                    <img src="/images/homepage.JPG" data-src="/images/homepage.JPG" class=" ls-is-cached lazyloaded">
                    <div class="offer_option">
                        <ul>
                            
                            <a title="Leaderboard" href="https://gurushala.co/leaderboard/overall">
                                <li class="cr">Leaderboard</li>
                            </a>
                            <a title="Teacher Communities" href="https://gurushala.co/lac/area">
                                <li class="cd">Teacher Communities</li>
                            </a>
                            <a title="Teaching Modules" href="https://gurushala.co/course">
                                <li class="ed">Teaching Modules</li>
                            </a>
                            <a title="Teacher Stories" href="https://gurushala.co/ed-tech?category%5B%5D=70">
                                <li class="nt">Teacher Stories</li>
                            </a>
                        </ul>
                    </div>
                </figure>
            </div>
            <div class="courses_card_col">
                <h2 class="section_title text-left">Gurushala Offers</h2>
                <div class="in">

                    <div class="flex-row">
                        <div class="flex_col_sm_5">
                            <div class="offer_card">
                                <a href="https://gurushala.co/course">
                                    <div class="inner_wrap">
                                        <figure class="offer_cousres_img">
                                            <img src="/images/box1.JPG" data-src="/images/box1.JPG" class=" ls-is-cached lazyloaded">
                                        </figure>
                                        <span class="offer_title">Courses</span>
                                        <p>
                                            Enroll in self-paced, interactive and free to use online courses on innovative pedagogies, classroom management et all
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="flex_col_sm_5">
                            <div class="offer_card">
                                <a href="https://gurushala.co/content">
                                    <div class="inner_wrap">
                                        <figure class="offer_cousres_img">
                                            <img src="/images/box2.JPG" data-src="/images/box2.JPG" class=" ls-is-cached lazyloaded">
                                        </figure>
                                        <span class="offer_title">Content Library</span>
                                        <p>
                                            Explore a diverse range of free to use and curriculum-aligned online content
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="flex-row">
                        <div class="flex_col_sm_5">
                            <div class="offer_card">
                                <a href="https://gurushala.co/ed-tech">
                                    <div class="inner_wrap">
                                        <figure class="offer_cousres_img">
                                            <img src="/images/box3.JPG" data-src="/images/box3.JPG" class=" ls-is-cached lazyloaded">
                                        </figure>
                                        <span class="offer_title">Research Corner</span>
                                        <p>
                                            Update yourself with diverse research and inspiring real-life stories on themes like pedagogy, ed-tech and much more
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="flex_col_sm_5">
                            <div class="offer_card">
                                <a href="https://gurushala.co/networking">
                                    <div class="inner_wrap">
                                        <figure class="offer_cousres_img">
                                            <img src="/images/box4.JPG" data-src="/images/box4.JPG" class=" ls-is-cached lazyloaded">
                                        </figure>
                                        <span class="offer_title">Staffroom</span>
                                        <p>
                                            Connect and engage in discussion groups with teachers across India and share your classroom experiences
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            title: "dsdsadsaddasdad"
        };
    },
    head() {
        return {
            title: this.title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    title: "new",
                    hid: "description",
                    name: "description",
                    content: "My custom description"
                }
            ]
        };
    },
    fetch({
        store,
        context
    }) {
        store.commit("test", "sad");
    }
};
</script>
