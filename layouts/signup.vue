<template>
	<md-dialog :md-active.sync="active" class="modal-dialog md-scrollbar">
		<md-dialog-title class="text-center">Signup In</md-dialog-title>
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
									rc="https://gurushalaqa.appinventive.com/front/images/google-sm.svg"
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
						Not a registered User?
						<span class="signup signup_form_open">
							Sign Up
						</span>
					</span>
				</div>
			</div>
			<span class="or">OR</span>
			<form novalidate @submit.prevent="validateUser">
				<md-field>
					<label>Mobile Number</label>
					<md-input v-model="form.mobile"></md-input>
				</md-field>
				<md-field>
					<label>Password</label>
					<md-input
						type="password"
						v-model="form.password"
					></md-input>
				</md-field>
				<div class="md-layout md-gutter">
					<div class="md-layout-item ">
						<span class="reg">
							Forgot Password?
						</span>
					</div>
				</div>
				<div class="md-layout md-gutter">
					<div class="md-layout-item ">
						<md-checkbox v-model="form.string" value="my-checkbox"
							>Remember me</md-checkbox
						>
					</div>
					<div class="md-layout-item link_below text-right ">
						<span class="">
							Proceed with otp
						</span>
					</div>
				</div>
				<md-button class="md-raised md-primary">
					Log In
				</md-button>
			</form>
		</div>
	</md-dialog>
</template>
<script>
export default {
    name:"signup",
    props : ["active"],
    data() {
		return {
			form: {
				mobile: null,
				password: null
			}
		};
	}
}
</script>
<style lang="scss" scoped>
  .md-dialog {
    max-height: 550px;
    overflow: auto;
  }
</style>