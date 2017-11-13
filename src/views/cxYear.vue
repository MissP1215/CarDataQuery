<template>
	<div class="home">
		<div class="content">
            <div class="choose"><p>已选择：{{car}}</p></div>
			<ListCx :carDatas="todos" :carName="car"></ListCx>
		</div>
	</div>
</template>
<script>
	import ListCx from '@/components/listCx'
	export default {
		name: 'HelloWorld',
		components: {
			ListCx,
		},
		data() {	
			return {		
				msg: '选择年份',
				car: '宝马',
				todos: [
					{name: '3系'},
					{name: '2系'},
					{name: '4系'},
					{name: 'X6'},
					{name: '7系'},
					{name: 'X3'},
					{name: 'X5'},
					{name: '1系'},
					{name: '6系'},
					{name: 'Z8'},
					{name: 'Z4'}
				]
			}	
		},
		mounted() {
			console.log(this.$route.query.name);
			this.car = this.$route.query.name;
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
