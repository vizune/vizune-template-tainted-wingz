<script setup>
import Banner from './components/Banner.vue'
import Categories from './components/Categories.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Banner />
  <div class="container">
  <div class="Wrapper lg:grid lg:gap-6">
      <div class="Wrapper-content">
        <h1>⚜️<br /><span>Welcome to</span>Tainted Wings<br />✨</h1>
        <div>
            <p>Hello, Welcome to Tainted Wingz. This place on web is Salya's realm in the dark abyss on the net. As well as her partner, Sasha.</p>
            <p>In this dark abyss of Tainted Wingz, also called TW, you will find;</p>
            <ul>
              <li>Graphics that you may use, just give credit.</li>
              <li>Join Contests when there is one.</li>
              <li>Play some simple games.</li>
              <li>Give your vote on new things.</li>
              <li>Buy commission and custom graphics for personal use.</li>
            </ul>
            <p>And a lot more. So take a seat and look around. There could be something of interest here. If you wish to help out, you may. We welcome Donated Graphics, Gifts, Suggestsions and Everything else!</p>
            <p>Even donate a small bit of money to Salya's Paypal would help up big time to keep TW up!</p>
          </div>
        <Categories />
      </div>
      <div class="Wrapper-sidebar">
        <Sidebar />
      </div>
        
      
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.SiteContainer {
  width: 100%;
  max-width: 1436px;
  padding: 0 1rem;
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .Wrapper {
    grid-template: "content sidebar";
    grid-template-columns: 1fr 464px;
  }
}
.Wrapper-content {
  grid-area: "content";
  border-right: 1px solid white;
  padding-top: 3rem;
}
.Wrapper-sidebar {
  grid-area: "sidebar";
  padding-top: 3rem;
}
</style>
