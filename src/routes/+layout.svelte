<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<svelte:head>
  <title>Movie Watchlist</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<nav class="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary">
  <div class="container">
    <a class="navbar-brand fw-bold" href="/">ScreenStack</a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Navigation umschalten"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        <a class="nav-link text-light" href="/">Home</a>
        <a class="nav-link text-light" href="/movies">Movies</a>
        <a class="nav-link text-light" href="/favorites">Favorites</a>
      </div>
    </div>
  </div>
</nav>

<main>
  <slot />
</main>