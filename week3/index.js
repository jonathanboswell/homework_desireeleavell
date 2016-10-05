
$(function(){
    console.log("hello there");
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });

    $( "#opener" ).on( "click", function(e) {
      e.preventDefault();
      $( "#dialog" ).dialog( "open" );
    });

    $("readmore").click(function(){
        $("result").hide();
    });
    $("readmore").click(function(){
        $("result").show();
    });
});