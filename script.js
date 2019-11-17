var request = new XMLHttpRequest();

function fireApi(){
    request.open('GET', "https://api.themoviedb.org/3/movie/550?api_key=0ff32a4d85533dd93a5b1224fe15613e")
    request.onload = function(){
        let result = request.response; //JSON string
        let resultObj = JSON.parse(result);//JSON object
    }
    ,request.send();
}

function display(){
    let imageelement = document.getElementById("happy") 
    imageelement.style.visibility = "visible"
    console.log(imageelement)
}


function displayNo(){
    let imageelement = document.getElementById("oh sorry");
    imageelement.style.visibility = "visible"
    console.log(imageelement);
}
function myFunction(){
    document.getElementById("myCheck").click();
}