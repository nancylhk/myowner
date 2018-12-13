<template>
	<section class="app-main">
		<transition name="fade-transform" mode="out-in">
			<router-view :key="key"></router-view>
		</transition>
	</section>
</template>

<script>
	export default {
		name: 'AppMain',
		computed: {
			key() {
				return this.$route.fullPath
			}
		}
	}
</script>
<style>
	.app-main {
		/* width: 1000px;
    margin: 0 auto; */
	}
</style>
