<template>
	<div>
		<el-dialog
			title="Log In"
			:visible.sync="showLogin"
			class=""
			width="500px"
			v-on:closed="updateModal"
		>
			<!-- <span class="text-center">Log In</span> -->
			<div class="account_form">
				<div class="account_with">
					<ul>
						<li>
							<a
								href="https://gurushalaqa.appinventive.com/social-login/facebook"
							>
								<span class="img_fb">
									<img
										src="https://gurushalaqa.appinventive.com/front/images/fb-sm.svg"
									/>
								</span>
								<span class="social_text">Facebook</span>
							</a>
						</li>
						<li>
							<a
								href="https://gurushalaqa.appinventive.com/social-login/google"
							>
								<span class="img_gplus">
									<img
										src="https://gurushalaqa.appinventive.com/front/images/google-sm.svg"
									/>
								</span>
								<span class="social_text">Google</span>
							</a>
						</li>
					</ul>
				</div>
				<div class=" m-t-sm">
					<div class="md-layout-item text-center">
						<span class="reg">
							Not a registered User?
							<span class="signup" @click="loginFormHandle">
								Sign Up
							</span>
						</span>
					</div>
				</div>
				<span class="or">OR</span>
				<el-form :model="form" @submit.prevent="validateUser">
					<el-form-item label="Mobile Number">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="Password">
						<el-input
							v-model="form.password"
							autocomplete="off"
						></el-input>
					</el-form-item>
					<el-row :gutter="20">
						<el-col>
							<span class="reg">
								Forgot Password?
							</span>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="12">
							<el-checkbox v-model="form.checked"
								>Remember Me?</el-checkbox
							>
						</el-col>
						<el-col :span="12" class="text-right">
							<el-link class="link_below">
								Proceed with otp
							</el-link>
						</el-col>
					</el-row>
					<el-button type="primary">
						Log In
					</el-button>
				</el-form>
			</div>
		</el-dialog>
	</div>
</template>
<script>
export default {
	components: {},
	name: "login",
	props: {
		active: Object
	},
	data() {
		return {
			showLogin: false,
			form: {
				mobile: null,
				password: null
			}
		};
	},
	methods: {
		loginFormHandle() {
			this.showLogin = false;
			this.$emit("update:active", {activeLogin:false,activeSignup:true});
		},
		updateModal(){
			this.$emit("update:active", {activeLogin:false,activeSignup:false});
		}
	},
	watch: {
		// showLogin(val) {
		// 	if (!val) {
		// 		this.$emit("update:active", {activeLogin:false});
		// 	}
		// },
		active: {
			handler (val) {
				if (val.activeLogin) {
					this.showLogin = val.activeLogin;
				}
			},
			deep :true
		}
	}
};
</script>
<style lang="scss" scoped>
.el-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.md-dialog {
	max-height: 550px;
	overflow: auto;
}
</style>
