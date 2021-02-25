$("#faq-option").mouseover(function(){
    $(this).children('ul').addClass("hard-show");
  });
  
      $("body:not(ul)").click(function(){
    $("ul").removeClass("hard-show");
  });