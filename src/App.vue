<template>
  <div>
    <Navbar/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue"

export default {
  name: "App",
components:{
Navbar
},
  data() {
    return {};
  },
};
</script>
