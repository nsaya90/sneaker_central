<template lang="">
  <NavBar></NavBar>
  <div class="container-fluid">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom</th>
          <th scope="col">Prénom</th>
          <th scope="col">Email</th>
          <th scope="col">Téléphone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{{ info.firstname }}</td>
          <td>{{ info.lastname }}</td>
          <td>{{ info.email }}</td>
          <td>{{ info.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";

const userId = localStorage.getItem("user-id");
const token = localStorage.getItem("token");

export default {
  name: "ProfileView",
  components: { NavBar },
  data() {
    return {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      info: "",
    };
  },
  async mounted() {
    await axios({
      method: "get",
      headers: { Authorization: `Bearer ${this.$store.token}` },
      url: "http://127.0.0.1:8000/api/user/" + this.$store.userId,
    }).then((response) => (this.info = response.data.user));
    console.log(this.info);
  },
};
</script>
<style lang=""></style>
