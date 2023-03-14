<template lang="">
  <div class="container text-center">
    <NavBar></NavBar>
    <ButtonFilter></ButtonFilter>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ButtonFilter from "@/components/ButtonFilter.vue";
export default {
  name: "BlockNav",
  components: { NavBar, ButtonFilter },
};
</script>
<style lang=""></style>
