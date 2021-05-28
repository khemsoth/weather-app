<template>
  <div class="about">
    <h1>This is today's weather</h1>
    <label for="location">Location: </label>
    <input type="text" placeholder="Enter Zip or City, State" name="location" v-model="location">
    <input type="button" value="Get My Weather" v-on:click="getWeather">
    <img :src="icon" alt=""><p>{{ description }}</p>
    <p>Currently: {{ currentWeather }}</p>
    <p>Today's High: {{ todayHigh }}</p>
    <p>Today's Low: {{ todayLow }}</p>
    <p>Today's Humidity: {{ humidity }}</p>
  </div>
</template>

<script>
import axios from 'axios'
import { convertState } from '../../stateCodes'
require('dotenv').config()

export default {
  name: 'Today',
  data() {
    return {
      icon: null,
      location: null,
      city: null,
      state: null,
      description: '',
      currentWeather: null,
      todayHigh: null,
      todayLow: null,
      humidity: null,
    }
  },
  methods: {
    capitalizeState(state) {
      return state.charAt(0).toUpperCase() + state.slice(1)
    },
    getWeather() {
      let wk = process.env.VUE_APP_WEATHER_KEY
      let location = this.location
      if(location != null) {
      if(!isNaN(location)){
        let x = `https://api.openweathermap.org/data/2.5/weather?zip=${this.location}&units=imperial&appid=${wk}`
        axios.get(x) 
          .then(res => (
            this.description = res.data.weather[0].description,
            this.currentWeather = `${Math.round(res.data.main.temp)}${String.fromCharCode(176)}F`,
            this.todayHigh = `${Math.round(res.data.main.temp_max)}${String.fromCharCode(176)}F`,
            this.todayLow = `${Math.round(res.data.main.temp_min)}${String.fromCharCode(176)}F`,
            this.humidity = `${Math.round(res.data.main.humidity)}${String.fromCharCode(37)}`,
            this.icon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
          ))
      } 
      else if(isNaN(location)) {
        let city = location.split(', ', 2)
        this.city = city[0]
        let state = city[1]
        state = this.capitalizeState(state)
        if(state.length != 2) {
          this.state = convertState(state)
        } else if(state.length == 2) {
          this.state = `US-${state}`
        }
        let x = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&appid=${wk}`
        console.log(x)
        axios.get(x) 
          .then(res => (
            this.description = res.data.weather[0].description,
            this.currentWeather = `${Math.round(res.data.main.temp)}${String.fromCharCode(176)}F`,
            this.todayHigh = `${Math.round(res.data.main.temp_max)}${String.fromCharCode(176)}F`,
            this.todayLow = `${Math.round(res.data.main.temp_min)}${String.fromCharCode(176)}F`,
            this.humidity = `${Math.round(res.data.main.humidity)}${String.fromCharCode(37)}`,
            this.icon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
          ))
      }} else {
        alert('derp')
      }
    } 
  }
}

</script>
