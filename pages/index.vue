<template>
<div class="md-layout">
    <div class=" md-layout-item md-size-30 md-small-size-100 md-medium-size-30 ">
        <div class="offer_option ">
            <ul>
                <nuxt-link title="Leaderboard" to="/leaderboard">
                    <li class="cr">Leaderboard</li>
                </nuxt-link>

                <nuxt-link title="Teacher Communities" to="/lac/area">
                    <li class="cd">Teacher Communities</li>
                </nuxt-link>
                <nuxt-link title="Teaching Modules" to="/course">
                    <li class="ed">Teaching Modules</li>
                </nuxt-link>
                <nuxt-link title="Teacher Stories" to="/ed-tech?category%5B%5D=70">
                    <li class="nt">Teacher Stories</li>
                </nuxt-link>
            </ul>
        </div>
    </div>
    <div class="courses_card_col md-layout-item">
        <h2 class="section_title text-left">Gurushala Offers</h2>
        <div class="in">
            <div class="md-layout">
                <div class="md-layout-item md-medium-size-30 md-small-size-100">
                    <div class="offer_card">
                        <nuxt-link to="/course">
                            <div class="inner_wrap">
                                <figure class="offer_cousres_img">
                                    <img src="/images/box1.JPG" data-src="/images/box1.JPG" class=" ls-is-cached lazyloaded">
                                </figure>
                                <span class="offer_title">Courses</span>
                                <p>
                                    Enroll in self-paced, interactive and free to use online courses on innovative pedagogies, classroom management et all
                                </p>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="md-layout-item md-medium-size-50 md-small-size-100">
                    <div class="offer_card">
                        <nuxt-link to="/content">
                            <div class="inner_wrap">
                                <figure class="offer_cousres_img">
                                    <img src="/images/box2.JPG" data-src="/images/box2.JPG" class=" ls-is-cached lazyloaded">
                                </figure>
                                <span class="offer_title">Content Library</span>
                                <p>
                                    Explore a diverse range of free to use and curriculum-aligned online content
                                </p>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>

            <div class="md-layout">
                <div class="md-layout-item  md-medium-size-50 md-small-size-100">
                    <div class="offer_card">
                        <nuxt-link to="/ed-tech">
                            <div class="inner_wrap">
                                <figure class="offer_cousres_img">
                                    <img src="/images/box3.JPG" data-src="/images/box3.JPG" class=" ls-is-cached lazyloaded">
                                </figure>
                                <span class="offer_title">Research Corner</span>
                                <p>
                                    Update yourself with diverse research and inspiring real-life stories on themes like pedagogy, ed-tech and much more
                                </p>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="md-layout-item md-medium-size-50 md-small-size-100">
                    <div class="offer_card">
                        <nuxt-link to="/networking">
                            <div class="inner_wrap">
                                <figure class="offer_cousres_img">
                                    <img src="/images/box4.JPG" data-src="/images/box4.JPG" class=" ls-is-cached lazyloaded">
                                </figure>
                                <span class="offer_title">Staffroom</span>
                                <p>
                                    Connect and engage in discussion groups with teachers across India and share your classroom experiences
                                </p>
                            </div>
                        </nuxt-link>
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
            title: "Home"
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
