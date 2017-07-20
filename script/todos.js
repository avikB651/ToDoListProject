$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

$("ul").on("click","span",function(e){
  e.stopPropagation();
  $(this).parent().fadeOut(500,function(event){
    $(this).remove();
  })
});

$("input").on("keypress",function(e){
  if(e.which === 13){
    var data = $(this).val();
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i>&nbsp&nbsp</span> " + data + "</li>");
    $(this).val("");
  }
});
$("i").on("click",function(){
  $("input").toggleClass("invisible");
});
