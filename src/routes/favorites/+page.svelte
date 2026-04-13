<script>
  import MovieCard from '$lib/components/MovieCard.svelte';

  let { data } = $props();
</script>

<section class="favorites-page py-5">
  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <h1 class="text-white">Favorite Movies</h1>
      </div>
    </div>

    {#if data.movies.length > 0}
      <div class="row g-4">
        {#each data.movies as movie (movie._id)}
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <MovieCard {movie} />
          </div>
        {/each}
      </div>
    {:else}
      <div class="alert alert-info" role="alert">
        <h4 class="alert-heading">Keine Favoriten!</h4>
        <p>Du hast noch keine Filme zu deiner Favoriten-Liste hinzugefügt. Gehe zu <a href="/movies">Movies</a> und füge deine Lieblings-Filme hinzu!</p>
      </div>
    {/if}
  </div>
</section>

<style>
  .favorites-page {
    min-height: 100vh;
    background-color: #121212;
  }
</style>
