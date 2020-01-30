<template>
    <footer>
			<!--Footer Nav Option-->
			<div class="md-layout">
				<div class="md-layout-item">
					<span class="footer_title">About Us</span>
					<div class="footer-list">
						<ul>
							<li>
								<nuxt-link to="/page/story">
									Our Journey
								</nuxt-link>
							</li>

							<li>
								<nuxt-link to="/contact">
									Contact Us
								</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="md-layout-item">
					<span class="footer_title">Gallery</span>
					<div class="footer-list">
						<ul>
							<li>
								<a
									href="https://gurushala.photo.blog/"
									target="_blank"
								>
									Photos
								</a>
							</li>
							<li>
								<a
									href="https://www.youtube.com./channel/UCY3vP3nIEhMff0IqxWy46Gw"
									target="_blank"
								>
									Videos
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="md-layout-item">
					<span class="footer_title">Get Involved</span>
					<div class="footer-list">
						<ul>
							<li>
								<nuxt-link to="/page/volunteer">
									Volunteer
								</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/page/join-us">
									Careers
								</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="md-layout-item">
					<span class="footer_title">Partners</span>
					<div class="footer-list">
						<ul>
							<li>
								<nuxt-link to="/partner/school-institue">
									School Institutions
								</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/partner/content-collaborator"
									>Content Collaborator</nuxt-link
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!--Footer Nav Option Close-->
			<!--Brand Partner-->
			<div class="brand_wrapper md-layout">
				<div class="md-layout-item">
					<figure class="footer-logo">
						<img src="/images/foot-logo.png" alt="gurushala" />
					</figure>
				</div>
				<div class="md-layout-item">
					<figure class="footer-logo">
						<img src="/images/pratham-logo.png" alt="pratham" />
					</figure>
				</div>
				<div class="md-layout-item">
					<figure class="footer-logo">
						<img src="/images/vodafone-logo.png" alt="vodafone" />
					</figure>
				</div>
				<div class="md-layout-item">
					<figure class="footer-logo">
						<img src="/images/indus-tower.png" alt="indus-tower" />
					</figure>
				</div>
			</div>
			<!--Brand Partner Close-->
			<!--Copy Right Footer-->
			<div class="copy-right-foot">
				<div class="custom_container">
					<div class=" md-layout vertical_mid">
						<div class="md-layout-item">
							<p class="cpyt">
								© 2020 gurushala. All rights reserved.
							</p>
						</div>
						<div class="md-layout-item">
							<div class="tnc_nav">
								<nuxt-link to="/page/terms-and-condition">
									Terms and Conditions
								</nuxt-link>
								<nuxt-link to="/page/privacy-policy">
									Privacy Policy
								</nuxt-link>
								<nuxt-link to="/page/faq">
									FAQ
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--Copy Right Footer Close-->
		</footer>
</template>
<script>
export default {
    name : "footer-component"
}
</script>