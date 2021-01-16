//check off specitic todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");
 
});
//click on X to delete todos
$("span").click(function(event) {
   $(this).parent().fadeOut(500,function() {
       $(this).remove();
   });
   event.stopPropagation();//jquery method that will stop the event from bubbling up 
});