<script setup>
import Banner from './components/Banner.vue'
import Categories from './components/Categories.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
    <div class="SiteContainer">
      <Banner />
      <div class="Wrapper grid gap-4">
        <div class="Wrapper-content">
          <h1>⚜️<br /><span>Welcome to</span>Tainted Wings<br />✨</h1>
          <h1>⚜️<br />Visitor<br />content<br />❣️</h1>
          <h1>⚜️<br />Site<br />information<br />🎀</h1>
          <Categories />
        </div>
        <div class="Wrapper-sidebar">
          <Sidebar />
        </div>
      </div>
        
      
      <Footer />
    </div>
</template>

<style scoped>
.SiteContainer {
  width: 100%;
  max-width: 1436px;
  padding: 0 1rem;
  margin: 0 auto;
}
.Wrapper {
  grid-template: "content sidebar" 
}
.Wrapper-content {
  grid-area: "content";
}
.Wrapper-sidebar {
  grid-area: "sidebar";
}
</style>
