<script setup>
import { onMounted, ref } from "vue"
import { invoke } from '@tauri-apps/api/tauri'

const GW2 = ref({});
const isOnline = ref(false);
const noFishes = ref(false);

onMounted(() => {
  const getGW2MumbleLink = () => {
    invoke('gw2_mumble_link')
      .then((rustMsg) => {
        rustMsg = JSON.parse(rustMsg);
        if (rustMsg.length === 0) {
          isOnline.value = false;
        } else {
          rustMsg = JSON.parse(rustMsg);
          isOnline.value = true;
        }

        GW2.value = rustMsg;
      });
  };

  invoke('close_splashscreen').then(() => {
    getGW2MumbleLink();
    setInterval(getGW2MumbleLink, 30000);
  });

});

const allFishes = ref([]);
const fishes = ref([]);
const allBaits = ref({});
const baits = ref({});
const allHoles = ref({});
const holes = ref({});

const filters = ref({
  achievement: '',
  hole: '',
  bait: ''
});

async function initFishesApiData() {
  let response = await fetch(
    `https://api.lebusmagique.fr/api/gw2/fishes`
  );
  let data = await response.json();
  allFishes.value = data;

  data.forEach((fish, f) => {
    allFishes.value[f]['done'] = 0;

    if (fish.hole !== null) {
      allHoles.value[fish.hole.id] = fish.hole.name;
    }

    if (fish.bait !== null) {
      allBaits.value[fish.bait.uid] = fish.bait.name;
    }
  });

  fishes.value = allFishes.value;
  holes.value = allHoles.value;
  baits.value = allBaits.value;
}

initFishesApiData();

function updateFilters() {
  noFishes.value = false;
  baits.value = allBaits.value;

  fishes.value = allFishes.value.filter(fish => {
    if (filters.value.hole && filters.value.hole != fish.hole?.id) {
      return false;
    }

    if (filters.value.bait && filters.value.bait != fish.bait?.uid) {
      return false;
    }

    return true;
  });

  if (fishes.value.length === 0) {
    noFishes.value = true;
  }
}

</script>

<template>
  <div class="flex gap-2 m-2 mb-0">
    <button class="btn btn-xs" :class="{ 'btn-error': !isOnline, 'btn-success': isOnline }"
      v-text="(isOnline) ? 'Online' : 'Offline'"></button>
    <button class="btn btn-outline btn-xs" v-if="GW2">{{ GW2.name }}</button>
    <button class="btn btn-outline btn-xs" v-if="GW2">MAP: {{ GW2.map_id }}</button>
    <button class="btn btn-outline btn-xs" v-if="filters.hole">Hole: {{ filters.hole }}</button>
    <button class="btn btn-outline btn-xs" v-if="filters.bait">Bait: {{ filters.bait }}</button>
  </div>

  <div class="grid grid-cols-3 gap-2 m-2 mb-0">
    <select class="select select-xs select-bordered w-full" @change="updateFilters($event)" id="achievement">
      <option selected>-- Région --</option>
      <option value="todo">TODO</option>
    </select>

    <select class="select select-xs select-bordered w-full" @change="updateFilters" v-model="filters.hole">
      <option value="" selected>-- Zone de pêche --</option>
      <option v-for="name, id in holes" :key="id" :value="id">{{ name }}</option>
    </select>

    <select class="select select-xs select-bordered w-full" @change="updateFilters" v-model="filters.bait">
      <option value="" selected>-- Appât --</option>
      <option v-for="name, id in baits" :key="id" :value="id">{{ name }}</option>
    </select>
  </div>
  <button class="btn loading" v-if="!fishes">Chargement en cours...</button>
  <button class="btn btn-ghost" v-else-if="noFishes">Aucun poisson</button>
  <div v-else v-for="fish in fishes" class="border m-2 p-2 flex flex-col gap-1">
    <strong>{{ fish.name }}</strong>
    <span v-if="fish.hole">{{ fish.hole.name }}</span>
    <span v-if="fish.bait">{{ fish.bait.name }}</span>
  </div>
</template>

<style scoped></style>
