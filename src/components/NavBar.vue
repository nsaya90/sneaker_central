<template lang="">
  <nav class="navbar">
    <div class="container-fluid">
      <router-link to="/"><div class="box-logo"></div> </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Compte</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Message</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Déposer une annonce</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.box-logo {
  background-image: url(../assets/logo.png);
  height: 100px;
  width: 200px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
