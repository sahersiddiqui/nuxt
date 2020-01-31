<template>
	<div>
		<header-component />
		<carousel
			:per-page="1"
			:autoplay="true"
			:autoplayTimeout="2000"
			:loop="true"
			:paginationEnabled="false"
		>
			<slide>
				<img
					src="https://appinventiv-development.s3.amazonaws.com/gurushala/pages/0.83658610920712760.6115305480709687Slide3.JPG"
					alt="GuruShala"
				/>
			</slide>
			<slide>
				<img
					src="https://vodafoneapp.s3.ap-south-1.amazonaws.com/gurushala/pages/0.8020774866730245DRL.JPG"
					alt="GuruShala"
				/>
			</slide>
			<slide>
				<img
					src="https://appinventiv-development.s3.amazonaws.com/gurushala/pages/0.83658610920712760.6115305480709687Slide3.JPG"
					alt="GuruShala"
				/>
			</slide>
			<slide>
				<img
					src="https://vodafoneapp.s3.ap-south-1.amazonaws.com/gurushala/pages/0.8020774866730245DRL.JPG"
					alt="GuruShala"
				/>
			</slide>
			<slide>
				<img
					src="https://appinventiv-development.s3.amazonaws.com/gurushala/pages/0.83658610920712760.6115305480709687Slide3.JPG"
					alt="GuruShala"
				/>
			</slide>
			<slide>
				<img
					src="https://vodafoneapp.s3.ap-south-1.amazonaws.com/gurushala/pages/0.8020774866730245DRL.JPG"
					alt="GuruShala"
				/>
			</slide>
		</carousel>
		<section class=" offer_section">
			<nuxt />
		</section>
		<footer-component />
	</div>
</template>
<script>
import headerComponent from "./header";
import footerComponent from "./footer";
import { Carousel, Slide } from "vue-carousel";

export default {
	components: {
		headerComponent,
		footerComponent,
		Carousel,
		Slide
	}
};
</script>
