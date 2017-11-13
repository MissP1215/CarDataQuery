<template>
	<div class="home">
		<div class="content">
			<div class="cxName cxPorts">丰田凯美瑞 2015款 2.0T 标准版
				<span class="arrow_right"></span>
			</div>
			<div class="cxPorts">
				<select>
					<option value="行驶公里数">行驶公里数</option>
					<option value="OE码">OE码</option>
					<option value="零件名">零件名</option>
				</select>
				<input type="text" placeholder="请输入行驶公里数">
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
	.cxName {
		position: relative;
		overflow: hidden;
		.arrow_right {
			width: 8px;
			height: 8px;
			position: absolute;
			top: 18px;
			right: 18px;
		}
	}
	.cxPorts {
		select {
			font-size: 14px;
		}
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
