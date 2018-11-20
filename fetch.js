fetch('https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin')
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    console.log(Json.stringify(myJson));
});
//Here we are fetching a JSON file across the network and print it to the console. 
//The simplest use of fetch() takes one argument — the path to the resource you 
//want to fetch — and returns a promise containing the response (a Response object).


