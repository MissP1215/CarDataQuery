<template>
	<div class="home">
		<div class="content">
            <ul class="carUl">
                <li v-for="todo in todos">  
                    <p class="liMsg">{{todo.name}}</p>   
                    <div class="carMsg">
                        <p v-for="list in todo.data">
                            <span class="title">{{list.cName}}</span>
                            <span>{{list.value}}</span>
                        </p>

                    </div>
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
                        name: '基本信息',
                        data: [
                            {
                                cName: '保养计算方式:',
                                value: 'xxxx'
                            },
                            {
                                cName: '当前里程数:',
                                value: 'xxxx'
                            },
                            {
                                cName: '下次保养里程数:',
                                value: 'xxxx'
                            },
                            {
                                cName: '备注:',
                                value: '首保：6000公里/6个月 二保：12000公里/12个月 间隔：6000公里/6个月'
                            }
                        ]
                    },
                    {
                        name: '保养项目',
                        data: [
                             {
                                cName: '长宽高:',
                                value: '3500*1500*1800'
                            },
                            {
                                cName: '综合油耗:',
                                value: 'xxxx'
                            },
                            {
                                cName: '轴距:',
                                value: 'xxxx'
                            },
                            {
                                cName: '最小离地距离:',
                                value: 'xxxx'
                            },
                            {
                                cName: '车门数:',
                                value: 'xxxx'
                            },
                            {
                                cName: '座位数:',
                                value: 'xxxx'
                            },
                            {
                                cName: '行李箱容积:',
                                value: 'xxxx'
                            },
                        ]
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
        .carUl {
            li { 
                position: relative;
                border: none;
                .liMsg {
                    line-height: 44px;
                    padding-left: 11px;
                }
                .carMsg {
                    background-color: #efefef;
                    padding: 10px 0 12px 11px;
                    border-top: 1px solid #ddd;
                    border-bottom: 1px solid #ddd;
                    p {
                        span{
                            font-size: 12px;
                            &.title {
                                width: 90px;
                                display: inline-block;
                            }
                        }
                    }
                }
            }
        }
	}
}
</style>
