<template>
  <div id="app">
    <audio ref="audio" loop>
      <source src="@/assets/background-music.mp3" type="audio/mp3" />
      Your browser does not support the audio tag.
    </audio>

    <!-- Volume Control -->
    <div class="volume-control">
      <label for="volumeSlider">Volume</label>
      <input 
        id="volumeSlider" 
        type="range" 
        min="0" 
        max="1" 
        step="0.01" 
        v-model="volume" 
        @input="setVolume"
      />
      <span>{{ (volume * 100).toFixed(0) }}%</span>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      volume: 0.5, // Default volume set to 50%
    };
  },
  methods: {
    setVolume() {
      // Access the audio element and set the volume based on slider
      this.$refs.audio.volume = this.volume;
    },
    playMusic() {
      // Play the music when the app is loaded
      const audio = this.$refs.audio;
      audio.play();
    }
  },
  mounted() {
    // Ensure music starts playing on mount
    this.playMusic();
    this.setVolume(); // Set initial volume
  },
};
</script>

<style scoped>
/* Styling for volume control */
.volume-control {
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
  color: white;
}

.volume-control input {
  margin: 5px;
  width: 150px;
}

.volume-control label {
  font-family: 'Uncial Antiqua', serif;
  margin-right: 10px;
}
</style>