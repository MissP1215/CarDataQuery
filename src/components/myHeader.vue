<template>
	<header>
		{{message}}
		<span class="arrow_left" @click="carClick"></span>
	</header>
</template>

<script>
export default {
	name: 'hello',
	props: {
		message: ''
	},
	data () {
		return {
		}
	},
	mounted() {
		console.log(this.message);
	},
	methods: {
		carClick() {
			this.$router.go(-1);
		}	
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
</style>
