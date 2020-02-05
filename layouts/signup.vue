<template>
	<div>
		<el-dialog
			title="Sign Up"
			:visible.sync="showSignup"
			class=""
			width="500px"
			v-on:closed="updateModal"
		>
			<!-- <el-dialog-title class="text-center">Sign Up</el-dialog-title> -->
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
					<div class=" text-center">
						<span class="reg">
							Already Registered ?
							<span
								class="signup signup_form_open"
								@click="loginFormHandle"
							>
								Log In
							</span>
						</span>
					</div>
				</div>
				<span class="or">OR</span>
				<el-form :model="form" @submit.prevent="validateForm">
					<el-form-item
						:class="{ 'md-invalid': $_.has(errors, 'name') }"
					>
						<label>Name</label>
						<el-input
							v-model="form.name"
							name="name"
							id="name"
						></el-input>
						<span class="md-error" v-if="$_.has(errors, 'name')">
							{{ errors.name }}
						</span>
					</el-form-item>
					<el-form-item
						:class="{ 'md-invalid': $_.has(errors, 'email') }"
					>
						<label>Email Address</label>
						<el-input v-model="form.email"></el-input>
						<span class="md-error" v-if="$_.has(errors, 'email')">
							{{ errors.email }}
						</span>
					</el-form-item>
					<el-form-item
						:class="{ 'md-invalid': $_.has(errors, 'mobile') }"
					>
						<label>Mobile Number</label>
						<el-input v-model="form.mobile"></el-input>
						<span class="md-error" v-if="$_.has(errors, 'mobile')">
							{{ errors.mobile }}
						</span>
					</el-form-item>
					<div class="">
						<label class="">Gender</label>
						<el-radio
							:class="{ 'md-primary': true }"
							v-model="form.gender"
							value="male"
						>
							Male
						</el-radio>
						<el-radio
							class="md-primary"
							v-model="form.gender"
							value="femail"
							>Female</el-radio
						>
						<el-radio
							class="md-primary"
							v-model="form.gender"
							value="other"
							>Other</el-radio
						>
						<div
							:class="{ 'md-invalid': $_.has(errors, 'gender') }"
						>
							<span
								class="md-error"
								v-if="$_.has(errors, 'gender')"
							>
								{{ errors.gender }}
							</span>
						</div>
					</div>
					<div
						:class="{
							'md-invalid': $_.has(errors, 'gender')
						}"
					>
						<el-checkbox
							class=" md-size-30"
							v-model="form.agree"
							value="1"
						>
							I agree to the
						</el-checkbox>
						<span class=" terms">
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
					<span
						class="md-error md-layout"
						v-if="$_.has(errors, 'agree')"
					>
						{{ errors.agree }}
					</span>
					<el-button type="submit" class="md-raised md-primary">
						Sign Up
					</el-button>
				</el-form>
			</div>
		</el-dialog>
	</div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { validationErrorMixin } from "@/mixins/validatorMixin";

import {
	required,
	email,
	minLength,
	maxLength
} from "vuelidate/lib/validators";

export default {
	name: "signup",
	components: {},
	props: {
		active: Object
	},
	mixins: [validationMixin, validationErrorMixin],
	data() {
		return {
			form: {
				email: null,
				name: null,
				mobile: null,
				gender: null,
				agree: null
			},
			showSignup: false,
			errors: {}
		};
	},
	validations: {
		form: {
			name: {
				required,
				minLength: minLength(3)
			},
			email: {
				required,
				email
			},
			mobile: {
				required,
				maxLength: maxLength(10)
			},
			gender: {
				required
			},
			agree: {
				required
			}
		}
	},
	watch: {
		active: {
			handler(val) {
				if (val.activeSignup) {
					this.showSignup = val.activeSignup;
				}
			},
			deep: true
		}
		// showSignup(val) {
		// 	if (!val) {
		// 		this.$emit("update:active", {activeLogin:false,activeSignup:false});
		// 	}
		// }
	},
	methods: {
		validateForm() {
			this.$v.$touch();

			//function of mixin to render an error
			this.renderError();

			if (!this.$v.$invalid) {
				this.saveUser();
			}
		},
		loginFormHandle() {
			this.showSignup = false;
			this.$emit("update:active", {
				activeLogin: true,
				activeSignup: false
			});
		},
		updateModal() {
			this.$emit("update:active", {
				activeLogin: false,
				activeSignup: false
			});
		}
	}
};
</script>
<style lang="scss" scoped></style>
