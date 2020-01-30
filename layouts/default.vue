<template>
	<div>
		<header-component/>
		<section class=" offer_section">
			<nuxt />
		</section>
		<footer-component/>
	</div>
</template>
<script>
import headerComponent from "./header";
import footerComponent from "./footer";

export default {
	components: {
		headerComponent,
		footerComponent
	},
	
};
</script>
