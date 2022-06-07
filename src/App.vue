<script setup lang="ts">

</script>
<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-12 col-lg-4 col-md-6 search-col">
        <div class="input-row">
          <input class="input" type="text" placeholder="Enter City">
          <button type="button" class="btn btn-primary shadow-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-search"
              viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="col-12 col-lg-8 col-md-6">
      </div>
    </div>
  </div>
  <!--<input class="search-bar" type="text" placeholder="Enter City">-->
</template>

<style>
@import url(./styles.css);
.input-row {
  display: flex;
  width:100%;
}

.input {
  background-color: rgba(0, 0, 0, 0.2);
  color:white;
  padding: 0.5rem;
  flex-grow: 1;
  border: none;
  border-bottom: 2px solid var(--gray);
}

.input:focus {
  outline: none;
  border-bottom: 2px solid var(--orange);
}

.search-col {
  min-height: 100vh;
  padding: 2rem;
  background-color: rgba(3, 33, 48, 0.5);
  backdrop-filter: blur(10px);
}

.search-bar {
  flex-grow: 1;
  max-width: 35rem;
}
</style>
