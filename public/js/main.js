const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const stats = document.getElementById('stats');



const getinfo = async(e) => {
    e.preventDefault();
    let cityval = cityname.value;

     if(cityval === ''){
         city_name.innerText = ` 😧 plz enter city ... its empty`;
     }
     else{
         try{
             let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=c7255eab04113c320957842d3d18a376`;

             const response = await fetch(url);
             const data = await response.json();
             const arrdata = [data];

             city_name.innerText =`${arrdata[0].name} , ${
                 arrdata[0].sys.country}`;

            temp.innerText = `Temprature is : ${arrdata[0].main.temp} C -- ${arrdata[0].weather[0].main} today`;

            stats.innerText = ` humidity is ${arrdata[0].main.humidity} . visibility is ${arrdata[0].visibility}`


                 
         }
          
         catch{
             city_name.innerText =` 😠 plz enter City name properly`
         }
     }
     
     
}

submitbtn.addEventListener('click', getinfo);

 