<template>
	<div class="home">
		<div class="content">
            <p class="tips">{{tips}}</p>
			<ul class="carUl">
				<li v-for="todo in todos">
					<p>{{todo.title}}</p>
					<p class="li_cont">{{todo.text}}</p>
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
				msg: '车型选择'	,
				tips: '请选择你要查找的车型',
				todos: [
					{
						title: '车型名称',
						text: '2015款2.0T手一体  豪华版'
					},
					{
						title: '雅阁HG7203AB轿车',
						text: '2015款2.0T手一体  豪华版'
					},
					{
						title: '车型名称',
						text: '{年款} {排量} {变速箱类型} {配置}'
					},
					{
						title: '奔驰s300',
						text: '{年款} {排量} {变速箱类型} {配置}'
					}
				]
			}	
		}	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
.home {
	.content {	
		text-align: left;	
		ul {
			li {
				padding: 7px 0 7px 11px;
				
				p {
					font-size: 14px;
					&.li_cont {
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
}
</style>
