const btn=document.getElementById('btn')
btn.addEventListener("click" , () =>{
    const temp = document.getElementById('temp')
    const city = document.getElementById('city')
    const country = document.getElementById('country')
    const main = document.getElementById('main')
    const description = document.getElementById('description')
    const lat = document.getElementById('lat')
    const lon = document.getElementById('lon')
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${lat.value}&appid=2eb9275dd25426cec708487ffe4ef51b&units=metric`


    /*fetch(url)
    .then((reponse) => reponse.json())
    .then((data)=>{
        temp.innerHTML=data.main.temp +"°C"
        city.innerHTML=data.name
        main.innerHTML=data.weather[0].main
        description.innerHTML=data.weather[0].description
        country.innerHTML=data.sys.country
    })
    .catch((error) => {
        console.log(error) })*/


    axios.get(url)
    .then((res)=>{
        temp.innerHTML=res.data.main.temp +"°C"
        city.innerHTML=res.data.name
        main.innerHTML=res.data.weather[0].main
        description.innerHTML=res.data.weather[0].description
        country.innerHTML=res.data.sys.country

    })
    .catch((error) =>{
        console.log(error)
    })
})