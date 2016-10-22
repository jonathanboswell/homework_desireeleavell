var meal = ["Breakfast", "Lunch", "Dinner", "Desserts"];
var classes = ['bf','lh','di','ds']
for(var i = 0; i < meal.length; i++)
{
    $('#icon').append('<option value="'+ i + '"> <h3 class="">' + meal[i] + '</h3> </option>');
}

$('#icon').change(function(){
    var mealClass = classes[$('#icon').val()];
});

