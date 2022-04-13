const temp_status=document.getElementById('temp_status')
const temp=document.getElementById('temp');
const submitbtn=document.getElementById('submitbtn');
const cityname=document.getElementById('cityname');
const city=document.getElementById('city');
const box=document.getElementById('box');
const day=document.getElementById("day");
const date=document.getElementById("date");
const d = new Date();
const dayarray=["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"]
const month=["January","February","March","April","May","June","July","August","September","October","November","December"]
document.getElementById("day").innerHTML = dayarray[d.getDay()-1];
date.innerText=d.getDate() + "-" + month[d.getMonth()] + "-" + d.getFullYear();
const hours=d.getHours();
const getinfo=async(event)=>{
event.preventDefault();
box.style.display="block";
let cityval=cityname.value;
console.log(cityval);
if(cityval==="")
{
city.innerText=`please write name before search`;
}
else{
city.innerText=cityval;
try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=matrix&appid=32a0f7335790d6473cd5eeb0e0d280c8`;
    console.log(url);
const response=await fetch(url);
console.log(response);
const data=await response.json();
console.log(data);
const arrdata=[data];
temp.innerText=(arrdata[0].main.temp-273).toFixed(0) +"°C";
const weathercondition=arrdata[0].weather[0].main;
if(weathercondition=="Clear" && hours>=12)
{
    temp_status.innerHTML="<i class='fas fa-cloud-moon' style='color:rgb(56, 85, 91);'></i>";
}

else if(weathercondition=="Clear")
{
    temp_status.innerHTML="<i class='fas fa-sun' style='color:rgb(56, 85, 91);'></i>";
}
else if(weathercondition=="Clouds")
{
    temp_status.innerHTML="<i class='fas fa-cloud' style='color:rgb(56, 85, 91);'></i>";
}
if(weathercondition=="Rain")
{
    temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:rgb(56, 85, 91);'></i>";
}
}
catch{
    cityname.innerText='please enter city name carefully'
}

}
}
submitbtn.addEventListener('click',getinfo);