<template>
	<header>
		<el-row>
			<el-col  :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
				<div class="brand_wrap">
					<figure class="logo">
						<nuxt-link to="/">
							<img src="/images/logo.png" />
						</nuxt-link>
					</figure>
				</div>
			</el-col>
			<el-col :xs="12" :sm="16" :md="4" :lg="10" :xl="10">
				<el-menu class="el-menu-demo" mode="horizontal"   >
					<el-submenu index="2">
						<template slot="title">Explore</template>
						<el-menu-item index="2-1">item one</el-menu-item>
						<el-menu-item index="2-2">item two</el-menu-item>
						<el-menu-item index="2-3">item three</el-menu-item>
						<el-submenu index="2-4">
							<template slot="title">item four</template>
							<el-menu-item index="2-4-1">item one</el-menu-item>
							<el-menu-item index="2-4-2">item two</el-menu-item>
							<el-menu-item index="2-4-3"
								>item three</el-menu-item
							>
						</el-submenu>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :xs="24" :sm="24" :md="14" :lg="10" :xl="10">
				<div class="">
					<el-menu class="el-menu-demo" mode="horizontal">
						<el-submenu index="2">
							<template slot="title">About Us</template>
							<el-menu-item index="2-1">Our Journey</el-menu-item>
							<el-menu-item path="/contact"
								>Contact Us</el-menu-item
							>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title">Partners</template>
							<el-menu-item index="2-1">Our Journey</el-menu-item>
							<el-menu-item index="2-2">Contact Us</el-menu-item>
						</el-submenu>
						<el-menu-item index="5" @click="modalVisible.activeLogin = true"
							>Log In/Sign Up</el-menu-item
						>

						<el-submenu index="4">
							<template slot="title">Language</template>
							<el-menu-item index="2-1">Our Journey</el-menu-item>
							<el-menu-item index="2-2">Contact Us</el-menu-item>
						</el-submenu>
					</el-menu>
					<!-- <md-menu md-size="medium" md-align-trigger>
						<top-button title="About Us" md-menu-trigger />
						<md-menu-content>
							<md-menu-item>
								<nuxt-link to="/page/story">Our Journey</nuxt-link>
							</md-menu-item>
							<md-menu-item>
								<nuxt-link to="/contact">Contact Us</nuxt-link>
							</md-menu-item>
						</md-menu-content>
					</md-menu>
					<md-menu md-size="medium" md-align-trigger>
						<top-button title="Partners" md-menu-trigger />
						<md-menu-content>
							<md-menu-item>
								<nuxt-link to="/partner/school-institue"
									>School Institutions</nuxt-link
								>
							</md-menu-item>
							<md-menu-item>
								<nuxt-link to="/partner/content-collaborator"
									>Content Collaborator</nuxt-link
								>
							</md-menu-item>
						</md-menu-content>
					</md-menu>

					<md-button class="md-primary md-raised" @click="active = true">
						Log In/Sign Up
					</md-button> -->

					<!-- <nuxt-link to="/my-repository">My Repository</nuxt-link> -->
					<!-- <md-menu md-size="medium" md-align-trigger class="my-profile">
						<img
							class="user-sm-img"
							src="https://appinventiv-development.s3.amazonaws.com/gurushala/profile/1577697396"
							alt="user-name"
						/>
						<top-button title="Najmussaher" md-menu-trigger />
						<md-menu-content>
							<md-menu-item>
								<nuxt-link to="/partner/school-institue">
									My Profile
								</nuxt-link>
							</md-menu-item>
							<md-menu-item>
								<nuxt-link to="/partner/content-collaborator">
									Setting
								</nuxt-link>
							</md-menu-item>
						</md-menu-content>
					</md-menu> -->
					<!-- <md-menu md-size="medium" :md-offset-x="-10" :md-offset-y="-30">
						<top-button title="English" md-menu-trigger />
						<md-menu-content>
							<md-menu-item>
								<nuxt-link to="/partner/school-institue">
									English
								</nuxt-link>
							</md-menu-item>
							<md-menu-item>
								<nuxt-link to="/partner/content-collaborator">
									Hindi
								</nuxt-link>
							</md-menu-item>
						</md-menu-content>
					</md-menu> -->
				</div>
			</el-col>
		</el-row>
		<login :active.sync="modalVisible"  />
		<signup :active.sync="modalVisible"  />
		
	</header>
</template>

<script>
import topButton from "@/components/top-button";
import login from "./login";
import signup from "./signup";

export default {
	name: "header-component",
	components: {
		topButton,
		login,
		signup
	},
	data() {
		return {
			modalVisible : {
				activeLogin: false,
				activeSignup: false

			}
		};
	},
	methods: {
		updateModalVisible(){
			this.modalVisible.activeLogin = false;
			this.modalVisible.activeSignup = false;
		}
	}
};
</script>

<style scoped>
.el-menu.el-menu--horizontal {
    border-bottom:0;
}

.el-icon-arrow-down{
    color: #ef7823;
}
</style>
