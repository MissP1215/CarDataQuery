<template>
	<div class="home">
		<div class="content">
			<div class="cxPorts">请先填写验证信息再查询！</div>
			<div class="yzCode">
				<input type="text" placeholder="输入右边验证码">
			</div>
			<button type="button">查询</button>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		data() {	
			return {		

			}	
		}	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
.content {
	.cxPorts {
		border: none;
	}
    .yzCode {
        border-bottom: 1px solid #ddd;
        line-height: 45px;
        margin-left: 13px;
    }
	button {
		width: 345px;
		line-height: 45px;
		border-radius: 5px;
		margin: 21px 14px;
		background-color: #e60014;
		color: #fff;
	}
	
}
</style>
