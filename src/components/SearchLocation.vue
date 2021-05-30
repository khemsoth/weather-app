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
      this.$emit('set-location', this.location)
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