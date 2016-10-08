

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

    $(".result").hide();
    
    $(".readmore").click(function(e){
        e.preventDefault();
        $(".result").show();
        $(this).siblings('.result').show();
        $(this).hide();
        $(this).parent().find('.read-less').show();
      })

     $('.read-less').click(function(e){
      e.preventDefault();
        $(this).siblings('.result').hide();
        $(this).hide();
        $(this).parent().find('.readmore').show();

    });
      $(".resulta").hide();

       $(".readmoret").click(function(e){
        e.preventDefault();
        $(".resulta").show();
        $(this).siblings('.resulta').show();
        $(this).hide();
        $(this).parent().find('.read-lesst').show();
      })

     $('.read-lesst').click(function(e){
      e.preventDefault();
        $(this).siblings('.resulta').hide();
        $(this).hide();
        $(this).parent().find('.readmoret').show();

    });
     
      $(".resultw").hide();

       $(".learnmore").click(function(e){
        e.preventDefault();
        $(".resultw").show();
        $(this).siblings('.resultw').show();
        $(this).hide();
        $(this).parent().find('.read-lessw').show();
      })

     $('.read-lessw').click(function(e){
      e.preventDefault();
        $(this).siblings('.resultw').hide();
        $(this).hide();
        $(this).parent().find('.learnmore').show();

    });

});