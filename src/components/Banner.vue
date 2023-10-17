<script setup>

</script>

<template>
    <picture>
        <source media="(min-width: 75em)"
            srcset="/banner-long.jpg  1024w,
                /banner-long.jpg 640w,
                /banner.jpg  320w" />
        <img src="/banner.jpg" class="Banner" role="presentation" />
    </picture>
</template>

<style scoped>
.Banner {
    border-bottom: 20px solid #22293c;
    border-top: 20px solid #22293c;
}
</style>