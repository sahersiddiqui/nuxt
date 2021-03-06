<template>
	<div>
		<form novalidate class="md-layout" @submit.prevent="validateUser">
			<md-card class="md-layout-item md-size-50 md-small-size-100">
				<md-card-header>
					<div class="md-title">Users</div>
				</md-card-header>
				<md-card-content>
					<div class="md-layout md-gutter">
						<div class="md-layout-item md-small-size-100">
							<md-field :class="{'md-invalid':$_.has(errors, 'firstName') }">
								<label for="first-name">First Name</label>
								<md-input
									name="first-name"
									id="first-name"
									autocomplete="given-name"
									v-model="form.firstName"
									:disabled="sending"
								/>
								<span
									class="md-error"
									v-if="$_.has(errors, 'firstName')"
								>
									{{ errors.firstName }}
								</span>
							</md-field>
						</div>

						<div class="md-layout-item md-small-size-100">
							<md-field :class="getValidationClass('lastName')">
								<label for="last-name">Last Name</label>
								<md-input
									name="last-name"
									id="last-name"
									autocomplete="family-name"
									v-model="form.lastName"
									:disabled="sending"
								/>
								<span
									class="md-error"
									v-if="$_.has(errors, 'lastName')"
								>
									{{ errors.lastName }}
								</span>
							</md-field>
						</div>
					</div>

					<div class="md-layout md-gutter">
						<div class="md-layout-item md-small-size-100">
							<md-field :class="getValidationClass('gender')">
								<label for="gender">Gender</label>
								<md-select
									name="gender"
									id="gender"
									v-model="form.gender"
									md-dense
									:disabled="sending"
								>
									<md-option></md-option>
									<md-option value="M">M</md-option>
									<md-option value="F">F</md-option>
								</md-select>
								<span
									class="md-error"
									v-if="$_.has(errors, 'gender')"
								>
									{{ errors.gender }}
								</span>
							</md-field>
						</div>

						<div class="md-layout-item md-small-size-100">
							<md-field :class="getValidationClass('age')">
								<label for="age">Age</label>
								<md-input
									type="number"
									id="age"
									name="age"
									autocomplete="age"
									v-model="form.age"
									:disabled="sending"
								/>
								<span
									class="md-error"
									v-if="$_.has(errors, 'age')"
								>
									{{ errors.age }}
								</span>
							</md-field>
						</div>
					</div>

					<md-field :class="getValidationClass('email')">
						<label for="email">Email</label>
						<md-input
							type="email"
							name="email"
							id="email"
							autocomplete="email"
							v-model="form.email"
							:disabled="sending"
						/>
						<span class="md-error" v-if="$_.has(errors, 'email')">
							{{ errors.email }}
						</span>
					</md-field>

					<md-field>
						<label>Type your query here</label>
						<md-textarea
							v-model="form.query"
							md-autogrow
						></md-textarea>
					</md-field>
				</md-card-content>

				<md-progress-bar md-mode="indeterminate" v-if="sending" />

				<md-card-actions>
					<md-button
						type="submit"
						class="md-primary"
						:disabled="sending"
						>Submit</md-button
					>
				</md-card-actions>
			</md-card>

			<md-snackbar :md-active.sync="userSaved"
				>The user {{ lastUser }} was saved with success!</md-snackbar
			>
		</form>
	</div>
</template>

<script>
// import { validationMixin } from "vuelidate";
import { validationErrorMixin } from "@/mixins/validatorMixin";

// import {
// 	required,
// 	email,
// 	minLength,
// 	maxLength
// } from "vuelidate/lib/validators";

import axios from "axios";
import store from "vuex";

export default {
	name: "FormValidation",
	mixins: [ validationErrorMixin],
	data: () => ({
		form: {
			firstName: null,
			lastName: null,
			gender: null,
			age: null,
			email: null,
			query: null
		},
		userSaved: false,
		sending: false,
		lastUser: null
	}),
	// validations: {
	// 	form: {
	// 		firstName: {
	// 			required,
	// 			minLength: minLength(3)
	// 		},
	// 		lastName: {
	// 			required,
	// 			minLength: minLength(3)
	// 		},
	// 		age: {
	// 			required,
	// 			maxLength: maxLength(3)
	// 		},
	// 		gender: {
	// 			required
	// 		},
	// 		email: {
	// 			required,
	// 			email
	// 		}
	// 	},
	// 	errors: {}
	// },

	methods: {
		getValidationClass(fieldName) {
			const field = this.$v.form[fieldName];

			if (field) {
				return {
					"md-invalid": field.$invalid && field.$dirty
				};
			}
		},
		clearForm() {
			this.$v.$reset();
			this.form.firstName = null;
			this.form.lastName = null;
			this.form.age = null;
			this.form.gender = null;
			this.form.email = null;
		},
		saveUser() {
			this.sending = true;
			this.form.name = this.form.firstName + this.form.lastName;
			return axios
				.post("http://localhost:3000/api/user", this.form)
				.then(res => {
					// store.commit('setStars', res.data)
					this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
					this.userSaved = true;
					this.sending = false;
					this.clearForm();
				});
		},
		validateUser() {
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
.md-progress-bar {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
}
</style>
