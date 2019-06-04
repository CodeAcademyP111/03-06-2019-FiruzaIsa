
$(document).ready(function(){
   
    var x = 0;
  $(window).scroll(function(){
 var count = x++;
 if(count>=4){
     $("nav").addClass("active");
      
 }else{
    $("nav").removeClass("active");
 }
   
  });
});