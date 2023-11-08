<script setup>
    import Navigation from './Navigation.vue';
    import Affiliate from './Affiliate.vue';
    import Widget from './Widget.vue';

    const elites = [
        {
            owner: 'Alaina',
            name: 'Screamm Quean',
            url: 'https://screammquean.love-acid.com/'
        },
        {
            owner: 'Dartzia',
            name: 'Screamm Quean',
            url: 'https://screammquean.love-acid.com/'
        },
        {
            owner: 'Karla',
            name: 'Screamm Quean',
            url: 'https://screammquean.love-acid.com/'
        },
        {
            owner: 'Rach',
            name: 'Screamm Quean',
            url: 'https://screammquean.love-acid.com/'
        }
    ];
</script>

<template>
    <div class="Sidebar flex flex-col justify-between max-w-[465px] mx-auto">
        <img src="/sidebar-top.png" role="presentation" /> 
        <div class="my-2 mx-[1.3rem]">
            <Widget>
                <Navigation />
            </Widget>

            <h2>Chatbox</h2>
            <Widget>
                <div id="cboxdiv" style="position: relative; margin: 0 auto; width: calc(100% - 2rem); font-size: 0; line-height: 0;">
                    <div style="position: relative; height: 200px; overflow: auto; overflow-y: auto; -webkit-overflow-scrolling: touch; border: 0px solid;"><iframe src="https://www6.cbox.ws/box/?boxid=832058&amp;boxtag=XmylnA&amp;sec=main" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="auto" allowtransparency="yes" name="cboxmain6-832058" id="cboxmain6-832058"></iframe></div>
                    <div style="position: relative; height: 150px; overflow: hidden; border: 0px solid; border-top: 0px;"><iframe src="https://www6.cbox.ws/box/?boxid=832058&amp;boxtag=XmylnA&amp;sec=form" allow="autoplay" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="no" allowtransparency="yes" name="cboxform6-832058" id="cboxform6-832058"></iframe></div>
                </div>
            </Widget>
            
            <h2>Sister sisters</h2>
            <Widget>
                <div class="flex justify-center mb-2">
                    <a href="https://taintedwings.xyz/pages/sisterlink.php"><img src="/sister-site.png" alt="Wanna be a sister site? Click here" /></a>
                </div>
            
                <div class="flex flex-wrap justify-center mb-3">
                    <a href="http://nightmarefantasmic.com/" target="_blank"><img src="https://i.postimg.cc/bwC4yyfM/mako-princess.gif" alt="Scerika"></a>
                </div>
            </Widget>

            <h2>Elites</h2>
            <Widget>
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex justify-center my-2" v-for="link in elites">
                        <Affiliate :owner="link.owner" :name="link.name" :url="link.url" />
                    </div>
                </div>
            </Widget>
            
            <h2>Network</h2>
            <Widget>
                <a href="https://ko-fi.com/P5P71CUPC" target="_blank"><img height="36" style="border:0px;height:36px;margin: 0 auto;" src="https://az743702.vo.msecnd.net/cdn/kofi5.png?v=2" border="0" alt="Buy Me a Coffee at ko-fi.com"></a>
            </Widget>
               
        </div>
        
        <img src="/sidebar-bottom.png" role="presentation" /> 
    </div>
</template>

<style scoped>

.Sidebar h2 {
    background-color: #07080e;
    width: 100%;
    border-top: 15px solid #07080e;
    border-bottom: 15px solid #07080e;
    height: 130px;
}
</style>