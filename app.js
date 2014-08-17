$(document).ready(function() {
   	/* Make the Add button functional*/
   		$('.addbutton').click (function(){
   		var fruitAdd =$("input[name=search]").val();
   		$('.fruits').prepend('<li>' + fruitAdd + '<li>');
   		

	});

   /* Make the Enter Button Functional*/
		$(document).keydown(function(event){
		var fruitAdd =$("input[name=search]").val();
    	if (event.which == 13){
    	event.preventDefault();
		$('.fruits').prepend('<li>' + fruitAdd + '<li>');
		}
	});

	/* Make the Reset button functional*/
   		$('.rembutton').click(function(){
   		$('.fruits li').empty();
   	});
   	/* Make the mouse click delete an element */

   		$('.fruits').on('click', 'li', function(){
   		$(this).fadeOut('slow', function(){
   		$(this).remove();
   		});
   	}); 	

});