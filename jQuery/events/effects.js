// $('button').click(function(){
// 	$('div').fadeOut(3000,function(){
// 		$(this).remove();
// 	});
// });

// $('button').click(function(){
// 	$('div').fadeIn(10000);
// });

// $('button').click(function(){
// 	$('div').fadeToggle();
// });

// $('button').click(function(){
// 	$('div').slideDown();
// });

// $('button').click(function(){
// 	$('div').slideUp();
// });

$('button').click(function(){
	$('div').slideToggle(1000,function(){
		console.log("sliding completed");
	});
});