<script>
  import MovieCard from '$lib/components/MovieCard.svelte';
  let { data } = $props();
</script>

<section class="movies-page py-5">
  <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="text-white m-0">Movie Watchlist</h1>
      <a href="/movies/create" class="btn btn-outline-light custom-btn">
  Add new movie
</a>
    </div>

    <div class="row g-4">
      {#each data.movies as movie}
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <MovieCard {movie} />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .movies-page {
    min-height: 100vh;
    background-color: #121212;
  }

  .custom-btn {
  border-radius: 10px;
  padding: 8px 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.custom-btn:hover {
  background-color: white;
  color: black;
}
</style>