<template>
	<md-dialog :md-active.sync="showSignup" class="md-layout modal-dialog md-scrollbar">
		<md-dialog-title class="text-center">Sign Up</md-dialog-title>
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
			<div class="md-layout md-gutter m-t-sm">
				<div class="md-layout-item text-center">
					<span class="reg">
						Already Registered ?
						<span class="signup signup_form_open">
							Log In
						</span>
					</span>
				</div>
			</div>
			<span class="or">OR</span>
			<form novalidate @submit.prevent="validateUser">
				<md-field>
					<label>Name</label>
					<md-input v-model="form.name"></md-input>
				</md-field>
				<md-field>
					<label>Email Address</label>
					<md-input v-model="form.email"></md-input>
				</md-field>
				<md-field>
					<label>Mobile Number</label>
					<md-input v-model="form.mobile"></md-input>
				</md-field>
				<div>
					<label class="md-layout">Gender</label>
					<md-radio
						class="md-primary"
						v-model="form.gender"
						value="male"
						>Male</md-radio
					>
					<md-radio
						class="md-primary"
						v-model="form.gender"
						value="femail"
						>Female</md-radio
					>
					<md-radio
						class="md-primary"
						v-model="form.gender"
						value="other"
						>Other</md-radio
					>
				</div>
				<div class="md-layout">
					<md-checkbox class="md-layout-item md-size-30" v-model="form.agree" value="1">
						I agree to the
					</md-checkbox>
					<span class="md-layout-item terms">
						<a
							href="http://localhost:8000/page/terms-and-condition"
							class="tnc_link "
						>
							Terms and Conditions
						</a>
						<span class=""> and</span>
						<a
							href="http://localhost:8000/page/privacy-policy"
							class="tnc_link "
						>
							Privacy Policy
						</a>
					</span>
				</div>
				<md-button class="md-raised md-primary">
					Sign Up
				</md-button>
			</form>
		</div>
	</md-dialog>
</template>
<script>
export default {
	name: "signup",
	props: ["active-signup"],
	data() {
		return {
			form: {
				mobile: null,
				password: null
			},
			showSignup: false
		};
	},
	watch: {
		activeSignup(val) {
			if (val) {
				this.showSignup = val;
			}
		},
		showSignup(val) {
			if (!val) {
				this.$emit("update:activeSignup", val);
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.md-dialog {
	max-height: 550px;
	overflow: auto;
}
.terms{
	margin: 16px 16px 16px -16px
}
</style>
