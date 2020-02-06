<template>
	<div>
		<el-dialog
			title="Sign Up"
			:visible.sync="showSignup"
			class=""
			width="500px"
			v-on:closed="updateModal"
		>
			<div class="account_form">
				<div class="account_with">
					<ul>
						<li>
							<a
								href="https://gurushalaqa.appinventive.com/social-login/facebook"
							>
								<font-awesome-icon
									:icon="['fab', 'facebook-square']"
								/>
								<!-- 
								<span class="fas fa-facebook-square">
									<img
										src="https://gurushalaqa.appinventive.com/front/images/fb-sm.svg"
									/>
								</span> -->
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

									<!-- <img
										src="https://gurushalaqa.appinventive.com/front/images/google-sm.svg"
									/> -->
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
				<el-form
					:model="form"
					:ref="formName"
					:rules="rules"
					class="demo-ruleForm"
				>
					<el-form-item prop="name" label="Name">
						<el-input
							v-model="form.name"
							name="name"
							id="name"
						></el-input>
					</el-form-item>
					<el-form-item prop="email" label="Email">
						<el-input v-model="form.email"></el-input>
					</el-form-item>
					<el-form-item prop="mobile" label="Mobile Number">
						<el-input v-model="form.mobile"></el-input>
					</el-form-item>
					<div class="">
						<el-form-item prop="gender" label="Gender">
							<el-radio-group v-model="form.gender">
								<el-radio label="male">
									Male
								</el-radio>
								<el-radio label="femail">
									Female
								</el-radio>
								<el-radio label="other">
									Other
								</el-radio>
							</el-radio-group>
						</el-form-item>
					</div>
					<div>
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

					<el-button
						type="submit"
						class="md-raised md-primary"
						@click="validateForm"
					>
						Sign Up
					</el-button>
				</el-form>
			</div>
		</el-dialog>
	</div>
</template>
<script>
// import { validationMixin } from "vuelidate";
// import { validationErrorMixin } from "@/mixins/validatorMixin";

// import {
// 	required,
// 	email,
// 	minLength,
// 	maxLength
// } from "vuelidate/lib/validators";

export default {
	name: "signup",
	components: {},
	props: {
		active: Object
	},
	data() {
		return {
			formName: "signup-form",
			form: {
				email: null,
				name: null,
				mobile: null,
				gender: null,
				agree: null
			},
			rules: {
				name: [
					{
						required: true,
						message: "Please input name",
						trigger: "blur"
					},
					{
						min: 3,
						max: 5,
						message: "Length should be 3 to 5",
						trigger: "blur"
					}
				],
				email: [
					{
						required: true,
						message: "Please input email",
						trigger: "change"
					},
					{
						type: "email",
						message: "Please enter valid email",
						trigger: "change"
					}
				],
				mobile: [
					{
						required: true,
						message: "Please input mobile number",
						trigger: "change"
					},
					{
						type: "integer",
						message: "Please enter valid mobile number",
						trigger: "change"
					},
					{
						min: 8,
						max: 10,
						message: "Length should be 8 to 10",
						trigger: "blur"
					}
				],
				gender: [
					{
						required: true,
						message: "Please select gender",
						trigger: "change"
					}
				]
			},
			showSignup: false,
			errors: {}
		};
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
	},
	methods: {
		validateForm() {
			this.$refs[this.formName].validate(valid => {
				if (valid) {
					alert("submit!");
				} else {
					console.log("error submit!!");
					return false;
				}
			});
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
