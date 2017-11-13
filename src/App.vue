<template>
	<div id="app">
		<myHeader :message="ms" v-if="$route.path !='/cxFind'"></myHeader>
		<router-view/>
	</div>

	<!-- <div class="list" v-for="(item, key) in items" @click="clicks(key)">
		<div class="title">{{item.name}}</div>
		<ul>
			<li v-for="list in item">{{list.title}} {{list.value}}</li>
		</ul>
	</div> -->
	
</template>

<script>
import myHeader from '@/components/myHeader'
export default {
	name: 'app',
	components: {
		myHeader,
	},
	data() {
		return {
			ms: ''
		}
	},
	watch: {
		$route:'changeTitle'
	},
	mounted() {
		console.log(this.$route.path);
		this.ms = this.$route.name;
	},
	methods: {
		changeTitle() {
			this.ms = this.$route.name;
		}
	}	

	// [
	// 	{
	// 		name: 123,
	// 		data: [
	// 			{
	// 				title: "车型名称"
	// 				value: "雅阁",
	// 			},
	// 			{
	// 				title: "车型名称"
	// 				value: "雅阁",
	// 			}
	// 		]
	// 	},
	// 	{
	// 		name: 456,
	// 		data: [
	// 			{
	// 				title: "车型名称"
	// 				value: "雅阁",
	// 			}
	// 		]
	// 	}
	// ]
}
</script>

<style scoped lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	background-color: #fff;
}

</style>
