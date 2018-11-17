/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Employee from '@/components/Employee'
import Employer from '@/components/Employer'
import Test from '@/components/Test'
import SearchEmployer from '@/components/SearchEmployer'
import SearchJobs from '@/components/SearchJobs'
import SearchEmployee from '@/components/SearchEmployee'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/employee',
            name: 'Employee',
            component: Employee
        }, {
            path: '/employer',
            name: 'Employer',
            component: Employer
        }, {
            path: '/test',
            name: 'Test',
            component: Test
        }, {
            path: '/searchEmployer',
            name: 'SearchEmployer',
            component: SearchEmployer
        }, {
            path: '/searchEmployee',
            name: 'SearchEmployee',
            component: SearchEmployee
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        }
    ]
})
