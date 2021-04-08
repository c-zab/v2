<template functional>
<footer id='my-footer' class="footer-content">
	<div class="container">
		<div class="row">
			<div class="col-md-12 py-4">
				<div class="my-2 d-flex justify-content-center">
					<!-- Github -->
					<a class="mx-4" href="https://github.com/c-zab">
            <font-awesome-icon
              :icon="['fab', 'github']"
              size='2x'
              class="text-white"
            />
					</a>
					<!-- Twitter -->
					<a class="mx-4" href="https://twitter.com/czabaletDev">
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              size='2x'
              class="text-white"
            />
					</a>
					<!--Instagram-->
					<a class="mx-4" href="https://www.instagram.com/czabalet.dev">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              size='2x'
              class="text-white"
            />
					</a>
					<!--Linkedin -->
					<a class="mx-4" href="https://www.linkedin.com/in/czabalet/">
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              size='2x'
              class="text-white"
            />
					</a>
        </div>
			</div>
		</div>
	</div>
	<div class="text-muted footer-text bg-color text-center py-3">
		<p class="grey-text mb-0">© czabalet 2019. All rights reserved. Yes, all of them.</p>
		<p class="grey-text mb-0">
			Designed with
			<span class="text-danger">&#10084;</span> by
			<strong>Carlos Zabaleta</strong>.
		</p>
	</div>
</footer>
</template>

<script>
export default {
  name: 'my-footer',
};
</script>
