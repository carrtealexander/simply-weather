defaultScreen();

function getInfo(){
    const newName=document.getElementById('cityInput');
    const cityName=document.getElementById('cityName');
    cityName.innerHTML="City of "+newName.value;


fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=c47a99812550c179eb0e7a868ce46ed7&units=imperial')
.then(response => response.json())
.then(data => {
for(i = 0; i<5;i++){
    document.getElementById("day" +(i+1) + "Min").innerHTML="Min:" + Number(data.list[i].main.temp_min).toFixed(0)+"°F";
}
for(i=0;i<5;i++){
    document.getElementById("day" +(i+1) + "Max").innerHTML="Max:" + Number(data.list[i].main.temp_max).toFixed(0)+"°F";
}
for(i=0;i<5;i++){
    document.getElementById("day" +(i+1) + "Humid").innerHTML="Humidity:" + Number(data.list[i].main.humidity).toFixed(0)+"%";
}
for(i=0;i<5;i++){
    document.getElementById("day" +(i+1) + "Wind").innerHTML="Wind:" + Number(data.list[i].wind.speed).toFixed(0)+"mph";
}


for(i = 0; i<5; i++){
    document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
    data.list[i].weather[0].icon
    +".png";
}
console.log(data)


})

.catch(err => alert("Refresh or Check Internet Connection"))
}

function defaultScreen(){
    document.getElementById("cityInput").defaultValue = "Sheboygan";
    getInfo();
};



var date = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


function checkDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[checkDay(i)];
    }

