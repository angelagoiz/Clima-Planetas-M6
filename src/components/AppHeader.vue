<template>
  <header class="bg-black shadow-lg">
    <nav class="navbar navbar-expand-lg navbar-dark container">

      <router-link class="navbar-brand fw-bold text-info" to="/">
        🌌 Exploración Espacial
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menuNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="menuNav">
        <ul class="navbar-nav gap-3 text-center">
          <li class="nav-item">
            <a class="nav-link nav-custom active"
               href="https://www.nationalgeographicla.com/espacio/2023/06/asi-fue-el-origen-del-sistema-solar"
               target="_blank">📖 Historia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-custom"
               href="https://science.nasa.gov/gallery/our-solar-system-images/"
               target="_blank">🖼 Imágenes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-custom"
               href="https://www.youtube.com/@nasa_es"
               target="_blank">🎥 Videos</a>
          </li>
        </ul>
      </div>

    </nav>
  </header>
</template>

<script>
export default { name: 'AppHeader' }
</script>
