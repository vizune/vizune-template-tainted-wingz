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
        <div class="flex lg:pr-8 mb-8">
          <div class="shrink-0 mr-4">
            <img src="/welcome.png" alt="Welcome" />
          </div>
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
        </div>

        <h2>Update blog</h2>
        <div class="flex mt-6">
          <div class="flex flex-col shrink-0 mr-4">
            <img src="https://placehold.co/150x200" role="presentation" class="mb-2">
            <span class="text-gold">by SalyaDarken</span><br />
            <span class="text-gold">10-17-2023</span><br />
            <span class="text-gold">Edited: 10-24-2023</span>
          </div>
          <div class="lg:pr-8 mb-8">
            <p>Hey there! There was a few updates in the last few days. Small updates but still. Also I'm leaving the poll details up, since I... don't know. look over it for the updates lists. XD</p>
            <p><strong>Q:</strong> It's late in the year, so what would you all like to see?</p>
            <ul>
              <li>More Holiday Graphics - More icons, Icon bases, buttons and wallpapers for all holiday pages</li>
              <li>Halloween Graphics - More things for the Halloween page.</li>
              <li>Fall theme free layout - a new layout for you all that is Fall theme, maybe a Halloween style. I don't know yet.</li>
              <li>More CyberStamps - Some halloween CS. Like one for black cats or Halloween candy.</li>
              <li>Halloween Dolls - A few dolls that is halloween theme.</li>
              <li>Other - You can comment below the poll or you can just email me.</li>
            </ul>

            <p>So yea, you can just vote, once a day. The poll will end on Nov 1st. So the halloween graphics will be late, but whatever. XD So get to voting!</p>

            <p>Oh and if you want me to host a contest but you will need to gave an idea. XD</p>

            <p><strong>Updates</strong></p>

            <ul>
              <li>My requests for you page was updates. Click here to check it out.</li>
              <li>Added all gift stories send to me to the gift page. 02 are from Tiffany since she is that nice. And the last one is the last one-shot that my late best friend wrote me.</li>
              <li>Moved around things on the Site page.</li>
              <li>Stories page was added to sidebar. If you want to add your stories to TW, just use the forms on the pages.</li>
              <li>Halloween Graphics was updated with a few more blank icons.</li>
              <li>04 more dolls. 3 of them are Halloween theme.</li>
              <li>01 new layout by Sasha was added and it's Halloween theme.</li>
            </ul>

            <p><strong>Shoutout:</strong> Unbreakable -Claressa's site. Her site is all cute and neat looking. She is the one that got me into doing Dolls on Tainted wingz. ^_^ </p>
          </div>
        </div>

        <Categories />
      </div>
      <div class="Wrapper-sidebar">
        <Sidebar />
      </div>
      <div class="Wrapper-footer">
        <Footer />
      </div>
      
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
.Wrapper-content {
  grid-area: "content";
  margin-top: 5rem;
}
.Wrapper-sidebar {
  grid-area: "sidebar";
  padding-top: 3rem;
}
.Wrapper-footer {
  grid-area: "footer";
  grid-column-end: span 2;
}
@media (min-width: 1024px) {
  .Wrapper {
    grid-template: 
      "content sidebar"
      "footer footer";
    grid-template-columns: 1fr 464px;
    grid-template-rows: auto;
  }
  .Wrapper-content {
    border-right: 1px solid white;
  }
}
</style>
