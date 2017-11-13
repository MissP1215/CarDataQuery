<template>
	<div class="home">
		<div class="content">
            <div class="choose"><p>已选择：{{car}}</p></div>
			<ListChoose v-if="carData" :carDatas="todos" :carData="carData"></ListChoose>
		</div>
	</div>
</template>
<script>
	import ListChoose from '@/components/listChoose'
	export default {
		name: 'HelloWorld',
		components: {
			ListChoose,
		},
		data() {	
			return {		
				msg: '车型选择'	,
				car: '宝马 宝马x3',
				carData: {},
				todos: [
					{name: '2.0T 手自一体 豪华版'},
					{name: '2.0T 手自一体 标准版'},
					{name: '2.0L 自动档 标准版'},
					{name: '2.0L 手动档 标准版'}
				]
			}	
		},
		created() {
			this.carData.carName = this.$route.query.name;
			this.carData.brandName = this.$route.query.carName;
			this.carData.id = 123;
		},
		mounted() {
			// console.log(this.$route.query);
			this.car = this.$route.query.carName + this.$route.query.name ;
			// console.log(this.car)
			// this.carData.carName = this.$route.query.name;
			// this.carData.brandName = this.$route.query.carName;
			// this.carData.id = 123;
		}	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
.home {
	.content {
		.choose {
			background: #efefef;
			padding-bottom: 4px;
			p {
				line-height: 44px;
				padding-left: 11px;
				font-size: 14px;
				background-color: #fff;
			}

		} 
	}
}
</style>
