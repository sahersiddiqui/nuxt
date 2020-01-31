<template>
	<div class="top-button">
		<span>{{ title }}</span>
		<font-awesome-icon class="top-button-icon" icon="angle-down" />
	</div>
</template>
<script>
export default {
	props: ["title"],
	name: "top-button"
};
</script>
