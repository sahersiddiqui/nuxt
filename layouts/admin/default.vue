<template>
	<div>
		<el-container style="height: 500px; border: 1px solid #eee">
			<el-aside
				width="200px"
				style="background-color: rgb(238, 241, 246)"
			>
				<el-menu :default-openeds="[]" :router="true" >
					<el-menu-item index="/admin">
						<template slot="title">
							<img src="/favicon.ico" />
							Gurushala
						</template>
					</el-menu-item>
					<el-menu-item index="/admin/dashboard">
						<template slot="title">
							<i class="el-icon-menu"></i>
							Dashboard
						</template>
					</el-menu-item>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-user"></i>
							User
						</template>
						<el-menu-item index="/admin/user">List</el-menu-item>
						<el-menu-item index="/admin/user/add">Add</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-message"></i>
							Sub Admin
						</template>
						<el-menu-item index="2-1">List</el-menu-item>
						<el-menu-item index="2-2">Add</el-menu-item>
					</el-submenu>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-message"></i>
							Partner
						</template>
						<el-menu-item index="1-1">List</el-menu-item>
						<el-menu-item index="1-2">Add</el-menu-item>
					</el-submenu>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-message"></i>
							Courses
						</template>
						<el-menu-item index="1-1">List</el-menu-item>
						<el-menu-item index="1-2">Add</el-menu-item>
					</el-submenu>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-message"></i>
							Modules
						</template>
						<el-menu-item index="1-1">List</el-menu-item>
						<el-menu-item index="1-2">Add</el-menu-item>
					</el-submenu>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-message"></i>
							Edtech
						</template>
						<el-menu-item index="1-1">List</el-menu-item>
						<el-menu-item index="1-2">Add</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>

			<el-container>
				<el-header style="text-align: right; font-size: 12px">
					<el-dropdown>
						<i
							class="el-icon-setting"
							style="margin-right: 15px"
						></i>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>View</el-dropdown-item>
							<el-dropdown-item>Add</el-dropdown-item>
							<el-dropdown-item>Delete</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<span>Admin</span>
				</el-header>
				<nuxt />
				<el-footer>
					@ copyright
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>
<script>
export default {
	data() {
		const item = {
			date: "2016-05-02",
			name: "Tom",
			address: "No. 189, Grove St, Los Angeles"
		};
		return {
			tableData: Array(20).fill(item)
		};
	}
};
</script>
<style scoped>
.el-header {
	background-color: #b3c0d1;
	color: #333;
	line-height: 60px;
}

.el-aside {
	color: #333;
}
</style>
