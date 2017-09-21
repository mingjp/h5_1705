

require.config({
	paths:{jquery: "../lib/jquery-3.1.1"}
});
require(['jquery','randomColor'],function($,rc){
	console.log(rc);
	$('body').css('background-color',rc.randomColor())
	console.log(555);
})