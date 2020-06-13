
$('ul').on("click",'li',function(){
	$(this).toggleClass('completed');
});

$('ul').on("click","span",function(abc){
	$(this).parent().fadeOut(500, function(){
		this.remove();
	});
	abc.stopPropagation();
});


$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		// grabbing the value of new todo
		var todoText = $(this).val();

		// adding new todo at the end of ul
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		$(this).val("");

	}
});

$('.fa-plus').click(function(){
	$("input[type='text']").fadeToggle(200);
})