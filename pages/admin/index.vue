<template>
	<el-main>
					<el-table :data="tableData">
						<el-table-column prop="date" label="Date" width="140">
						</el-table-column>
						<el-table-column prop="name" label="Name" width="120">
						</el-table-column>
						<el-table-column prop="address" label="Address">
						</el-table-column>
					</el-table>
				</el-main>
</template>

<script>
export default {
    layout : "admin/default",
	components: {},
	data() {
		return {
			title: "Home"
		};
	},
	head() {
		return {
			title: this.title,
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					title: "new",
					hid: "description",
					name: "description",
					content: "My custom description"
				}
			]
		};
	},
	fetch({ store, context }) {
		store.commit("test", "sad");
	}
};
</script>
<style  scoped>
img{
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>