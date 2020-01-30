<template>
	<header class="md-layout md-gutter">
		<div class="md-layout-item md-size-20">
			<figure class="logo">
				<nuxt-link to="/">
					<img src="/images/logo.png" />
				</nuxt-link>
			</figure>
		</div>
		<div class="md-layout-item">
			<md-menu md-size="medium" md-align-trigger>
				<top-button title="Explore" md-menu-trigger />
				<md-menu-content>
					<md-menu-item>My Item 1</md-menu-item>
					<md-menu-item>My Item 2</md-menu-item>
					<md-menu-item>My Item 3</md-menu-item>
				</md-menu-content>
			</md-menu>
			<!-- <input type="text" /> -->
		</div>
		<div class="md-layout-item md-size-45">
			<md-menu md-size="medium" md-align-trigger>
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

			<md-button class="md-primary md-raised" @click="active=true">
				Log In/Sign Up
			</md-button>
			<!-- <md-dialog :md-active.sync="active">
				dsdad
			</md-dialog> -->
			<login :active.sync="active" />

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
			<md-menu md-size="medium" :md-offset-x="-10" :md-offset-y="-30">
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
			</md-menu>
		</div>
	</header>
</template>

<script>
import topButton from "@/components/top-button";
import login from "./login";

export default {
	name: "header-component",
	components: {
		topButton,
		login
	},
	data() {
		return {
			active: false
		};
	},
	

};
</script>

<style></style>
