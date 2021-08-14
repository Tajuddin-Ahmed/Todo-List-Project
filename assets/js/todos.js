$('ul').on('click','li',function(){
	$(this).toggleClass('completed');
});

$('ul').on('click','span',function(e) {
	$(this).parent().fadeOut(500,function(){
      $(this).remove();
	});
	e.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
	if (event.which ===13) {
       var todoText = ($(this).val());
       $(this).val('');
       $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> '+todoText+'</li');
	} else {

	}
});

$('.fa-plus').click(function(){
	$('input[type="text"]').fadeToggle(); 
});