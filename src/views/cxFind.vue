<template>
	<div class="home">
		<header>
			<input type="text" placeholder="输入商家、商品名称">
			<span class="arrow_left" @click="carClick"></span>
		</header>
		<div class="content">
			<ul class="carUl">
				<li v-for="todo in todos">
					<p>{{todo.title}}</p>
					<a></a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		data() {	
			return {		
				tips: '请选择你要查找的车型',
				todos: [
					{
						title: '北京现代',
					},
					{
						title: '北京现代',
					},
					{
						title: '北京现代',
					}
				]
			}	
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
.content {	
		text-align: left;	
		.carUl {
				padding-left: 10px;			
			li {
				line-height: 43px;
				height: 43px;
				position: relative;			
				p {
					font-size: 14px;
					color: #999;
				}
				a {
					width: 24px;
					height: 24px;
				    position: absolute;
				    top: 10px;
				    right: 12px;
					background: url('../assets/imgs/right.png') no-repeat 0/100%;
				}
			}
		}
	}
</style>
