<script>
    import { enhance } from "$app/forms";

  let { movie } = $props();
</script>

  <div class="card h-100 shadow-sm movie-card">
    
    <img
      src={movie.poster}
      class="card-img-top movie-image"
      alt={movie.title}
    />

    <div class="card-body d-flex flex-column">
      <h5 class="card-title">
        <a href="/movies/{movie._id}" class="movie-link">{movie.title}</a>
      </h5>

      <p class="card-text mb-1"><strong>Jahr:</strong> {movie.year}</p>
      <p class="card-text mb-1"><strong>Dauer:</strong> {movie.length}</p>

      {#if movie.genre}
        <p class="card-text mb-3"><strong>Genre:</strong> {movie.genre}</p>
      {/if}

      {#if movie.watchlist === true}
      <form method="POST" action="?/RemoveFromWatchlist" use:enhance>
      <input name="id" type="hidden" value={movie._id} />
      <button class="btn btn-outline-light mt-auto">
        Remove to favorit
      </button>
      </form>
      {:else}
      <form method="POST" action="?/AddToWatchlist" use:enhance>
      <input name="id" type="hidden" value={movie._id} />
      <button class="btn btn-outline-light mt-auto">
        Add to favorit
      </button>
      </form>
      {/if}
    </div>

  </div>

<style>
 .card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.card-link:hover {
  text-decoration: none;
}

.movie-card {
  background-color: #1e1e1e;
  color: white;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  height: 100%;
}

.movie-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
}

.movie-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}

.card-body {
  display: flex;
  flex-direction: column;
  min-height: 230px;
}

.card-title {
  color: white;
  font-weight: 700;
  line-height: 1.2;
  min-height: 58px;
  margin-bottom: 1rem;
}

.card-text {
  color: #d0d0d0;
}

.btn {
  margin-top: auto;
}

.movie-link {
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;
}

.movie-link:hover {
  color: #d0d0d0;
  text-decoration: underline;
}
</style>