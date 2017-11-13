import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home.vue'
import Cx from '@/views/cx.vue'
import CxChoose from '@/views/cxChoose.vue'
import CxMsg from '@/views/cxMsg.vue'
import CxYear from '@/views/cxYear.vue'
import CxStyle from '@/views/cxStyle.vue'
import CxFind from '@/views/cxFind.vue'
import Parts from '@/views/parts.vue'
import PCheck from '@/views/pCheck.vue'
import ByCheck from '@/views/byCheck.vue'
import Brand from '@/views/brand.vue'
import ChxOver from '@/views/chxOver.vue'
import TianxieMsg from '@/views/tianxieMsg.vue'
import Listlist from '@/views/listlist.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            redirect: '/home'
        },
        {
            path: '/home',
            name: '汽车查询',
            component: Home
        },
        {
            path: '/cx',
            name: '车型选择',
            component: Cx
        },
        {
            path: '/cxChoose',
            name: '车型选择',
            component: CxChoose
        },
        {
            path: '/cxYear',
            name: '选择年份',
            component: CxYear
        },
        {
            path: '/cxMsg',
            name: '车型信息',
            component: CxMsg
        },
        {
            path: '/cxFind',
            name: '车型选择',
            component: CxFind
        },
        {
            path: '/cxStyle',
            name: '选择车型',
            component: CxStyle
        },
        {
            path: '/parts',
            name: '配件查询',
            component: Parts
        },
        {
            path: '/pCheck',
            name: '配件查询',
            component: PCheck
        },
        {
            path: '/byCheck',
            name: '保养查询',
            component: ByCheck
        },
        {
            path: '/brand',
            name: '选择品牌',
            component: Brand
        },
        {
            path: '/chxOver',
            name: '查询结束',
            component: ChxOver
        },
        {
            path: '/tianxieMsg',
            name: '填写验证信息',
            component: TianxieMsg
        },
        {
            path: '/listlist',
            name: '练习查询',
            component: Listlist
        }
    ]
})