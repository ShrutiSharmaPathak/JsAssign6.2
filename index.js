
/* In Java script there is no other keyword to declare the variable other
   than 'var'. All type of variables are declared using var keyword only whether
   string/ number/ boolean etc. 
   Double or single , any quote can be used for string value */
/*Variable declaration*/   
var recipeName='Creamy squash linguine';
var preparationtime=45;
var recipeBy="Jimmy Cutter";
var isVegetarian=true;
var calories =223.7;

/*Getting the javascript output on console using console.log().
  and using the string concatenation  */
console.log("Recipe details");
console.log("-------------------------");
console.log('Recipe Name :'+ recipeName);
console.log('Preparation Time :'+ preparationtime);
console.log('Recipe By :'+ recipeBy);
console.log('Is the Recipe Vegetarian :'+ isVegetarian);
console.log('Calories :'+ calories); 

/*Updation of the value of 'preparationTime' and 'recipeBy' variable.
  No var keyword is required as the variable is already declared */
preparationtime=60;
recipeBy="Jimmy Cutter George";

console.log("Updated Recipe Details");
console.log("-----------------------------");
console.log('Recipe Name :'+ recipeName);
console.log('Preparation Time :'+ preparationtime);
console.log('Recipe By :'+ recipeBy);
console.log('Is the Recipe Vegetarian :'+ isVegetarian);
console.log('Calories :'+ calories); 
