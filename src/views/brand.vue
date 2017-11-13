<template>
		<div class="content">
            <div class="check">
                <input type="text" placeholder="请输入服务门店或卡名"  @click="carClick">
            </div>
			<ListBrand :datas="todos"></ListBrand>
		</div>
	</div>
</template>
<script>
	import ListBrand from '@/components/listBrand'
	export default {
		name: 'HelloWorld',
		components: {
			ListBrand,
		},
		data() {	
			return {		
				todos: [
					{
						title: 'A',
						bMsg: [
							{name: '奥丁'},
							{name: '阿斯顿马丁'},
							{name: '安凯客车'}
						]
					},
					{
						title: 'B',
						bMsg: [
							{name: '宝马'},
							{name: '奔驰'},
							{name: '奔利'},
							{name: '保时捷'},
							{name: '别克'},
							{name: '本田'},
							{name: '标致'}
						]
						
					},
					{
						title: 'C'
					}
				]
			}	
		},
		mounted() {

		},
		methods: {
			carClick() {
				this.$router.push({ path: 'cxFind' })
			}	
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
	.content {	
		text-align: left;
		background-color: #ddd;
		padding-top: 10px;	
        .check {
            overflow: hidden;
            border: 1px solid #ddd;
            border-radius: 50px;;
            width: 350px;
            line-height: 29px;
            margin: 0 12px 10px 12px;
			background: #fff;
            &::before {
                content: '';
                background: url('../assets/imgs/ss.png') no-repeat 0/100%;
                width: 20px;
                height: 20px;
                display: block;
                float: left;
				margin: 6px;
            }

        }
	}
</style>
