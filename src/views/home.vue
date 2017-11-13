<template>
	<div class="home">
		<div class="content">
			<ul>
				<!--<li @click="ko">
					<p>配件查询</p>
					<p class="li_content">查询配件详细信息</p>
				</li> -->
				<router-link to="/brand" tag="li" v-for="todo in todos">
					<p>{{todo.name}}</p>
					<p class="li_content">{{todo.text}}</p>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		data() {	
			return {		
				todos: [
					{
						name: '车型查询',
						text: '获取车辆信息'
					},
					{
						name: '车型查询',
						text: '获取车辆信息'
					},
					{
						name: '车型查询',
						text: '获取车辆信息'
					},
					{
						name: '车型查询',
						text: '获取车辆信息'
					}
					
				]
			}	
		},
		mounted() {
			// this.ko();
			this.ll();
			this.sl();
		},
		methods: {
			ko() {
				console.log(222)
				// this.$router.push({ path: 'cx' })
			},
			ll() {
				console.log(4323);
			},
			sl() {
				console.log(55555);
			},
		}	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
	.home {
		.content {
			ul {
				overflow: hidden;
				li {
					overflow: hidden;
					border-bottom: 1px solid #ddd;	
					padding: 5px 0;
					&::before {
						content: '';
						background: url('../assets/imgs/che.png') no-repeat 0/100%;
						width: 40px;
						height: 40px;
						display: block;
						float: left;
						margin-left: 20px;
						margin-right: 13px;
					}
					&:nth-child(2) {
						&::before {
							background-image: url(../assets/imgs/che.png);
						}
					}
					&:nth-child(3) {
						&::before {
							background-image: url('../assets/imgs/che.png');
						}
					}
					p {
						font-size: 14px;
						&.li_content {
							font-size: 12px;
							color: #999;
						}
					}
				}
			}
		}
	}
</style>
