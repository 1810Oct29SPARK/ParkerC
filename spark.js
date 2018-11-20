$(document).ready(() => {
    $('#getrecip').on('submit', (e) => {
        let searchreci = $('#searchText').val();
        recipe(searchreci);
        e.preventDefault();
    });
});

function recipe (searchreci) {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://www.food2fork.com/api/search?key=89fe3962672ce51889be147e53d0e93d&q=';
    axios.get(proxyUrl + targetUrl + searchreci)
    .then((response) => {
        console.log(response);
        var irish = response.data.recipes;
        var output ='';
        $.each(irish, (index,recipe) => {
            console.log(recipe);
            output += `
                <div class = "col-md-3">
                    <div class = "text-center well">
                        <img src = "${recipe.image_url}" height="150" width="200">
                        <h3 id="clr">${recipe.title}</h3>
                        <a href = "${recipe.source_url}" class="btn btn-dark">Recipe Link</a>
                    </div>
                </div>

            `;

        });
    $('#recip').html(output);
    });

}

