var request = new XMLHttpRequest();

function fireApi(){
    let num= Math.floor(Math.random()* Math.floor(15))
    request.open("GET", "https://akabab.github.io/superhero-api/api/id/" + num + ".json"
    )    
    request.onload = function(){
        let result = request.response; //JSON string
        let resultObj = JSON.parse(result);//JSON object 
         console.log(resultObj.images.lg);
        document.getElementById("superhero").src = resultObj.images.lg
      
    }
    ,request.send();
    
}

function display(){
    document.getElementById("happy").style.display="block";
}


function displayNo(){
   document.getElementById("oh sorry").style.display="block"
}

