<template>
	<header>
		<el-row>
			<el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
				<div class="brand_wrap">
					<figure class="logo">
						<nuxt-link to="/">
							<img src="/images/logo.png" />
						</nuxt-link>
					</figure>
				</div>
			</el-col>
			<el-col :xs="12" :sm="16" :md="4" :lg="8" :xl="10">
				<el-menu class="el-menu-demo" mode="horizontal">
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
			<el-col :xs="24" :sm="24" :md="14" :lg="12" :xl="10">
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

						<el-menu-item index="5" v-if="isAuthenticated">
							<nuxt-link to="/my-repository">
								My Repository
							</nuxt-link>
						</el-menu-item>
						<el-submenu v-if="isAuthenticated" index="4">
							<template slot="title">{{
								loggedInUser.name
							}}</template>
							<el-menu-item index="4-1">My Profile</el-menu-item>
							<el-menu-item index="4-2">Settings</el-menu-item>
							<el-menu-item index="4-2" @click="logOutUser">Logout</el-menu-item>
						</el-submenu>
						<el-menu-item
						v-else
							index="5"
							@click="modalVisible.activeLogin = true"
							>Log In/Sign Up</el-menu-item
						>
						<el-submenu index="5">
							<template slot="title">Language</template>
							<el-menu-item index="2-1">Our Journey</el-menu-item>
							<el-menu-item index="2-2">Contact Us</el-menu-item>
						</el-submenu>
					</el-menu>
				</div>
			</el-col>
		</el-row>
		<login :active.sync="modalVisible" />
		<signup :active.sync="modalVisible" />
	</header>
</template>

<script>
import topButton from "@/components/top-button";
import login from "./login";
import signup from "./signup";
import { mapGetters } from "vuex";

export default {
	name: "header-component",
	components: {
		topButton,
		login,
		signup
	},
	computed: {
		...mapGetters(["isAuthenticated", "loggedInUser"])
	},
	data() {
		return {
			modalVisible: {
				activeLogin: false,
				activeSignup: false
			}
		};
	},
	methods: {
		updateModalVisible() {
			this.modalVisible.activeLogin = false;
			this.modalVisible.activeSignup = false;
		},
		logOutUser(){
			this.$auth.logout().then(response => {
				this.$message("Logout successfully")
			}).catch((error) => {
				this.$message( error)
			});
		}
	}
};
</script>

<style scoped>
.el-menu.el-menu--horizontal {
	border-bottom: 0;
}

.el-icon-arrow-down {
	color: #ef7823;
}
</style>
