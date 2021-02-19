const btnRandom = document.getElementById('btnRandom');
const recipe = document.getElementById('recipe');
const search = document.getElementById('search');
const ok = document.getElementById('ok')


const getRecipe = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php ')
    .then((res) => res.json())
    .then((data) => {
        let recipeName = data.meals[0].strMeal;
        let preview = data.meals[0].strMealThumb;
        let instruction = data.meals[0].strInstructions;
        let youtube = data.meals[0].strYoutube;
        let area = data.meals[0].strArea;
        recipe.innerHTML = 
        `<h1>${recipeName}</h1>
         <h2>${area}</h2>
        <img src="${preview}" alt="recipe-preview">
        <p>${instruction}</p>
        <a href="${youtube}" target="_blank"><img style="width:25px" src="https://png.pngtree.com/element_our/sm/20180506/sm_5aeee59357bbb.jpg" alt="logo-youtube"></a>`;
    });  
}; 
    getRecipe();
    btnRandom.addEventListener('click', () => {
        getRecipe();
    });
// BOUCLE POUR LISTER LES INGREDIENTS
    // const ingredients = [];
    // for (let i = 1; i <= 20; i++) {​​ if (meal[`strIngredient${​​i}​​`]) {​​ ingredients.push( `${​​meal[`strIngredient${​​i}​​`]}​​ - ${​​meal[`strMeasure${​​i}​​`]}​​` ); }​​ else {​​ // Stop if there are no more ingredients break; }​​ }​​

    


    
    // let userSearch;

    // search.addEventListener('input', (event) => {
    //     userSearch = event.target.value;
    //     filterByName();
    // });

    // const filterByName = () => {
    //     fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearch}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data.meals);
    //         let searchResult = (data.meals).map((strMeal) => data.Meal.strMeal);
    //         console.log(searchResult);
    //         for (let i = 0; i < data.meals.length; i++) {
    //             console.log(i);
    //         }
    //     });
    // };

    // ok.addEventListener('click', () => {
    //     filterByName();
    // });

    // const array = [2, 5, 9];
    // let squares = [];

    // for (let i = 0; i < array.length; i++) {
    //     squares.push(array[i] * array[i]));
    // }