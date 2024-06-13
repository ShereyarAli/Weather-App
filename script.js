const submit = document.querySelector('.js-search-btn')
const wheatherPic = document.querySelector('.wheatherPic')
const cityName = document.querySelector('.cityName')
const wind = document.querySelector('.js-wind')
const humid = document.querySelector('.js-humid')
const wheatherInfo = document.querySelector('.wheatherInfo')
const errorCase = document.querySelector('.errorCase')
const footer = document.querySelector('.foot')
const city = document.querySelector('.js-search')

async function wheather (){
  const conditions = document.querySelector('.conditions')
  const searchCity = city.value.toLowerCase()
  try{
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=42a990ccbe094191a0165256241103&q=${searchCity}`)
  
  if(!response.ok){
    errorCase.style.display = 'block'
    wheatherInfo.style.display = 'none'
    footer.style.display = 'none'
    throw new Error("Shits not fetched cuh");
    
  }
  else if(response.ok){
   const data = await response.json()
   conditions.innerHTML = `${data.current.feelslike_c} &deg;c`
   wheatherPic.src = `${data.current.condition.icon}`
   cityName.innerHTML = `${data.location.name}`
   wind.innerHTML = `${data.current.wind_kph}Kph`
   humid.innerHTML = `${data.current.humidity}%`
   console.log(data)
}
  }
  catch(error){
    console.error(error)
    console.log("Get caught")
  }
  finally{
    console.log("Bros always here")
  }
}
submit.addEventListener('click', () => {
 console.log(city.value)
  if(city.value){
  wheather()
 }
  
 
})
