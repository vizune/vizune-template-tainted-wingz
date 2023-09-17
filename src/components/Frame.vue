<script setup>
const props = defineProps({
    asset: {
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
    <div class="Frame">
        <a :href="url" class="relative block w-full h-full">
            <img :src="asset" class="absolute" />
            <img src="/frame.png" class="absolute">
            <span class="Frame-name absolute left-2/4 top-[65%] -translate-x-2/4">
                <span class="Frame-text z-10 p-1 text-center text-sm tracking-wider">{{ name }}</span>
            </span>
        </a>
    </div>
</template>

<style scoped>
.Frame {
    width: 236px;
    height: 236px;
}
.Frame-name {
    width: 65%;
    transition: transform .25s ease;
    transform-origin: center center;
    backface-visibility: hidden;
}
.Frame-text {
    display: block;
    width: 100%;
    background: #293b93;
    border: 1px solid #1f2c6b;
}
.Frame-name:before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border-style: solid;
    top: 4px;
    z-index: -10;
    border-color: #223076 #223076 #223076 transparent;
    left: -20px;
    border-width: 15px;
}

.Frame-name:after {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border-style: solid;
    top: 4px;
    z-index: -10;
    border-color: #223076 transparent #223076 #223076;
    right: -20px;
    border-width: 15px;
}

.Frame:hover .Frame-name {
    transform: translate3D(-50%, -3px, 0) scale(1.2);
}
</style>