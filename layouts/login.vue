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
								<span class="fb_icon">
									<font-awesome-icon
										:icon="['fab', 'facebook-square']"
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
									<font-awesome-icon
										:icon="['fab', 'google']"
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
				<el-form :model="form" :ref="formName" :rules="rules">
					<el-form-item label="Mobile Number" prop="mobile" :error="serverError.message">
						<el-input v-model.number="form.mobile" type="age"></el-input>
					</el-form-item>
					<el-form-item label="Password" prop="password" >
						<el-input
							type="password"
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
					<el-button type="primary" @click="loginUser">
						Log In
					</el-button>
				</el-form>
			</div>
		</el-dialog>
	</div>
</template>
<script>
import axios from "@/plugins/axios"
export default {
	components: {},
	name: "login",
	props: {
		active: Object
	},
	data() {
		return {
			formName: "login-form",
			showLogin: false,
			form: {
				mobile: null,
				password: null
			},
			serverError :{
				message : null
			},
			rules: {
				mobile: [
					{
						required: true,
						message: "Please input mobile number",
						trigger: "change"
					},
					{
						type:'number',
						message: "Mobile number must be valid",

					}
				],
				password: [
					{
						required: true,
						message: "Please input password",
						trigger: "change"
					}
				]
			}
		};
	},
	methods: {
		loginFormHandle() {
			this.showLogin = false;
			this.$emit("update:active", {
				activeLogin: false,
				activeSignup: true
			});
		},
		updateModal() {
			this.$emit("update:active", {
				activeLogin: false,
				activeSignup: false
			});
		},
		loginUser() {
			this.$refs[this.formName].validate(valid => {
				if (valid) {
					// axios.post("register", this.form).then(() => {
					// 	this.$message({
					// 		message:
					// 			"Congrats, you have been successfully registered.",
					// 		type: "success"
					// 	});
					// 	this.showSignup = false;
					// });
					this.$auth.loginWith("local", {
						data: {
							mobile: this.form.mobile,
							password: this.form.password
						}
					}).then((response) => {
						this.$message("Login successfully")
						this.updateModal();
					}).catch((error) => {
						this.serverError.message = error.response.data.message
					});
				} else {
					return false;
				}
			});
		}
	},
	watch: {
		// showLogin(val) {
		// 	if (!val) {
		// 		this.$emit("update:active", {activeLogin:false});
		// 	}
		// },
		active: {
			handler(val) {
				if (val.activeLogin) {
					this.showLogin = val.activeLogin;
				}
			},
			deep: true
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
