<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'

export default defineComponent({
  components: {
  },
  created() {
    axios
      .get('/.netlify/functions/fetch-weather?location=aachen')
      .then(response => (
        console.log(response)
      ))
  }
})
</script>
<template>
  <div class="wrapper">
    <div class="search-col">
      <div class="input-row">
        <div class="col">
          <input class="input" type="text" placeholder="Enter City">
          <button type="button" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-search"
              viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
          <!-- <div style="width:100%;height:100px;background-color:red;position:absolute;top:100%;left:0;"></div> -->
        </div>
        <div class="col">
        </div>
      </div>
    </div>
    <div class="content-col">
      <p>hallo</p>
    </div>
  </div>
</template>

<style>
@import url(./styles.css);

.input-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  position: relative;
}

.col {
  grid-column: span 12;
  display: flex;
}

.input {
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid var(--gray);
}

.input:focus {
  outline: none;
  border-bottom: 2px solid var(--orange);
}

.search-col {
  padding: 2rem;
  background-color: rgba(3, 33, 48, 0.5);
  backdrop-filter: blur(10px);
}

.search-bar {
  flex-grow: 1;
  max-width: 35rem;
}
</style>
