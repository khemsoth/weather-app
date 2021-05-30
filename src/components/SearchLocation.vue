<template>
  <div>
    <label for="location">Location: </label>
    <input type="text" placeholder="Enter Zip or City, State" name="location" v-model="location">
    <input type="button" value="Get My Weather" v-on:click="setLocation">
  </div>
</template>

<script>
export default {
  name: 'SearchLocation',
  methods: {
    setLocation() {
      if(!isNaN(this.location)) {
        if(this.location.length != 5) {
          alert('Please input 5 digit zip code')
          this.location = null
          return
        }
        else {
          this.$emit('set-location', this.location)
        }
      }
      else if(isNaN(this.location)) {
        if(!this.location.includes(', ')) {
          alert('Please input proper city, state format')
          this.location = null
          return
        } else {
          this.$emit('set-location', this.location)
        }
      }
    }
  },
  data() {
    return {
      location: null
    }
  },

}
</script>

<style>

</style>