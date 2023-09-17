<script setup>
import Banner from './components/Banner.vue'
import Categories from './components/Categories.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="flex">
    <div>
      <Banner />
      <h1>Welcome to Tainted Wings</h1>
      <Categories />
      <Footer />
    </div>
    
    <Sidebar />
  </div>
</template>

