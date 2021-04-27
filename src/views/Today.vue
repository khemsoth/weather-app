<template>
  <div class="about">
    <h1>This is today's weather</h1>
    <label for="location">Location: </label>
    <input type="text" name="location" v-model="location">
    <input type="button" value="Set Zip Code" v-on:click="getWeather">
    <p>{{ description }}</p>
    <p>{{ currentWeather }}&deg;F</p>
    <p>{{ todayHigh }}&deg;F</p>
    <p>{{ todayLow }}&deg;F</p>
    <p>{{ humidity }}%</p>

  </div>
</template>

<script>
import axios from 'axios'
const dotenv = require('dotenv')
dotenv.config()

export default {
  name: 'Today',
  data() {
    return {
      location: '',
      description: '',
      currentWeather: null,
      todayHigh: null,
      todayLow: null,
      humidity: null,
    }
  },
  methods: {
    getWeather() {
      let wk = process.env.WEATHER_KEY
      console.log(wk)
      let x = `https://api.openweathermap.org/data/2.5/weather?zip=${this.location}&units=imperial&appid=${wk}`
      console.log(x)
      axios.get(x) 
        .then(res => (
          this.description = res.data.weather[0].description,
          this.currentWeather = Math.round(res.data.main.temp),
          this.todayHigh = Math.round(res.data.main.temp_max),
          this.todayLow = Math.round(res.data.main.temp_min),
          this.humidity = Math.round(res.data.main.humidity)
          ))
    } 
  }
}

</script>
