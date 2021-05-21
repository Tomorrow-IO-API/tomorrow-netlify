const api = {
  encode: () => {
    console.log("api.encode started")
    const coords = document.getElementById("coordinates").innerHTML
    console.log("coordinates: ",coords)
    const params = "?location=" + coords + "&fields=temperature,windSpeed,humidity&units=imperial&timesteps=1h"
    console.log("params:", params)
    console.log("api.encode ended")
    return params
  },

  show: (result) => {
    console.log("api.show started")
    console.log("T result is:",result.data.timelines[0].intervals[0].values.temperature)
    console.log("S result is:",result.data.timelines[0].intervals[0].values.windSpeed)
    console.log("H result is:",result.data.timelines[0].intervals[0].values.humidity)
    document.getElementById("t1").innerHTML = result.data.timelines[0].intervals[0].values.temperature + " F"
    document.getElementById("t2").innerHTML = result.data.timelines[0].intervals[2].values.temperature + " F"
    document.getElementById("t3").innerHTML = result.data.timelines[0].intervals[4].values.temperature + " F"
    document.getElementById("t4").innerHTML = result.data.timelines[0].intervals[6].values.temperature + " F"
    document.getElementById("t5").innerHTML = result.data.timelines[0].intervals[8].values.temperature + " F"
    document.getElementById("s1").innerHTML = result.data.timelines[0].intervals[0].values.windSpeed + " mph"
    document.getElementById("s2").innerHTML = result.data.timelines[0].intervals[2].values.windSpeed + " mph"
    document.getElementById("s3").innerHTML = result.data.timelines[0].intervals[4].values.windSpeed + " mph"
    document.getElementById("s4").innerHTML = result.data.timelines[0].intervals[6].values.windSpeed + " mph"
    document.getElementById("s5").innerHTML = result.data.timelines[0].intervals[8].values.windSpeed + " mph"
    document.getElementById("h1").innerHTML = result.data.timelines[0].intervals[0].values.humidity + "%"
    document.getElementById("h2").innerHTML = result.data.timelines[0].intervals[2].values.humidity + "%"
    document.getElementById("h3").innerHTML = result.data.timelines[0].intervals[4].values.humidity + "%"
    document.getElementById("h4").innerHTML = result.data.timelines[0].intervals[6].values.humidity + "%"
    document.getElementById("h5").innerHTML = result.data.timelines[0].intervals[8].values.humidity + "%"
    console.log("api.show ended")
  },

  get: () => {
  console.log("api.get started")
  const apiParams = api.encode()
  console.log("apiParams is: ", apiParams)
  fetch("/.netlify/functions/getapi" + apiParams)
    .then(response => response.json())
    .then(result => api.show(result))  //.results
    .catch(err => console.log("Error in api.get: ",err))
  console.log("api.get ended")
  },

  send: () => {
    api.get()
  },


}

// Create event listener for refresh button
console.log("index.js entered")
const submit = document.getElementById('refresh')
submit.addEventListener('click', api.send, false)
console.log("EventListener activated")


// Call api.send() once to populate values upon page load
console.log("Initial loading of data")
api.send()


// Call api.send() periodically to update values
var intervalID = setInterval(myCallback, 15*60*1000); //update every 15min

function myCallback()
{
  console.log("callback function entered")
  api.send()
}
