<template>
    <!-- foreach -->
    <div v-for="item in data" :key="item.title" class="mb-4 px-3 py-2 flex flex-col gap-3 border border-yellow-200 border-opacity-50 rounded">
        <div class="p-2">
            <img class="h-[250px] rounded-ss-xl rounded-ee-xl" alt="圖片尚未出現" :src="item.src">
        </div>
        <!-- 文字介紹區塊 -->
        <div class="flex flex-col grow px-2">
            <div class="flex gap-2 items-center">
                <div class="title text-xl font-bold">{{ item.title }}</div>
                <a :href="item.href" class="font-bold text-base">{{ item.link }}</a>
            </div>
            <div class="content" v-html="item.content"></div>
        </div>
    </div>
    <!-- foreach -->
</template>

<script setup>
import { ref,computed } from 'vue';
const data = ref([
    {
        src : 'src/assets/exmac.png',
        href : 'https://exmac-rebuild.dev-hub.io/',
        title : '艾克馬 ( 專案 )',
        link : '測試站',
        content : '<p>此專案為全端班的Final Product，工程師確認無問題後會佈署上線。</p><p>使用Laravel10下去製作',
    },
    {
        src : 'src/assets/weather_api.png',
        href : 'https://github.com/Xaviera-19/weatherAPI',
        title : 'Fetch Open Data Api ( 氣象卡 )',
        link : 'GitHub',
        content : '陣列內，天氣小卡的內容',
    },

])
</script>