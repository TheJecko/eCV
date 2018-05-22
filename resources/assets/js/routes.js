import VueRouter from  'vue-router';

let routes = [
{
	path:'/',
	component: require('./views/Home')
},
{
	path:'/about',
	component: require('./views/About')
},
{
	path:'/projects',
	component: require('./views/Projects')
}



];

export default new VueRouter({

	routes

});