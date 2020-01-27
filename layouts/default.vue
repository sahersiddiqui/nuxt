<template>
<div>
    <header class="md-layout">
        <div class="md-layout-item md-size-15">
            <figure>
                <img src="/images/logo.png">
            </figure>
        </div>
        <div class="md-layout-item ">
            <md-menu md-size="medium" md-align-trigger>
                <md-button md-menu-trigger>
                    Explore
                    <md-icon md-src="icons/keyboard_arrow_down.svg" />
                </md-button>
                <md-menu-content>
                    <md-menu-item>My Item 1</md-menu-item>
                    <md-menu-item>My Item 2</md-menu-item>
                    <md-menu-item>My Item 3</md-menu-item>
                </md-menu-content>
            </md-menu>
            <input type="text" />
        </div>
        <div class="md-layout-item">
        </div>
    </header>
    <section>
        <nuxt />
    </section>
    <footer >
        <!--Footer Nav Option-->
        <div class="md-layout">
            <div class="md-layout-item">
                <span class="footer_title">About Us</span>
                <div class="footer-list">
                    <ul>
                        <li><a href="https://gurushala.co/page/story">Our Journey</a></li>

                        <li><a href="https://gurushala.co/contact-us">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="md-layout-item">
                <span class="footer_title">Gallery</span>
                <div class="footer-list">
                    <ul>

                        <li><a href="https://gurushala.photo.blog/" target="_blank">Photos</a>
                        </li>
                        <li><a href="https://www.youtube.com./channel/UCY3vP3nIEhMff0IqxWy46Gw" target="_blank">Videos</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="md-layout-item">
                <span class="footer_title">Get Involved</span>
                <div class="footer-list">
                    <ul>
                        <li><a href="https://gurushala.co/page/volunteer">Volunteer</a></li>
                        <li>
                            <a href="https://gurushala.co/page/join-us">Careers</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="md-layout-item">
                <span class="footer_title">Partners</span>
                <div class="footer-list">
                    <ul>
                        <li>
                            <a href="https://gurushala.co/partner/school-institue">School Institutions</a>
                        </li>
                        <li>
                            <a href="https://gurushala.co/partner/content-collaborator">Content Collaborator</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--Footer Nav Option Close-->
        <!--Brand Partner-->
        <div class="brand_wrapper md-layout">
            <div class="md-layout-item">
                <figure class="footer-logo">
                    <img src="https://gurushala.co/front/images/foot-logo.png" alt="gurushala">
                </figure>
            </div>
            <div class="md-layout-item">
                <figure class="footer-logo">
                    <img src="https://gurushala.co/front/images/pratham-logo.png" alt="pratham">
                </figure>
            </div>
            <div class="md-layout-item">
                <figure class="footer-logo">
                    <img src="https://gurushala.co/front/images/vodafone-logo.png" alt="vodafone">
                </figure>
            </div>
            <div class="md-layout-item">
                <figure class="footer-logo">
                    <img src="https://gurushala.co/front/images/indus-tower.png" alt="indus-tower">
                </figure>
            </div>
        </div>
        <!--Brand Partner Close-->
        <!--Copy Right Footer-->
        <div class="copy-right-foot">
            <div class="custom_container">
                <div class=" md-layout vertical_mid">
                    <div class="md-layout-item">
                        <p class="cpyt">© 2020 gurushala. All rights reserved.</p>
                    </div>
                    <div class="md-layout-item">
                        <div class="tnc_nav">
                            <li><a href="https://gurushala.co/page/terms-and-condition">Terms and Conditions</a></li>
                            <li><a href="https://gurushala.co/page/privacy-policy">Privacy Policy</a></li>
                            <li><a href="https://gurushala.co/page/faq">FAQ</a></li>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--Copy Right Footer Close-->
    </footer>
</div>
</template>
