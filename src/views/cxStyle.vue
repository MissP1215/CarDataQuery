<template>
	<div class="home">
		<div class="content">
            <div class="choose"><p>已选择：{{car}}</p></div>
			<ul class="cYear">
				<li v-for="item in times" @click="carClick(item.year)" :class="{ 'liChoose': item.isClass}">{{item.year}}</li>
			</ul>
            <ul class="cStyle">
				<router-link tag="li" v-for="item in style" :to="{ path: 'cxChoose', query: { name: $route.query.name, carName: $route.query.carName}}"> {{item.text}}</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		data() {	
			return {		
				car: '',
				times: [],
				style: [],
				todos: [
					{
						time: '2016',
						style: [
							{text: '2.0T手自一体  豪华版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手动挡  ,标准版'}
						],
					},
					{
						time: '2015',
						style: [
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T自动挡  标准版'},
							{text: '2.0T手动挡  ,标准版'}
						],
					},
					{
						time: '2014',
						style: [
							{text: '2.0T手自一体  豪华版'},
						],
					},
					{
						time: '2013',
						style: [
							{text: '2.0T手自一体  豪华版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T自动挡  标准版'},
							{text: '2.0T手动挡  ,标准版'}
						],
					},
					{
						time: '2012',
						style: [
							{text: '2.0T手自一体  豪华版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T自动挡  豪华版'},
							{text: '2.0T手动挡  ,标准版'}
						],
					},
					{
						time: '2011',
						style: [
							{text: '2.0T手自一体  豪华版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T自动挡  豪华版'},
							{text: '2.0T手动挡  ,标准版'}
						],
					},
					{
						time: '2010',
						style: [
							{text: '2.0T手自一体  豪华版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T自动挡  标准版'},
							{text: '2.0T手动挡  ,标准版'}
						],
					},
					{
						time: '2009',
						style: [
							{text: '2.0T手自一体  豪华版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T自动挡  标准版'},
							{text: '2.0T手动挡  ,标准版'}
						],
					},
					{
						time: '2008',
						style: [
							{text: '2.0T手自一体  豪华版'},
						],
					},
					{
						time: '2007',
						style: [
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T自动挡  标准版'},
							{text: '2.0T手动挡  ,标准版'}
						],
					},
					{
						time: '2006',
						style: [
							{text: '2.0T手自一体  豪华版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T手自一体  标准版'},
							{text: '2.0T自动挡  标准版'},
							{text: '2.0T手动挡  ,标准版'}
						],
					}
				]
			}	
		},
		mounted() {
			this.getYear();
			this.getStyle(this.times[0].year);
			console.log(this.$route.query)
			this.car = this.$route.query.carName + this.$route.query.name ;
		},
		methods: {
			getYear() {
				for (var i = 0; i<this.todos.length; i++) {
					var obj = {};
					obj.year = this.todos[i].time;
					obj.isClass = false;
					this.times.push(obj);
			
					console.log(this.todos[i].time)	
				}
				console.log(this.times)
			},
			getStyle(year) {
				for (var i = 0; i<this.todos.length; i++) {
					if(this.todos[i].time == year) {
						this.style = this.todos[i].style;
						this.times[i].isClass = true;
					} else {
						this.times[i].isClass = false;
					}
					
				}
			},
			carClick(year) {
				console.log(year)
				this.getStyle(year);


			}
			
			
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
		.cYear {
			border-top: 1px solid #ddd;
			border-right: 1px solid #ddd;
            width: 90px;
            float: left;
			li {
				border-bottom: 1px solid #ddd;
				line-height: 44px;
			    padding-left: 11px;                
			}
		}
        .cStyle {
			border-top: 1px solid #ddd;
            width: 284px;
            float: left;
            border-box: border-box;
			li {
				border-bottom: 1px solid #ddd;
				line-height: 44px;
			    margin-left: 11px;                                
			}
		}
	}
}
</style>
