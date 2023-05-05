<script setup>
import { appWindow } from '@tauri-apps/api/window';

import Settings from './Settings.vue';
import About from './About.vue';

function handleWindowClose() {
    appWindow.close();
}
</script>

<template>
    <div data-tauri-drag-region
        class="select-none bg-primary text-secondary h-8 flex justify-between items-center fixed top-0 left-0 right-0 pl-2 pr-1 z-50">
        <div class="uppercase text-sm ff-rc flex flex-start gap-1" data-tauri-drag-region>
            <img src="../assets/images/logo-titlebar.png" alt="" data-tauri-drag-region>
            Compagnon de pêche
        </div>
        <div class="flex items-center">
            <Settings />
            <About />
            <button class="btn btn-xs btn-square btn-primary" id="titlebar-close" @click="handleWindowClose">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" fill="currentColor" class="w-4 h-4">
                    <path
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<style scoped>
.titlebar-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
}

.titlebar-button:hover {
    background: #5bbec3;
}
</style>