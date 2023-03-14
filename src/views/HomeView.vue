<template lang="">
  <div class="container-fluid">
    <NavBar></NavBar>

    <h1 class="title-home">La destination pour les passionnés de sneakers</h1>
  </div>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-img-1"></div>
      </div>
      <div class="carousel-item">
        <div class="carousel-img-2"></div>
      </div>
      <div class="carousel-item">
        <div class="carousel-img-3"></div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container-fluid">
    <p>
      En achetant ou en vendant des sneakers entre particuliers, vous pouvez
      bénéficier de prix avantageux tout en évitant les coûts supplémentaires
      associés aux transactions commerciales. De plus, cela vous permet de
      trouver des modèles rares ou exclusifs que vous ne trouveriez pas
      ailleurs.
    </p>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "HomeView",
  components: { NavBar },
};
</script>
<style scopped>
.title-home {
  text-align: center;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: black;
}
.carousel-img-1 {
  background-image: url(../assets/carousel-1.jpg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 800px;
  width: 100%;
}

.carousel-img-2 {
  background-image: url(../assets/carousel-2.jpg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 800px;
  width: 100%;
}
.carousel-img-3 {
  background-image: url(../assets/carousel-3.jpg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 800px;
  width: 100%;
}
</style>
