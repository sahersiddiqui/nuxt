<template>
	<el-main>
		<el-row>
			<el-col  :xl="12" :sm="24" :md="12" :xs="24" >
				<h3>Add User</h3>
				<el-form
					:model="form"
					:rules="rules"
					ref="form"
					label-width="120px"
					class="demo-form"
				>
					<el-form-item label="Name" prop="name">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="Email" prop="email">
						<el-input v-model="form.email"></el-input>
					</el-form-item>
					<el-form-item label="Mobile" prop="mobile">
						<el-input v-model="form.mobile"></el-input>
					</el-form-item>
					<el-form-item label="Gender" prop="gender">
						<el-radio-group v-model="form.gender">
							<el-radio label="Male"></el-radio>
							<el-radio label="Female"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item>
						<el-button @click="createUser('form')">
							Create
						</el-button>
						<el-button @click="resetForm('form')">Cancel</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
		<!-- <el-breadcrumb separator="/">
			<el-breadcrumb-item>User</el-breadcrumb-item>
			<el-breadcrumb-item>Add</el-breadcrumb-item>
		</el-breadcrumb> -->
	</el-main>
</template>

<script>
import axios from "@/plugins/axios";
export default {
	layout: "admin/default",
	data() {
		return {
			form: {
				name: null,
				email: null,
				gender: null,
				mobile: null
			}
		};
    },
    methods : {
        createUser(){
            return axios.post("user",this.form).then(res => {
                this.$message(res.data.message);
                this.$router.push("/admin/user")
            })
        }
    }
};
</script>

<style></style>
