var validationErrorMixin = {
	data() {
		return  {
            formErrors :{}
        }
	},
	watch: {
		form: {
			handler() {
				this.renderError();
			},
			deep: true
		}
	},
	methods: {
		renderError() {
			Object.keys(this.$v.form.$params).forEach((element, key) => {
				if (this.$_.has(this.$v.form[element],'required') && !this.$v.form[element].required) {
					this.formErrors[element] = `The ${_.lowerCase(element)} is required`;
				} else if (this.$_.has(this.$v.form[element],'minLength') && !this.$v.form[element].minLength) {
					this.formErrors[element] = `The ${_.lowerCase(element)} should contain min ${this.$v.form[element].$params.minLength.min} letters`;
				} else if (this.$_.has(this.$v.form[element],'email') && !this.$v.form[element].email) {
					this.formErrors[element] = `The ${_.lowerCase(element)} should be valid`;
				} else if (this.$_.has(this.$v.form[element],'alpha') && !this.$v.form[element].alpha) {
					this.formErrors[element] = `The ${_.lowerCase(element)} should be contains only alphabets`;
				} else if (this.$_.has(this.$v.form[element],'alphaNum') && !this.$v.form[element].alphaNum) {
					this.formErrors[element] = `The ${_.lowerCase(element)} should be contains only alpha-numric`;
				} else if (this.$_.has(this.$v.form[element],'maxLength') && !this.$v.form[element].maxLength) {
                    this.formErrors[element] = `The ${_.lowerCase(element)} should not more than ${this.$v.form[element].$params.maxLength.max} letters`;
				}
				else {
					this.formErrors = {}
				}

			});
			this.errors = this.formErrors;
		}
	}
};


export {validationErrorMixin};