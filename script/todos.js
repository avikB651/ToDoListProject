$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

$("span").on("click",function(e){
  e.stopPropagation();
  $(this).parent().fadeOut(500,function(event){
    $(this).remove();
  })
});

$("input").on("keypress",function(e){
  if(e.which === 13){
    var data = $(this).val();
    $("ul").append("<li><span>X</span> " + data + "</li>");
    $(this).val("");
  }
});
