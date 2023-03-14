<template lang="">
  <div class="container-fluid">
    <NavBar></NavBar>
    <div class="d-flex justify-content-around">
      <div class="box-img-home">
        <h1 class="animate__animated animate__backInLeft">
          La destination pour les passionnés de sneakers
        </h1>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <h2>Les tendance du moment rien que pour vous</h2>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-flex justify-content-between">
            <div class="img-slide-1"></div>
            <div class="img-slide-1"></div>
            <div class="img-slide-1"></div>
            <div class="img-slide-1"></div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="d-flex justify-content-between">
            <div class="img-slide-2"></div>
            <div class="img-slide-2"></div>
            <div class="img-slide-2"></div>
            <div class="img-slide-2"></div>
          </div>
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
@import url("https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap");

.img-slide-1 {
  background-image: url(../assets/carousel-1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 75px;
  width: 140px;
}

.img-slide-2 {
  background-image: url(../assets/carousel-2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 75px;
  width: 140px;
}

.animate__animated {
  text-align: center;
  color: aliceblue;
  font-family: "Tilt Neon", cursive;
  font-size: 2rem;
  text-shadow: 2px 2px 2px #75756e;
}

.box-img-home {
  background-image: url(../assets/home-cover-2.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  padding-top: 25px;
}

.button-23 {
  background-color: #ffffff;
  border: 4px solid black;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  height: 109px;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
}

.button-23:focus-visible {
  box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
  transition: box-shadow 0.2s;
}

.button-23:active {
  background-color: #f7f7f7;
  border-color: #000000;
  transform: scale(0.96);
}

.button-23:disabled {
  border-color: #dddddd;
  color: #dddddd;
  cursor: not-allowed;
  opacity: 1;
}

.box-text-home p {
  width: 351px;
  height: 50%;
}
</style>
