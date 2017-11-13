<template>
	<ul class="carUl">
        <li v-for="todo in datas">
            <p class="letter">{{todo.title}}</p>
            <router-link v-for="list in todo.bMsg" :to="{ path: 'cxYear', query: { name: list.name }}"  tag="div" class="brands">
                {{list.name}}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'hello',
    props: {
        datas: Array
    },
    data () {
        return {
        }
    },
    mounted() {
        console.log(this.todos);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
    .carUl {
        li {
            font-size: 14px;				
            .letter {
                padding: 7px 0 7px 11px;
            }
            .brands {
                background-color: #fff;
                padding-left: 11px;
                border-bottom: 1px solid #ddd;
                line-height: 45px;
                &:last-child {
                    border-bottom: none;	
                }
            }
        }
    }
</style>
