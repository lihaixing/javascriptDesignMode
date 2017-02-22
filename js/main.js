/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require.config({
//    baseUrl: "js/lib",
    paths: {
	"jquery": "jquery-2.1.4"
    }
});

require(['jquery'], function ($) {
    
});

require(['math'], function (math) {
	alert(math.add(1, 1));
	});

