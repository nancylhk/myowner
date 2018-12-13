<template>
	<div>
		<Head-top></Head-top>
		<Main-container></Main-container>
		<Footer></Footer>
	</div>
</template>
<script>
	import HeadTop from './Header'
	import MainContainer from './Main'
	import Footer from './Footer'
	import { move } from '../../utils/move.js'
	// move
	export default {
		components: {
			HeadTop,
			MainContainer,
			Footer
		},
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>
<style>

</style>
