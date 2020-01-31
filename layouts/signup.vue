<template>
	<md-dialog
		:md-active.sync="showSignup"
		class="md-layout modal-dialog md-scrollbar"
	>
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
			<form novalidate @submit.prevent="validateForm">
				<md-field :class="{'md-invalid': $_.has(errors, 'name') }">
					<label>Name</label>
					<md-input
						v-model="form.name"
						name="name"
						id="name"
					></md-input>
					<span class="md-error" v-if="$_.has(errors, 'name')">
						{{ errors.name }}
					</span>
				</md-field >
				<md-field :class="{'md-invalid': $_.has(errors, 'email') }">
					<label>Email Address</label>
					<md-input v-model="form.email"></md-input>
					<span class="md-error" v-if="$_.has(errors, 'email')">
						{{ errors.email }}
					</span>
				</md-field>
				<md-field :class="{'md-invalid': $_.has(errors, 'mobile') }">
					<label>Mobile Number</label>
					<md-input v-model="form.mobile"></md-input>
					<span class="md-error" v-if="$_.has(errors, 'mobile')">
						{{ errors.mobile }}
					</span>
				</md-field>
				<div :class="{'md-invalid': $_.has(errors, 'gender') }">
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
					<span class="md-error" v-if="$_.has(errors, 'gender')">
						{{ errors.gender }}
					</span>
				</div>
				<div :class="{'md-layout':true, 'md-invalid': $_.has(errors, 'gender') } ">
					<md-checkbox
						class="md-layout-item md-size-30"
						v-model="form.agree"
						value="1"
					>
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
					<span class="md-error" v-if="$_.has(errors, 'agree')">
						{{ errors.agree }}
					</span>
				</div>
				<md-button type="submit" class="md-raised md-primary">
					Sign Up
				</md-button>
			</form>
		</div>
	</md-dialog>
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
	props: ["active-signup"],
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
			showSignup: false
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
	},
	methods: {
		validateForm() {
			this.$v.$touch();

			//function of mixin to render an error
			this.renderError();

			if (!this.$v.$invalid) {
				this.saveUser();
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
.terms {
	margin: 16px 16px 16px -16px;
}
</style>
