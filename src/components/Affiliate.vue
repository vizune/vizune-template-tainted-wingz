<script setup>
const props = defineProps({
    owner: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})
</script>

<template>
    <a :href="url" target="_blank" :title="`${owner} @ ${name}`" class="Affiliate relative z-10">
        <span class="Affiliate-text text-sm text-center">{{ owner }}</span>
    </a>
</template>

<style scoped>
.Affiliate {
    width: 100px;
    display: block;
}

.Affiliate:hover .Affiliate-text {
    text-decoration: underline;
}

.Affiliate-text {
    display: block;
    width: 100%;
    background: #293b93;
    border: 1px solid #1f2c6b;
    line-height: 2rem;
}
.Affiliate:before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border-style: solid;
    top: 6px;
    z-index: -10;
    border-color: #223076 #223076 #223076 transparent;
    left: -24px;
    border-width: 16px;
}

.Affiliate:after {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border-style: solid;
    top: 6px;
    z-index: -10;
    border-color: #223076 transparent #223076 #223076;
    right: -24px;
    border-width: 16px;
}
</style>