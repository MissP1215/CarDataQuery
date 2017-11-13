<template>
    <ul class="cStyle">
        <router-link tag="li" v-for="todo in carDatas" :to="{ path: 'cxStyle', query: { name: todo.name, carName: carName }}">{{carName}} {{todo.name}}</router-link>
    </ul>
</template>

<script>
export default {
    name: 'hello',
    props: {
        // carDatas: {
        //     required: true,
        //     default: []
        // }
        // carDatas: []
        carDatas: Array,
        carName: String
    },
    data () {
        return {
        }
    },
    mounted() {
        // console.log(this.todos);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
    .cStyle {
        border-top: 1px solid #ddd;
        li {
            padding-left: 11px;
            border-bottom: 1px solid #ddd;
            line-height: 44px;
        }
    }
</style>
