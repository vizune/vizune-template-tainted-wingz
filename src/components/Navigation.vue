<script setup>
const links = [
    {
        name: 'Home',
        url: 'http://taintedwings.xyz/',
        active: true
    },
    {
        name: 'Visitor',
        url: '/pages/visitor.php',
        active: false
    },
    {
        name: 'Site',
        url: '/pages/site.php',
        active: false
    },
    {
        name: 'Web Store',
        url: '/pages/webstore.php',
        active: false
    },
    {
        name: 'Buttons',
        url: '/pages/linkout.php',
        active: false
    },
    {
        name: 'Affiliates',
        url: '/pages/linkx2.php',
        active: false
    }
];
</script>

<template>
    <ul>
        <li v-for="link in links">
            <a :href="link.url" :class="{ active: link.active }">
                {{ link.name }}
            </a>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 1.25rem .5rem;
}

ul > * + * {
    margin-top: 1rem;
}

a {
    background: url('/nav-button.png') no-repeat;
    display: block;
    width: 237px;
    height: 73px;
    margin: 0 auto;
    text-align: center;
    padding: 21px 0;
    font-size: 1.25rem;
    position: relative;
}

a:hover {
    text-decoration: underline;
}

a.active:after {
    content: '';
    background: url('/butterfly.png');
    width: 28px;
    height: 28px;
    display: block;
    position: absolute;
    bottom: 0;
    left: 7%;
}
</style>