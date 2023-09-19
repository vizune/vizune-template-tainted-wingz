<script setup>
    import Navigation from './Navigation.vue';
</script>

<template>
    <div class="flex flex-col justify-between">
        <img src="/sidebar-top.png" role="presentation" /> 
        <div style="background-color: #22293c; margin: .5rem 1.3rem;">
            <Navigation />
            <h2>Chatbox</h2>
            <div id="cboxdiv" style="position: relative; margin: 0 auto; width: 275px; font-size: 0; line-height: 0;">
            <div style="position: relative; height: 200px; overflow: auto; overflow-y: auto; -webkit-overflow-scrolling: touch; border: 0px solid;"><iframe src="https://www6.cbox.ws/box/?boxid=832058&amp;boxtag=XmylnA&amp;sec=main" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="auto" allowtransparency="yes" name="cboxmain6-832058" id="cboxmain6-832058"></iframe></div>
            <div style="position: relative; height: 150px; overflow: hidden; border: 0px solid; border-top: 0px;"><iframe src="https://www6.cbox.ws/box/?boxid=832058&amp;boxtag=XmylnA&amp;sec=form" allow="autoplay" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="no" allowtransparency="yes" name="cboxform6-832058" id="cboxform6-832058"></iframe></div>
            </div>
            <h2>Sister sisters</h2>
            <div class="flex justify-center mb-2">
                <a href="https://taintedwings.xyz/pages/sisterlink.php"><img src="/sister-site.png" alt="Wanna be a sister site? Click here" /></a>
            </div>
            
            <div class="flex flex-wrap justify-center mb-3">
                <a href="http://nightmarefantasmic.com/" target="_blank"><img src="https://i.postimg.cc/bwC4yyfM/mako-princess.gif" alt="Scerika"></a>
            </div>

            <h2>Elites</h2>

            <a href="https://ko-fi.com/P5P71CUPC" target="_blank"><img height="36" style="border:0px;height:36px;margin: 0 auto;" src="https://az743702.vo.msecnd.net/cdn/kofi5.png?v=2" border="0" alt="Buy Me a Coffee at ko-fi.com"></a>
        </div>
        
        <img src="/sidebar-bottom.png" role="presentation" /> 
    </div>
</template>

<style scoped>
.Sidebar {
    max-width: 465px;
}
</style>