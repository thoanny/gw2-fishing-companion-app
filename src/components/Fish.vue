<script setup>
const props = defineProps(['fish']);
const times = {
    'd': 'Jour',
    'n': 'Nuit',
    'dd': 'Aube/Crépuscule'
};
</script>

<template>
    <div class="rounded flex gap-4 items-center" :class="'rarity-' + fish.rarity">
        <div class="indicator self-start">
            <span class="indicator-item badge badge-success" v-if="fish.done"></span>
            <span class="indicator-item badge badge-error" v-else></span>
            <div class="grid w-14 h-14 bg-base-300 place-items-center">
                <div class="avatar">
                    <div class="w-14 rounded-sm ring ring-offset-base-100 ring-offset-2">
                        <img :src="'https://api.lebusmagique.fr/uploads/api/gw2/items/' + fish.uid + '.png'" />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full">
            <strong class="leading-4 text-white">{{ fish.name }}</strong>
            <div class="flex flex-wrap gap-x-2 flex-start whitespace-nowrap">
                <span v-if="fish.achievements" class="text-xs inline-flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="currentColor" viewBox="0 0 384 512">
                        <path
                            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    {{ fish.achievements.name }}
                </span>
                <span v-if="fish.hole" class="text-xs inline-flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="w-3 h-3" fill="currentColor">
                        <path
                            d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
                    </svg>
                    {{ fish.hole.name }}
                </span>
                <span v-if="fish.bait" class="text-xs inline-flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-3 h-3" fill="currentColor">
                        <path
                            d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z" />
                    </svg>
                    {{ fish.bait.name }}
                </span>
                <span class="text-xs inline-flex gap-1 items-center" v-if="fish.power">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-3 h-3" fill="currentColor">
                        <path
                            d="M510.28 445.86l-73.03-292.13c-3.8-15.19-16.44-25.72-30.87-25.72h-60.25c3.57-10.05 5.88-20.72 5.88-32 0-53.02-42.98-96-96-96s-96 42.98-96 96c0 11.28 2.3 21.95 5.88 32h-60.25c-14.43 0-27.08 10.54-30.87 25.72L1.72 445.86C-6.61 479.17 16.38 512 48.03 512h415.95c31.64 0 54.63-32.83 46.3-66.14zM256 128c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z" />
                    </svg>
                    {{ fish.power }}
                </span>
                <span v-if="fish.time" class="text-xs inline-flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-3 h-3" fill="currentColor"
                        v-if="fish.time === 'n'">
                        <path
                            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-3 h-3" fill="currentColor"
                        v-else-if="fish.time === 'd'">
                        <path
                            d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-3 h-3" fill="currentColor"
                        v-else-if="fish.time === 'dd'">
                        <path
                            d="M256 160c-52.9 0-96 43.1-96 96 0 26.5 10.8 50.5 28.1 67.8l135.7-135.7C306.5 170.8 282.5 160 256 160zm163.3-89.2l-100.4 33.5-47.4-94.7c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-2.3 6.8-.2 13.4 4.2 17.7l90.5-90.5c-49.9-49.9-49.9-131.1 0-181s131.1-49.9 181 0L437 75c-4.3-4.4-10.9-6.5-17.7-4.2zM160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm320-256c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-96 96c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm-144 64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm80 96c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0-192c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM320 448c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
                    </svg>
                    {{ times[fish.time] }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.rarity-Legendary .ring {
    --tw-ring-color: #93f;
}

.rarity-Ascended .ring {
    --tw-ring-color: #fb3e8d;
}

.rarity-Exotic .ring {
    --tw-ring-color: #ffa405;
}

.rarity-Rare .ring {
    --tw-ring-color: #fcd00b;
}

.rarity-Masterwork .ring {
    --tw-ring-color: #32b112;
}

.rarity-Fine .ring {
    --tw-ring-color: #5291f0;
}

.rarity-Basic .ring {
    --tw-ring-color: #fff;
}
</style>