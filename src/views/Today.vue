<template>
  <div class="about">
    <h1>This is today's weather</h1>
    <label for="location">Location: </label>
    <input type="text" name="location" v-model="location">
    <input type="button" value="Set Zip Code" v-on:click="getWeather">
    <p>{{ description }}</p>
    <p>Currently: {{ currentWeather }}</p>
    <p>Today's High: {{ todayHigh }}</p>
    <p>Today's Low: {{ todayLow }}</p>
    <p>Today's Humidity: {{ humidity }}</p>

  </div>
</template>

<script>
import axios from 'axios'
require('dotenv').config()

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
      let wk = process.env.VUE_APP_WEATHER_KEY
      let x = `https://api.openweathermap.org/data/2.5/weather?zip=${this.location}&units=imperial&appid=${wk}`
      axios.get(x) 
        .then(res => (
          this.description = res.data.weather[0].description,
          this.currentWeather = `${Math.round(res.data.main.temp)}${String.fromCharCode(176)}F`,
          this.todayHigh = `${Math.round(res.data.main.temp_max)}${String.fromCharCode(176)}F`,
          this.todayLow = `${Math.round(res.data.main.temp_min)}${String.fromCharCode(176)}F`,
          this.humidity = `${Math.round(res.data.main.humidity)}${String.fromCharCode(37)}`
          ))
    } 
  }
}

</script>
