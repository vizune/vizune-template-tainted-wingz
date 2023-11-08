<script setup>
import Affiliate from './Affiliate.vue';

const affiliates = [
    {
        owner: 'Claressa',
        name: 'Unbreakable',
        url: 'http://unbreakable.scenecult.cc/'
    },
    {
        owner: 'Amanda',
        name: 'Forbidden Love',
        url: 'http://forbiddenl0ve.net/'
    },
    {
        owner: 'Dee',
        name: 'Crumple Lucinda',
        url: 'https://crumplelucinda.blogspot.com/'
    },
    {
        owner: 'Monay',
        name: 'Love Dust',
        url: 'http://lovedust.us/'
    },
    {
        owner: 'Kei',
        name: 'Nostalgia for the 2000s',
        url: 'https://nostalgic.neocities.org/'
    },
    {
        owner: 'Tiffany',
        name: 'Love is Zero',
        url: 'http://loveiszero.net/'
    },
    {
        owner: 'Victoria',
        name: 'Dazzling Dollies',
        url: 'https://dazzlingdollies.neocities.org/'
    },
    {
        owner: 'Runarea',
        name: 'Elysium',
        url: 'https://www.runarea.it/'
    },
    {
        owner: 'Kayla',
        name: 'Love Blush',
        url: 'https://loveblush.net/'
    },
    {
        owner: 'Mina',
        name: "Minako's Sailor Moon Page",
        url: 'https://minakos-sailormoonpage.net/'
    },
    {
        owner: 'Yuumiko',
        name: 'Kuroi Inku',
        url: 'https://kuroi-inku.aniyu.net/'
    },
    {
        owner: 'Karen',
        name: 'Snow Drops',
        url: 'https://snow-drops.org/'
    },
    {
        owner: 'Nine',
        name: 'Prism Snow',
        url: 'https://prism-snow.blogspot.com/'
    },
    {
        owner: 'Aphelion',
        name: 'Aphelion Design',
        url: 'https://aphelion.aniyu.net/'
    },
    {
        owner: 'Suzy',
        name: 'Red Velvet',
        url: 'https://redvelvet.cc/'
    },
    {
        owner: 'My',
        name: 'Aurora Veil',
        url: 'https://auroraveil.org/'
    },
    {
        owner: 'Amanda',
        name: 'Screamm Quean',
        url: 'https://screammquean.love-acid.com/'
    }
]
</script>

<template>
    <div class="flex flex-wrap lg:flex-nowrap justify-center gap-4 mb-8 mt-8 lg:mt-0">
        <div class="w-[175px] shrink-0 flex flex-col items-center justify-end">
            <div class="flex justify-center flex-wrap mb-1">
                <a href="http://exvius.aelysia.net" target="_blank" rel="noopener noreferrer">
                    <img src="http://taintedwings.xyz/files/vii_aerith4.png">
                </a>
                <span class="text-xs">Aerith protects Tainted Wingz!</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-sm text-gold"><strong>Lost Souls Exchange</strong></span>
                <iframe src="https://www.taintedwings.xyz/exchange/members.php" marginwidth="0" marginheight="0" scrolling="no" frameborder="1" height="50" width="100"></iframe>
                <a href="https://www.taintedwings.xyz/exchange/lostsoulexchange.php" target="_blank" title="Join Us" class="text-sm">Join the Lost Souls</a>
            </div>
        </div>
        <div class="py-6 flex flex-col items-center lg:items-start">
            <h2 class="my-0 mx-7">Affiliates</h2>
            <div class="Listing flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
                <Affiliate v-for="link in affiliates" :owner="link.owner" :name="link.name" :url="link.url" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.Listing * {
    margin-left: 3rem;
    margin-right: 3rem;
}
</style>