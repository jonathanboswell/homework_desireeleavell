
var cities = ['NYC','SF', 'LA','ATX','SYD'];
cities.forEach(function(value, key){
    $('#buttonBox').append('<button id="buttonBox"  value=' + key + '>' + value + '</button> ');
});


var abbr = ['nyc','la','sf','austin','sydney'];
$('button').click(function(){
    index = $(this).val();
    $('body').removeClass();
    $('body').addClass(abbr[index]);
});

