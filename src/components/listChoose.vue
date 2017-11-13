<template>
    <ul class="cStyle">
        <router-link 
            tag="li" 
            v-for="todo in carDatas" 
            :to="{ path: 'cxMsg', query: { name: todo.name, carName: carData.carName, brandName: carData.brandName, id: carData.id}}">{{todo.name}}
               {{carData.carName}}
    {{carData.brandName}}
    {{carData.id}}</router-link>
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
        carDatas: Array,
        // carName: String,
        // brandName: String,
        // idName: Number,
        carData: Object
    },
    data () {
        return {
            car: {}
        }
    },
    mounted() {
        this.car = this.carData
        console.log(this.car);
        console.log(this.carData.brandName);
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
