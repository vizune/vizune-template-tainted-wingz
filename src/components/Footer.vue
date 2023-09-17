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
    <div class="Listing flex flex-wrap gap-4" style="width: 1000px;">
        <Affiliate v-for="link in affiliates" :owner="link.owner" :name="link.name" :url="link.url" />
    </div>
</template>

<style scoped>
.Listing * {
    margin-left: 3rem;
}
</style>