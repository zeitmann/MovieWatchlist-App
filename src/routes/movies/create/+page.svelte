<section class="create-page py-5">
  <div class="container text-white" style="max-width: 700px;">
    
    <a href="/movies" class="btn btn-link text-info ps-0 mb-3">
      ← Back
    </a>

    <h1 class="mb-4">Add a Movie</h1>

    <form method="POST" action="?/create">
      
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input name="title" type="text" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Year</label>
        <input name="year" type="number" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Length</label>
        <input
          name="length"
          type="text"
          class="form-control"
          placeholder="z.B. 120 Minuten"
          required
        />
      </div>

      <div class="mb-4">
        <label class="form-label">Poster (optional)</label>
        <input
          name="poster"
          type="text"
          class="form-control"
          placeholder="/images/movies/meinfilm.jpg"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Add Movie
      </button>

    </form>
  </div>
</section>

<style>
  .create-page {
    min-height: 100vh;
    background-color: #121212;
  }
</style>