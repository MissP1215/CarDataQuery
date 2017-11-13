<template>
	<div class="home">
		<div class="content">
			<div class="cxName cxPorts">本田 雅阁2013款 2.0T 豪华版
				<span class="arrow_right"></span>
			</div>
			<div class="cxPorts">
				<select>
					<option value="OE码">OE码</option>
					<option value="零件名">零件名</option>
				</select>
				<input type="text" placeholder="请输入OE码">
			</div>
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
	
}
</style>
