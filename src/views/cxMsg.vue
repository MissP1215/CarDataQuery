<template>
	<div class="home">
		<div class="content">
            <p class="tips">{{car}}</p>
            <ul class="carUl">
                <li v-for="todo in todos">  
                    <p @click="liClick(todo.name)" :class="[ 'liMsg', 'liTop', {'liBottom': todo.isClass}]">{{todo.name}}</p>     
                    <div class="carMsg" :class="{'carShow': todo.isClass}">
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
                car: '请选择你要查找的车型',
                todos: [
                    {
                        name: '基本参数',
                        data: [
                            {
                                cName: '车型名称:',
                                value: '奔驰S300轿车'
                            },
                            {
                                cName: '品牌:',
                                value: '奔驰'
                            },
                            {
                                cName: '车系:',
                                value: '奔驰CRZ'
                            },
                            {
                                cName: '发动机型号:',
                                value: 'xxxxx'
                            },
                            {
                                cName: '排量:',
                                value: '1.598'
                            },
                            {
                                cName: '气门数:',
                                value: '4'
                            },
                            {
                                cName: '变速箱类型:',
                                value: '手自一体'
                            },
                            {
                                cName: '驱动形式:',
                                value: '前置前驱'
                            },
                            {
                                cName: '车体结构:',
                                value: '硬顶跑车'
                            },
                            {
                                cName: '燃料形式:',
                                value: '直喷'
                            }
                        ]
                    },
                    {
                        name: '车身信息',
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
                            }
                        ]
                    },
                    {
                        name: '变速箱',
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
                            }
                        ]
                    }
                ]
			}	
		},
        created() {
            this.listOpen(this.todos[0].name);
		},
        mounted() {
            console.log(this.$route.query)
            // this.car = this.$route.query\
            
        },
        methods: {
            listOpen(name) {
                // this.$get(this.todos[0].isClass);
                console.log(typeof this.todos[0].isClass)
                for(var i = 0; i < this.todos.length; i++) {
                    // this.todos[i].isClass = false;
                    if(typeof this.todos[i].isClass == 'undefined') {
                        this.$set(this.todos[i], 'isClass', false);
                    }
                    if(this.todos[i].name == name) {
                        this.todos[i].isClass = true;
                        console.log(name)
                    }else {
                        this.todos[i].isClass = false;
                    }
                }
            },
            liClick(name) {
                // console.log(name)
                this.listOpen(name);
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
            border-top: 1px solid #ddd; 
            li { 
                position: relative;
                .liMsg {
                    line-height: 44px;
                    padding-left: 11px;
                }
                .icon {
                    position: absolute;
                    top: 18px;
                    right: 10px;
                }
                .carMsg {
                    background-color: #efefef;
                    padding: 10px 0 12px 11px;
                    transition: 3s;
                    display: none; 
                    &.carShow {
                        display: block;
                    }
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
