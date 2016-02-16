import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
	linkActiveClass: 'active'
})

router.map({
	'/': {
		name: 'docs',
		component: function (resolve) {
			require(['./views/docs/layout'], resolve)
		},
		subRoutes: {
			'/': {
				component: function (resolve) {
					require(['./views/docs/index'], resolve)
				}
			},
			'/:page': {
				component: function (resolve) {
					require(['./views/docs/' + router.app.$route.params.page], resolve)
				}
			}
		}
	},
	'/demo': {
		name: 'demo',
		component: function (resolve) {
			require(['./views/demo/index'], resolve)
		}
	}
})

router.beforeEach(function () {
	window.scrollTo(0, 0)
})

router.redirect({
	'*': '/'
})

export default router