const cityOp = document.getElementById("city_name_show");
const submitBtn = document.getElementById("submitBtn");
const cityInp = document.getElementById("cityName");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const day = document.getElementById("day");
const date = document.getElementById("today_date");

const dateNow = new Date;
date.innerText = dateNow.toLocaleDateString();
let arr = ["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"];
day.innerText =arr[dateNow.getDay()];

submitBtn.addEventListener("click", async(e)=>{
    e.preventDefault();
    if(cityInp.value === ""){
        cityOp.innerText = "Empty Search..";
    }else{
        try {
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityInp.value}&units=metric&appid=e36298b0a54e5ab4cc0d2bc40bf1f9de`;
            let response = await fetch(api);
            const data = await response.json();
            const arrData = [data];
            temp.innerText = arrData[0].main.temp ;
            // temp_status.innerText = arrData[0].main.temp ;
            var tempMood = arrData[0].weather[0].main;
            if(tempMood === "Clear"){
                temp_status.innerHTML = "<i class='fa fa-sun-o' aria-hidden='true' style='color:var(--main-color);'></i>";
            }else if(tempMood === "Rain"){
                temp_status.innerHTML = '<i class="fa fa-tint" aria-hidden="true" style="color:var(--main-color);"></i>';
            }else{
                temp_status.innerHTML = '<i class="fa fa-cloud" aria-hidden="true" style="color:var(--main-color);"></i>';
            }
            // console.log(data);
            cityOp.innerText = arrData[0].name + "," + arrData[0].sys.country ;

        } catch (error) {
            cityOp.innerText = "Invalid city name..";          
        }
    }
    // console.log("clicked");
})