<script setup>
import { ref,onMounted } from 'vue';

const animalDatas = ref([]);
onMounted(async () => {
  try {
    const response = await fetch('https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL');
    const result = await response.json();
    animalDatas.value = result;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

</script>

<template>
  <div class="card p-3 w-[250px]">
    <div class="p-2 w-full h-[180px] bg-slate-50 bg-opacity-80 rounded-md">
      <img src="" class="w-full">
    </div>
  </div>
  <main class="w-full flex gap-3 flex-wrap overflow-y-scroll">
    <!-- <div v-for="animal in animalDatas" :key="animal.animal_id" class="card p-3 w-[250px]">
    
    </div> -->
  </main>
</template>

<style>
</style>