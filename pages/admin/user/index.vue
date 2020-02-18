<template>
	<el-main>
		<el-table :data="tableData">
			<el-table-column prop="_id" label="S.No." >
			</el-table-column>
			<el-table-column prop="name" label="Name" >
			</el-table-column>
			<el-table-column prop="email" label="Email" >
			</el-table-column>
			<el-table-column prop="mobile" label="Mobile"> </el-table-column>
		</el-table>
	</el-main>
</template>

<script>
import axios from "@/plugins/axios";
export default {
	layout: "admin/default",
	
	asyncData({param}) {
		return axios.get("user-list").then(res => {
			return {tableData : res.data.data}
		});
	},
	
};
</script>

<style></style>
