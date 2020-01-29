<template>
<div>
    <header class="md-layout md-gutter">
        <div class="md-layout-item md-size-15">
            <figure>
                <nuxt-link to="/">
                    <img src="/images/logo.png">
                </nuxt-link>
            </figure>
        </div>
        <div class="md-layout-item md-size-35">
            <md-menu md-size="medium" md-align-trigger>
			<top-button title="Explore" md-menu-trigger/>
                <md-menu-content>
                    <md-menu-item>My Item 1</md-menu-item>
                    <md-menu-item>My Item 2</md-menu-item>
                    <md-menu-item>My Item 3</md-menu-item>
                </md-menu-content>
            </md-menu>
            <!-- <input type="text" /> -->
        </div>
        <div class="md-layout-item md-size-50">
			<md-menu md-size="medium" md-align-trigger>
				<top-button title="About Us" md-menu-trigger/>
                <md-menu-content>
                    <md-menu-item><nuxt-link to="/page/story">Our Journey</nuxt-link></md-menu-item>
                    <md-menu-item><nuxt-link to="/contact-us">Contact Us</nuxt-link></md-menu-item>
                </md-menu-content>
            </md-menu>
			<md-menu md-size="medium" md-align-trigger>
				<top-button title="Partners" md-menu-trigger/>
                <md-menu-content>
                    <md-menu-item><nuxt-link to="/partner/school-institue">School Institutions</nuxt-link></md-menu-item>
                    <md-menu-item><nuxt-link to="/partner/content-collaborator">Content Collaborator</nuxt-link></md-menu-item>
                </md-menu-content>
            </md-menu>
			<md-menu md-size="medium" md-align-trigger>
				<top-button title="English" md-menu-trigger/>
                <md-menu-content>
                    <md-menu-item><nuxt-link to="/partner/school-institue">English</nuxt-link></md-menu-item>
                    <md-menu-item><nuxt-link to="/partner/content-collaborator">Hindi</nuxt-link></md-menu-item>
                </md-menu-content>
            </md-menu>
			<nuxt-link to="/my-repository">My Repository</nuxt-link>
			<md-menu md-size="medium" md-align-trigger class="my-profile">
					<img class="user-sm-img" src="https://appinventiv-development.s3.amazonaws.com/gurushala/profile/1577697396" alt="user-name">
				<top-button title="Najmussaher" md-menu-trigger/>
                <md-menu-content>
                    <md-menu-item><nuxt-link to="/partner/school-institue">English</nuxt-link></md-menu-item>
                    <md-menu-item><nuxt-link to="/partner/content-collaborator">Hindi</nuxt-link></md-menu-item>
                </md-menu-content>
            </md-menu>
			<md-menu md-size="medium" md-align-trigger>
				<top-button title="English" md-menu-trigger/>
                <md-menu-content>
                    <md-menu-item><nuxt-link to="/partner/school-institue">English</nuxt-link></md-menu-item>
                    <md-menu-item><nuxt-link to="/partner/content-collaborator">Hindi</nuxt-link></md-menu-item>
                </md-menu-content>
            </md-menu>
            <!-- <div class="nav_col nav_menu">

                <ul>
                    <li class="partners">
                        <nuxt-link to="/repository/courses-saved">My Repository</nuxt-link>
                    </li>

                    <li class="language">
                        <div class=" after-login angle_dropwn">
                            <figure class="user-sm-img">
                                <img src="https://appinventiv-development.s3.amazonaws.com/gurushala/profile/1577697396" alt="user-name">
                            </figure>
                            <span class="user-log-name">Najmussaher Siddiqui</span>
                        </div>

                        <div class=" fisrtlevl_list">
                            <ul>
                                <li>
                                    <nuxt-link to="/profile/follower">Profile</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/notifications">Notification 6</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="javascript:void(0)" class="account" data-toggle="modal" data-target="#myModal-logout">Logout</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="angle_dropwn language">
                        <nuxt-link to="javascript:void(0)">English</nuxt-link>
                        <div class="fisrtlevl_list">
                            <ul>
                                <li>
                                    <nuxt-link to="/lang/ZW4=">English</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/lang/aGk=">Hindi</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div> -->
        </div>
    </header>
    <section class=" offer_section">
        <nuxt />
    </section>
    <footer>
        <!--Footer Nav Option-->
        <div class="md-layout">
            <div class="md-layout-item">
                <span class="footer_title">About Us</span>
                <div class="footer-list">
                    <ul>
                        <li><nuxt-link to="/page/story">Our Journey</nuxt-link></li>

                        <li>
                            <nuxt-link to="/contact">Contact Us</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="md-layout-item">
                <span class="footer_title">Gallery</span>
                <div class="footer-list">
                    <ul>

                        <li><nuxt-link to="https://gurushala.photo.blog/" target="_blank">Photos</nuxt-link>
                        </li>
                        <li><nuxt-link to="https://www.youtube.com./channel/UCY3vP3nIEhMff0IqxWy46Gw" target="_blank">Videos</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="md-layout-item">
                <span class="footer_title">Get Involved</span>
                <div class="footer-list">
                    <ul>
                        <li><nuxt-link to="/page/volunteer">Volunteer</nuxt-link></li>
                        <li>
                            <nuxt-link to="/page/join-us">Careers</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="md-layout-item">
                <span class="footer_title">Partners</span>
                <div class="footer-list">
                    <ul>
                        <li>
                            <nuxt-link to="/partner/school-institue">School Institutions</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/partner/content-collaborator">Content Collaborator</nuxt-link>
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
                    <img src="/images/foot-logo.png" alt="gurushala">
                </figure>
            </div>
            <div class="md-layout-item">
                <figure class="footer-logo">
                    <img src="/images/pratham-logo.png" alt="pratham">
                </figure>
            </div>
            <div class="md-layout-item">
                <figure class="footer-logo">
                    <img src="/images/vodafone-logo.png" alt="vodafone">
                </figure>
            </div>
            <div class="md-layout-item">
                <figure class="footer-logo">
                    <img src="/images/indus-tower.png" alt="indus-tower">
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
                            <li><nuxt-link to="/page/terms-and-condition">Terms and Conditions</nuxt-link></li>
                            <li><nuxt-link to="/page/privacy-policy">Privacy Policy</nuxt-link></li>
                            <li><nuxt-link to="/page/faq">FAQ</nuxt-link></li>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--Copy Right Footer Close-->
    </footer>
</div>
</template>
<script>
import topButton from "@/components/top-button";
export default {
	components : {
		topButton
	}
}
</script>