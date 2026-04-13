<script>
  let { data } = $props();
  const movie = data.movie;
</script>

<section class="detail-page py-5">
  <div class="container text-white">
    <a href="/movies" class="btn btn-link text-info ps-0 mb-3">← Back</a>

    <div class="row g-4 align-items-start">
      <div class="col-12 col-md-4">
        <img
          src={movie.poster}
          alt={movie.title}
          class="img-fluid rounded shadow"
        />
      </div>

      <div class="col-12 col-md-8">
        <h1 class="mb-4">{movie.title}</h1>

        <p><strong>Jahr:</strong> {movie.year}</p>
        <p><strong>Dauer:</strong> {movie.length}</p>

        {#if movie.genre}
          <p><strong>Genre:</strong> {movie.genre}</p>
        {/if}

        <h4 class="mt-4">Cast</h4>

        {#if movie.actors && movie.actors.length > 0}
          <ul>
            {#each movie.actors as actor}
              <li>{actor}</li>
            {/each}
          </ul>
        {:else}
          <p>Keine Schauspieler vorhanden</p>
        {/if}

        <form method="POST" action="?/delete" class="mt-4">
          <button type="submit" class="btn btn-danger">
            Delete Movie
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  .detail-page {
    min-height: 100vh;
    background-color: #121212;
  }
</style>