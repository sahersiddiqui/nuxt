<template>
	<footer>
		<!--Footer Nav Option-->
		<el-row>
			<el-col :span="6">
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
			</el-col>
			<el-col :span="6">
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
			</el-col>
			<el-col :span="6">
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
			</el-col>
			<el-col :span="6">
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
			</el-col>
		</el-row>
		<!--Footer Nav Option Close-->
		<!--Brand Partner-->
		<el-row>
			<el-col :span="6">
				<figure class="footer-logo">
					<img src="/images/foot-logo.png" alt="gurushala" />
				</figure>
			</el-col>
			<el-col :span="6">
				<figure class="footer-logo">
					<img src="/images/pratham-logo.png" alt="pratham" />
				</figure>
			</el-col>
			<el-col :span="6">
				<figure class="footer-logo">
					<img src="/images/vodafone-logo.png" alt="vodafone" />
				</figure>
			</el-col>
			<el-col :span="6">
				<figure class="footer-logo">
					<img src="/images/indus-tower.png" alt="indus-tower" />
				</figure>
			</el-col>
		</el-row>

		<!--Brand Partner Close-->
		<!--Copy Right Footer-->
		<div class="copy-right-foot">
			<div class="custom_container">
				<el-row>
					<el-col :span="6">
						<p class="cpyt">
							© 2020 gurushala. All rights reserved.
						</p>
					</el-col>
					<el-col :span="18">
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
					</el-col>
				</el-row>
			</div>
		</div>
		<!--Copy Right Footer Close-->
	</footer>
</template>
<script>
export default {
	name: "footer-component"
};
</script>
